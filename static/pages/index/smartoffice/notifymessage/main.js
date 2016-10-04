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
            {title: '文件标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {
                title: '文件类型', field: 'type', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 1:
                            return '收文签';
                        case 2:
                            return '发文签';
                        case 3:
                            return '通知';
                    }
                }
            },
            {title: '发布人', field: 'createuser', sortable: true, order: 'desc'},
            {
                title: '发布时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未通知';
                        case 3:
                            return '已通知';
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    var args = arguments[1].state;
                    switch (args) {
                        case 0 :
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                            ].join('&nbsp;&nbsp;');
                        default:
                            return ['<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self._showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        var msgid = arguments[2].id;

                        bootbox.confirm('确定删除？', function (rs) {
                            rs && self._sendRequest({
                                type: 'delete', url: '/smartoffice/message/delete',
                                data: {id: msgid},
                                done: function () {
                                    self.dataTable.refresh();
                                }
                            });
                        })
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnNotify': 'showDataModal',
        'click #btnSend': 'showNotifyModal',
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
        var jqform = modal.find('form');
        var self = this;

        if (!ids.length) return bootbox.alert('请先选择要发送的通知！');

        this._setFormControlValues(jqform, {mids: ids.join()});
        this._sendRequest({
            type: 'get',
            url: '/sysmanage/members',
            done: function (rs) {
                _initMultipleSelect(rs);
                self._showModal(modal, dataTable);
            }
        });

        function _initMultipleSelect (members) {
            var jqSelect = $('select[name="uids"]', jqform);
            var options = [$('<optgroup label="未分组"></optgroup>')];
            var index = {nogroup: 0};

            $.each(members, function (gpid, user) {
                gpid = user.groupid;

                if (!gpid) {
                    options[index.nogroup].append(
                        $('<option></option>')
                            .attr('value', user.id)
                            .text(user.name)
                    );
                } else {
                    if (!index[gpid]) {
                        options.push(
                            $('<optgroup></optgroup>')
                                .attr('label', user.groupname)
                                .append(
                                    $('<option></option>')
                                        .attr('value', user.id)
                                        .text(user.name)
                                )
                        );
                    } else {
                        options[index[gpid]].append(
                            $('<option></option>')
                                .attr('value', user.id)
                                .text(user.name)
                        );
                    }
                }
            });

            self._createSelect2(jqSelect.append(options))
                .clear();
        }
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

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    sendNotify: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/notify/send',
            validator: $.proxy(this._notifyValidator, this),
            done: function () {
                self._closeModal($('#notfiyModal'), self.dataTable);
                self.dataTable.refresh();
            }
        });
    },

    _showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqinput = modal.find('input[name="msgfile"]').val(msg.attachment || '');
        var editor = this.editor;
        var self = this;

        this._setFormControlValues(modal.find('form'), msg);
        this._createUploader(jqinput, '/msgfile/' + uuid.v4(), function (res) {
                if ('SUCCESS' != res.state) {
                    self._showXHRMessage(res.state, 'danger');
                } else {
                    _addAttachment(res);
                }
            }
        );
        editor.ready(function () {
            editor.setContent(msg.content);
        });
        this._showModal(modal, this.dataTable);

        return this;

        function _addAttachment (res) {
            modal.find('input[name="attachment"]').val(res.url);
            jqinput.after($('<p></p>').html(
                res.name + ' (' + res.size + ' bytes)',
                $('<a href="javascript:">[删除]</a>').bind('click', function () {
                    var jqp = $(this).parent().remove();
                })
            ));
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