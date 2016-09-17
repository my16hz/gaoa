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
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/sendmsg/list', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true},
            {
                title: '文件类型', field: 'type',
                formatter: function (val) {
                    switch (val) {
                        case 1: return '收文签';
                        case 2: return '发文签';
                        case 3: return '通知';
                    }
                }
            },
            {title: '发布人', field: 'createuser'},
            {
                title: '发布时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未发布';
                        case 1: return '已发布';
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
                                    '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                    '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                                    ].join('&nbsp;&nbsp;');
                        case 1 :
                        case 2 : return ['<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                        '<a></a>'
                                    ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
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
        'click #btnNotify': 'showNotifyModal',
        'click #btnSendFile': 'showSendModal',
        'click #btnRecvFile': 'showRecvModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage'
    },
    showNotifyModal: function () {
        var msg = {'type': 3};
        this.showDataModal(msg);
    },
    showSendModal: function () {
        var msg = {'type': 2};
        this.showDataModal(msg);
    },
    showRecvModal: function () {
        var msg = {'type': 1};
        this.showDataModal(msg);
    },
    showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var self = this;

        if (msg.id) {
            this._setFormControlValues(jqform, msg);
        } else {
            this._buildMsg(msg);
        }
        this._showModal(modal, self.dataTable);
        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    _buildMsg: function(msg){
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/smartoffice/template',
            done: function (rs) {
                if (msg.type == 1) {
                    self._buildRecvMsg(rs);
                } else if (msg.type == 2) {
                    self._buildSendMsg(rs);
                } else {
                    self._buildNotifyMsg(rs);
                }
            }
        });
    },
    _buildRecvMsg: function (rs) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var no = parseInt(rs.smartoffice_recvmessage_id) + 1;
        var prefix = "广舆中心收[" + moment(new Date()).format('YYYY') + "] " + no + "号";
        var template = rs.template.recvmessage;
        template = template.replace('%message_id%');

        this._setFormControlValues(jqform, {'type': 1, "issue_id":no});
        editor.ready(function () {
            editor.setContent(template || '');
        });
    },
    _buildSendMsg: function (rs) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var no = parseInt(rs.smartoffice_sendmessage_id) + 1;
        var prefix = "广市举[" + moment(new Date()).format('YYYY') + "] " + no + "号";
        this._setFormControlValues(jqform, {'type': 2, "issue_id":no});
        editor.ready(function () {
            editor.setContent(rs.template.sendmessage || '');
        });
    },
    _buildNotifyMsg: function (rs) {
        var editor = this.editor;
        editor.ready(function () {
            editor.setContent(rs.template.notify || '');
        });
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

    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    },
    commitMessage: function() {
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
            type: 'delete', url: '/smartoffice/sendmsg/delete',
            data: {id: id},
            done: done
        });

        return this;
    }
});