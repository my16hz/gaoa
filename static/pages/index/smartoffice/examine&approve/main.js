/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSExamineAndApprovePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.sendTable = this._createTable('#sendTableWrapper', '/smartoffice/sendmsg/unapproved', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '主送机关', field: 'major_department', sortable: true, order: 'desc'},
            {title: '抄送机关', field: 'cc_department', sortable: true, order: 'desc'},
            {title: '发文字号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '紧急程度', field: 'urgent_level', sortable: true, order: 'desc'},
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
                    return '<a href="javascript:" title="审批"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showSendModal(arguments[2]);
                    }
                }
            }
        ]);
        this.recvTable = this._createTable('#recvTableWrapper', '/smartoffice/recvmsg/unapproved', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true},

            {title: '收文编号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '来文单位', field: 'origin_department', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '领取人', field: 'from_user', sortable: true, order: 'desc'},
            {
                title: '收文时间', field: 'recv_date', sortable: true, order: 'desc',
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
                    return '<a href="javascript:" title="审批"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showRecvModal(arguments[2]);
                    }
                }
            }
        ]);
    },
    events: {
        'click #sendModal .btn-default': 'closeSendModal',
        'click #sendModal .btn-primary': 'commentSendModal',
        'click #recvModal .btn-default': 'closeRecvModal',
        'click #recvModal .btn-primary': 'commentRecvModal'
    },
    showSendModal: function (msg) {
        var modal = $('#sendModal');
        var jqform = modal.find('form');
        var self = this;

        this._setFormControlValues(jqform, msg);
        this._showModal(modal, this.sendTable);
        this._showModal($('#recvModal'), this.recvTable);
    },

    showRecvModal: function (msg) {
        var modal = $('#recvModal');
        var jqform = modal.find('form');
        var self = this;

        this._setFormControlValues(jqform, msg);
        this._showModal(modal, self.recvTable);
        this._showModal($('#sendModal'), this.sendTable);
    },

    closeSendModal: function () {
        var modal = $('#sendModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.sendTable);

        this._closeModal($('#recvModal'), this.recvTable);
    },
    closeRecvModal: function () {
        var modal = $('#recvModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.recvTable);

        this._closeModal($('#sendModal'), this.sendTable);
    },
    commentSendModal: function () {
        var dataTable = this.sendTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/sendmsg/comment',
            validator: $.proxy(this._sendValidator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    commentRecvModal: function () {
        var dataTable = this.recvTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/recvmsg/comment',
            validator: $.proxy(this._recvValidator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    _recvValidator: function () {
        var jqform = $('#recvModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    },
    _sendValidator: function () {
        var jqform = $('#recvModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});