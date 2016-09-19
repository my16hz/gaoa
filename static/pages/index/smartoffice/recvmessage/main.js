/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecvMessagePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/recvmsg/list', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true},
            {
                title: '收文时间', field: 'recv_date', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {title: '收文编号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '来文单位', field: 'origin_department', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '批示领导', field: 'approved_user', sortable: true, order: 'desc'},
            {title: '领取人', field: 'from_user', sortable: true, order: 'desc'},
            {title: '从何领取', field: 'from_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {   title: '状态', field: 'state', sortable: true, order: 'desc',
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
        this._createTimepicker('#recv_date');
        this._createTimepicker('#origin_date');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnCommit': 'commitMessage',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage'
    },
    showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var self = this;

        if (msg.id) {
            this._setFormControlValues(jqform, msg);
        } else {
            this._buildSendMsg();
        }
        this._showModal(modal, self.dataTable);
        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    _buildSendMsg: function(){
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/smartoffice/template',
            done: function (rs) {
                var modal = $('#dataModal');
                var jqform = modal.find('form');
                var no = parseInt(rs.smartoffice_recvmessage_id) + 1;
                var prefix = "广舆中心收[" + moment(new Date()).format('YYYY') + "] " + no + "号";
                self._setFormControlValues(jqform, {'message_id': prefix, "smartoffice_recvmessage_id":no});
            }
        });
    },
    saveMessage: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/recvmsg/save',
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
                    type: 'post', url: '/smartoffice/recvmsg/commit',
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
            type: 'delete', url: '/smartoffice/recvmsg/delete',
            data: {id: id},
            done: done
        });

        return this;
    }
});