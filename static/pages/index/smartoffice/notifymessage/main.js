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
                        case 1: return '收文签';
                        case 2: return '发文签';
                        case 3: return '通知';
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
                        case 0: return '未通知';
                        case 3: return '已通知';
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    var args = arguments[1].state;
                    switch(args) {
                        case 0 :  return [
                                    '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                    '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                                    ].join('&nbsp;&nbsp;');
                        default: return ['<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                        '<a></a>'
                                    ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self._showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        self.removeMsg(arguments[2])
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
        'click #notifyModal .btn-default': 'closeNotifyModal',
        'click #notifyModal .btn-primary': 'sendNotify'
    },
    showDataModal: function () {
        var msg = {'type': 3, 'id': null, 'content':''};
        this._showDataModal(msg);
    },
    _showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var self = this;
        this._setFormControlValues(jqform, msg);
        this.editor.setContent(msg.content);

        this._showModal(modal, self.dataTable);
        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    showNotifyModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var modal = $('#notifyModal');
        var jqform = modal.find('form');
        var self = this;

        if (!ids.length) {
            return bootbox.alert('请先选择要发送的通知！');
        }

        this._setFormControlValues(jqform, {mids: ids.join()});
        this._sendRequest({
            type: 'get',
            url: '/sysmanage/members',
            done: function (rs) {
                _initMultipleSelect(rs);
                self._showModal(modal, self.dataTable);
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
    closeNotifyModal: function () {
        var modal = $('#notifyModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveMessage: function () {
        var self = this;
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/message/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                dataTable.expand().refresh();
            }
        });
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);
        values['content'] = this.editor.getContent();

        return values;
    },
    sendNotify: function () {
        var self = this;
        this._sendRequest({
            type: 'post', url: '/smartoffice/notify/send',
            validator: $.proxy(this._notifyValidator, this),
            done: function () {
                self._closeModal($('#notfiyModal'), self.dataTable);
                self.dataTable.refresh();
            }
        });

        return this;
    },
    _notifyValidator: function () {
        var jqform = $('#notifyModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    },
    removeMsg: function (msg) {
        var self = this;
        bootbox.confirm('确定删除？', function (rs) {
            rs && self._ajaxDelete(msg.id, function () {
                self.dataTable.refresh();
            });
        })
    },
    _ajaxDelete: function(id, done) {
        this._sendRequest({
            type: 'delete', url: '/smartoffice/message/delete',
            data: {id: id},
            done: done
        });

        return this;
    }
});