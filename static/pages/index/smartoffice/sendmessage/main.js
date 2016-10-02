/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSSendMessagePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/sendmsg/list', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '主送机关', field: 'major_department', sortable: true, order: 'desc'},
            {title: '抄送机关', field: 'cc_department', sortable: true, order: 'desc'},
            {title: '发文字号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '紧急程度', field: 'urgent_level', sortable: true, order: 'desc'},
            {title: '拟稿人', field: 'draft_user', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未提交';
                        case 1: return '待签发';
                        case 2: return '已签发';
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
                                '<a href="javascript:" title="导出"><i class="glyphicon glyphicon-export"></i></a>',
                                '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                            ].join('&nbsp;&nbsp;');
                        case 1 :
                        case 2 :
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="导出"><i class="glyphicon glyphicon-export"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:eq(1)': function () {
                        var msg = arguments[2];

                        self._sendRequest({
                            type: 'get',
                            url: '/smartoffice/template',
                            done: function (rs) {
                                var template = rs.template.sendmessage;
                                var editor = self.editor;
                                var modal = $('#detailModal');

                                $.each(['title', 'major_department', 'cc_department', 'message_id', 'copies',
                                    'secret_level', 'urgent_level', 'draft_user', 'keyword', 'content', 'dispose_user',
                                    'sign', 'countersign'], function (n, field) {
                                    template = template.replace('%' + field + '%', msg[field] || '');
                                });

                                editor.ready(function () {
                                    editor.setContent(template || '');
                                });

                                self._showModal(modal, self.dataTable);
                            }
                        });
                    },
                    'click a:eq(2)': function () {
                        var msgid = arguments[2].id;

                        bootbox.confirm('确定删除？', function (rs) {
                            rs && self._sendRequest({
                                type: 'delete', url: '/smartoffice/sendmsg/delete',
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
        'click #btnAdd': 'showDataModal',
        'click #btnCommit': 'commitMessage',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage',
        'click #detailModal .btn-default': 'closeExportModal',
        'click #detailModal .btn-primary': 'exportMessage'
    },
    showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var self = this;

        if (msg.id) {
            this._setFormControlValues(jqform, msg);
            this._showModal(modal, self.dataTable);
        } else {
            this._sendRequest({
                type: 'get',
                url: '/smartoffice/template',
                done: function (rs) {
                    var modal = $('#dataModal');
                    var no = parseInt(rs.smartoffice_sendmessage_id) + 1;
                    var prefix = '广市举[' + moment(new Date()).format('YYYY') + '] ' + no + '号';

                    self._setFormControlValues(modal.find('form'), {
                        message_id: prefix,
                        smartoffice_sendmessage_id: no
                    });
                    self._showModal(modal, self.dataTable);
                }
            });
        }
    },
    commitMessage: function () {
        var self = this;
        var dataTable = this.dataTable;
        var pids = dataTable.getSelected();

        pids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._sendRequest({
                    type: 'post', url: '/smartoffice/sendmsg/commit',
                    data: {ids: pids.join()},
                    done: function () {
                        dataTable.refresh();
                    }
                });
            }) :
            bootbox.alert('请先选择要提交的舆情');

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveMessage: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/sendmsg/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    closeExportModal: function () {
        var modal = $('#detailModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    exportMessage: function () {
        var modal = $('#detailModal ');

        modal.find('input[name="content"]').val(this.editor.getContent());
        modal.find('form').submit();
    },

    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});