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

        this.dataTable = this._createTable('#tableWrapper', '/application/list', [
            {
                title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', sortable: true, order: 'desc'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc'},
            {title: '回帖人数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注人数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未提交';
                        case 1:
                            return '待审核';
                        case 2:
                            return '审核通过';
                        case 3:
                            return '审核不通过';
                        case 4:
                            return '已入报';
                        case 5:
                            return '待批示';
                        case 6:
                            return '已批示';
                        case 7:
                            return '待回复';
                        case 8:
                            return '已回复';
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="同意"><i class="glyphicon glyphicon-ok"></i></a>',
                        '<a href="javascript:" title="不同意"><i class="glyphicon glyphicon-remove"></i></a>',
                        '<a href="javascript:" title="暂缓通过"><i class="glyphicon glyphicon-pause"></i></a>',
                        '<a href="javascript:" title="详情"><i class="glyphicon glyphicon-edit"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:eq(0)': function () {
                        var pvid = arguments[2].id;

                        bootbox.confirm('审批通过所选舆情？', function (rs) {
                            rs && self._applyDirect(pvid, 0, "同意", function () {
                                self.dataTable.refresh();
                            });
                        });
                    },
                    'click a:eq(1)': function () {
                        var pvid = arguments[2].id;

                        bootbox.confirm('审批不通过所选舆情？', function (rs) {
                            rs && self._applyDirect(pvid, 1, "不同意", function () {
                                self.dataTable.refresh();
                            });
                        });
                    },
                    'click a:eq(2)': function () {
                        var pvid = arguments[2].id;

                        bootbox.confirm('暂缓通过所选舆情？', function (rs) {
                            rs && self._applyDirect(pvid, 2, "暂缓通过", function () {
                                self.dataTable.refresh();
                            });
                        });
                    },
                    'click a:eq(3)': function () {
                        var editor = self.editor;
                        var modal = $('#dataModal');
                        var pubvoice = arguments[2];

                        self._setFormControlValues(modal.find('form'), pubvoice);

                        editor.ready(function () {
                            editor.setContent(pubvoice.content || '');
                        });

                        self._showModal(modal, self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.sTime = this._createTimepicker('#starttime').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#endtime').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
    },
    events: {
        'click #dataModal .btn-primary': 'closeDataModal',
        'click #btnOK': 'applyOK',
        'click #btnDeny': 'applyDeny',
        'click #btnDelay': 'applyDelay',
        'click #btnSearch': 'doSearch'
    },
    doSearch: function () {
        var self = this;

        this.dataTable.refresh({
            query: {
                sTime: self.sTime.getTime(),
                eTime: self.eTime.getTime()
            }
        });
    },

    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    applyOK: function () {
        this._apply(0, "同意");
    },
    applyDeny: function () {
        this._apply(1, "不同意");
    },
    applyDelay: function () {
        this._apply(2, "暂缓通过");
    },
    _apply: function (result, content) {
        var dataTable = this.dataTable;
        var modal = $('#dataModal');
        this._setFormControlValues(modal.find('form'), {"approveResult": result, "approveContent": content});
        this._sendRequest({
            type: 'post',
            url: '/application/save',
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
    _applyDirect: function (pvid, result, content, done) {
        this._sendRequest({
            type: 'post',
            url: '/application/save',
            data: {"id": pvid, "approveResult": result, "approveContent": content},
            done: done
        });
    }
});