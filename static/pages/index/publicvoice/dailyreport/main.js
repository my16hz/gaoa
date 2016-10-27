/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/
        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/daily/list', [
            {field: 'checkbox', checkbox: true},
            {title: '总期数', field: 'id', sortable: true, alwaysDisplay: true},
            {title: '当季期数', field: 'issue_id', sortable: true},
            {title: '创建用户', field: 'createuser'},
            {
                title: '创建时间', field: 'createtime', sortable: true,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>',
                        '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        var modal = $('#dataModal');
                        var editor = self.editor;
                        var report = arguments[2];

                        report.id && self._setFormControlValues(modal.find('form'), report);

                        editor.ready(function () {
                            editor.setContent(report.content || '');
                            editor.setDisabled();
                        });

                        modal.find('a.btn-primary').attr('href', '/daily/export/' + report.id);

                        self._showModal(modal, self.dataTable);
                    },
                    'click a:last': function () {
                        var did = arguments[2].id;
                        var pvids = arguments[2].pvids;

                        bootbox.confirm('确认删除？', function (rs) {
                            rs && self._ajaxDelete(did, pvids, function () {
                                self.dataTable.refresh();
                            });
                        });
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal'
    },

    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    _ajaxDelete: function (did, pvids, done) {
        this._sendRequest({
            type: 'delete', url: '/daily/delete',
            data: {did: did, pvids: pvids},
            done: done
        });

        return this;
    }
});