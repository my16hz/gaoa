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

        this.isShown = 'send';
        this.sendTable = this._createTable('#sendTableWrapper', '/smartoffice/sendmsg/unapproved', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '30%'},
            {title: '主送机关', field: 'major_department', sortable: true, order: 'desc'},
            {title: '发文字号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '紧急程度', field: 'urgent_level', sortable: true, order: 'desc'},
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
                    return '<a href="javascript:" title="审批"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:eq(0)': function () {
                        self._showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.recvTable = this._createTable('#recvTableWrapper', '/smartoffice/recvmsg/unapproved', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true, autoWidth: '30%'},
            {title: '收文编号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '来文单位', field: 'origin_department', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {
                title: '收文时间', field: 'recv_date', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
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
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="审批"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:eq(0)': function () {
                        self._showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.sendTable.showDataWrapper();
    },
    events: {
        'click #content-switch > .btn': 'changePageContent',
        'click #sendModal .btn-default': 'closeDataModal',
        'click #sendModal .btn-primary': 'saveData',
        'click #recvModal .btn-default': 'closeDataModal',
        'click #recvModal .btn-primary': 'saveData'
    },
    changePageContent: function (jqBtn) {
        if (jqBtn.hasClass('btn-primary')) return;

        ('recv' == (this.isShown = jqBtn.attr('data-type')) ?
            this.recvTable.showDataWrapper() :
            this.sendTable.showDataWrapper()).reviseAutoWidth();

        jqBtn.addClass('btn-primary')
            .removeClass('btn-default')
            .siblings()
            .removeClass('btn-primary')
            .addClass('btn-default');
    },
    closeDataModal: function () {
        var displayed = this._getDisplayed();

        this._clearFormControlValues(displayed.modal.find('form'))
            ._closeModal(displayed.modal, displayed.dataTable);
    },
    saveData: function () {
        var self = this;
        var displayed = this._getDisplayed();

        this._sendRequest({
            type: 'post',
            url: displayed.saveUrl,
            validator: displayed.validator,
            done: function () {
                displayed.dataTable.refresh();
                self.closeDataModal();
            }
        });
    },

    _showDataModal: function (msg) {
        var displyed = this._getDisplayed();

        this._setFormControlValues(displyed.modal.find('form'), msg)
            ._showModal(displyed.modal, displyed.dataTable);
    },
    _recvValidator: function () {
        var values = this._validate($('#recvModal form'), {
            copies: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            }
        });

        return values || false;
    },
    _sendValidator: function () {
        var values = this._validate($('#sendModal form'), {
            copies: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            }
        });

        return values || false;
    },
    _getDisplayed: function () {
        return 'recv' == this.isShown ? {
            dataTable: this.recvTable,
            modal: $('#recvModal'),
            saveUrl: '/smartoffice/recvmsg/comment',
            validator: $.proxy(this._recvValidator, this)
        } : {
            dataTable: this.sendTable,
            modal: $('#sendModal'),
            saveUrl: '/smartoffice/sendmsg/comment',
            validator: $.proxy(this._sendValidator, this)
        };
    }
});