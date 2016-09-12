/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/socialvoice/report/list', [
            {field: 'checkbox', checkbox: true},
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '作者', field: 'createuser'},
            {title: '社情ID', field: 'svids'},
            {
                title: '上报时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var modal = $('#dataModal');
                        var report = arguments[2];
                        var editor = self.editor;
                        editor.ready(function () {
                            editor.setContent(report.content || '');
                            editor.setDisabled();
                        });
                        self._showModal(modal, self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'exportReport'
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    }
});