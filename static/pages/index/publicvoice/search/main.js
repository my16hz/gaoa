/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSSearchPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/pubvoice/search', [
            {field: 'checkbox', checkbox: true},
            {title: '舆情ID', field: 'id', sortable: true, order: 'desc'},
            {title: '日报期数', field: 'did', sortable: true, order: 'desc'},
            {title: '标题', field: 'title', alwaysDisplay: true, autoWidth: '18%',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', autoWidth: '10%'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc', maxWidth: 90},
            {title: '回帖数', field: 'fellow_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '关注数', field: 'review_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未提交';
                        case 1: return '待审核';
                        case 2: return '审核通过';
                        case 3: return '审核不通过';
                        case 4: return '已入报';
                        case 5: return '待批示';
                        case 6: return '已批示';
                        case 7: return '待回复';
                        case 8: return '已回复';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="详情"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var editor = self.editor;
                        var content = arguments[2].content;

                        editor.ready(function () {
                            editor.setContent(content || '');
                            editor.setDisabled();
                        });

                        self._showModal('#dataModal', self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.sTime = this._createTimepicker('#starttime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#endtime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #btnExport': 'doExport',
        'click #dataModal .btn-default': 'closeDataModal'
    },
    doSearch: function () {
        var funcCtrls = $('.func-btns');

        this.dataTable.refresh({
            query: {
                state: funcCtrls.find('select:eq(0)').val(),
                dispose: funcCtrls.find('select:eq(1)').val(),
                feedback: funcCtrls.find('select:eq(2)').val(),
                type: funcCtrls.find('select:eq(3)').val(),
                item: $('#item').val(),
                title: funcCtrls.find('input:first').val(),
                sTime: this.sTime.getTime(),
                eTime: this.eTime.getTime()
            }
        });
    },
    doExport: function () {
        var funcCtrls = $('.func-btns');

        $('<iframe class="hide"></iframe>')
            .appendTo('body')
            .attr('src', '/pubvoice/search/export?' + $.param({
                    state: funcCtrls.find('select:eq(0)').val(),
                    dispose: funcCtrls.find('select:eq(1)').val(),
                    feedback: funcCtrls.find('select:eq(2)').val(),
                    type: funcCtrls.find('select:eq(3)').val(),
                    title: funcCtrls.find('input:first').val(),
                    sTime: this.sTime.getTime(),
                    eTime: this.eTime.getTime()
    }));
    },
    closeDataModal: function () {
        var modal = $('#dataModal');
        
        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    }
});