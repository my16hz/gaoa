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
            {title: '文件标题', field: 'title', alwaysDisplay: true},
            {title: '主送机关', field: 'major_department'},
            {title: '抄送机关', field: 'cc_department'},
            {title: '发文字号', field: 'message_id'},
            {title: '秘密等级', field: 'secret_level'},
            {title: '紧急程度', field: 'urgent_level'},
            {title: '拟稿人', field: 'draft_user'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
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
                        self.showDataModal(arguments[2]);
                    }
                }
            }
        ]);
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage'
    },
    showDataModal: function (pubvoice) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        if (pubvoice.id) {
            self._setFormControlValues(jqform, rs);
        }
        self._showModal(modal, self.dataTable);
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

    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});