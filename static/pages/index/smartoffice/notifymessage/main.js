/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSNotifyMessagePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/message/list', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '35%'},
            {
                title: '文件类型', field: 'type', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 1: return '收文签';
                        case 2: return '发文签';
                        case 3: return '通知';
                    }
                }
            },
            {title: '发布人', field: 'name', sortable: true, order: 'desc'},
            {
                title: '发布时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未通知';
                        case 3: return '已通知';
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self._showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnNotify': 'showDataModal',
        'click #btnSend': 'showNotifyModal',
        'click #btnDelete': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage',
        'click #dataModal #addAttach': 'addAttachInput',
        'click #notifyModal .btn-default': 'closeNotifyModal',
        'click #notifyModal .btn-primary': 'sendNotify'
    },
    showDataModal: function () {
        this._showDataModal({type: 3, id: null, content: ''});
    },
    showNotifyModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var modal = $('#notifyModal');
        var self = this;

        if (!ids.length) return bootbox.alert('请先选择要发送的通知！');

        this._setFormControlValues(modal.find('form'), {mids: ids.join()});
        this._sendRequest({
            type: 'get',
            url: '/sysmanage/members',
            done: function (rs) {
                _initMemberTree(rs);
                self._showModal(modal, dataTable);
            }
        });

        function _initMemberTree (members) {
            var groups = [{id: '_root_', parent: '#', text: '成员列表', type: 'root', state: {opened: true}}];
            var isCached = {};

            $.each(members, function (gpid, user) {
                gpid = '_gpid_' + (user.groupid || '');

                if (!isCached[gpid]) {
                    groups.push({id: gpid, parent: '_root_', text: user.groupname || '未分组', type: 'group'});
                    isCached[gpid] = true;
                }

                groups.push({id: user.id, parent: gpid, text: user.name, type: 'member'});
            });

            self.memberTree = self._createJsTree('#treeWrapper', groups).onChanged(function () {
                $('input[name="uids"]', modal).val(this.memberTree.getChecked().filter(function (id) {
                    return '_root_' !== id && !/^_gpid_/.test(id);
                }).join());
            });
        }
    },
    delSelected: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var self = this;

        ids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要删除的记录！');

        return this;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/smartoffice/message/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        modal.find('input[name="msgfile"]').val('').next('p').remove();

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveMessage: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/message/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.expand().refresh();
            }
        });
    },
    closeNotifyModal: function () {
        var modal = $('#notifyModal');

        this.memberTree.destroy();
        this._closeModal(modal, this.dataTable);
    },
    sendNotify: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/notify/send',
            validator: $.proxy(this._notifyValidator, this),
            done: function () {
                self.closeNotifyModal();
                self.dataTable.refresh();
            }
        });
    },

    _showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqinput = modal.find('input[name="msgfile"]');
        var hdinput = modal.find('input[name="attachment"]');
        var editor = this.editor;
        var self = this;

        this._setFormControlValues(modal.find('form'), msg);
        this._createUploader(jqinput, '/msgfile/' + uuid.v4(), _addAttachment);
        editor.ready(function () {
            editor.setContent(msg.content);
        });
        _showAttachment(msg.attachment);
        this._showModal(modal, this.dataTable);

        return this;

        function _addAttachment (res) {
            var jqp = jqinput.next('p');

            hdinput.val(res.url);

            !jqp.length && (jqp = $('<p></p>').css('margin-top', 12).insertAfter(jqinput));

            jqp.empty().append(
                res.name + ' (' + res.size + ' bytes)',
                $('<a href="javascript:">[删除]</a>').bind('click', function () {
                    $(this).parent().remove();
                    hdinput.val('');
                })
            );
        }

        function _showAttachment (attachment) {
            if (!attachment) return;

            $('<p></p>')
                .css('margin-top', 12)
                .append(
                    $('<a></a>')
                        .text(attachment.substring(attachment.lastIndexOf('/') + 1))
                        .attr({
                            href: '/msgfile/' + attachment,
                            target: '_blank'
                        }),
                    '&nbsp;',
                    $('<a href="javascript:">[删除]</a>')
                        .bind('click', function () {
                            $(this).parent().remove();
                            hdinput.val('');
                        })
                )
                .insertAfter(jqinput);
        }
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    },
    _notifyValidator: function () {
        var jqform = $('#notifyModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});