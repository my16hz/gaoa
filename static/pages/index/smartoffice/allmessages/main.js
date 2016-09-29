/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAllMessagesPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/notify/list', [
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
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal'
    },
    showDataModal: function (msg) {
        var editor = this.editor;
        var modal = $('#dataModal');
        var jqform = modal.find('form');

        this._setFormControlValues(jqform, msg);
        editor.ready(function () {
            editor.setContent(msg.content || '');
            editor.setDisabled();
        });

        this._showModal(modal, this.dataTable);
        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    }
});