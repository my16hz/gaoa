/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAnalyzePage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.sTime = this._createTimepicker('#starttime').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#endtime').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
        this.dataTables = [
            this._createTable('#pvMissReportTableWrapper', '/analyze/pvmiss', [
                {title: '舆情ID', field: 'id', sortable: true, order: 'desc'},
                {title: '标题', field: 'title', sortable: true, order: 'desc', autoWidth: '40%',
                    formatter: function (val, rowdata) {
                        return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                    }
                },
                {
                    title: '录入时间', field: 'createtime', sortable: true, order: 'desc',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日');
                    }
                },
                {title: '漏报单位', field: 'relate_department', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvGroupMissTableWrapper', '/analyze/groupmiss', [
                {title: '漏报单位', field: 'name', sortable: true, order: 'desc', autoWidth: '60%'},
                {title: '漏报条数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvItemTableWrapper', '/analyze/pvitem', [
                {title: '舆情属性', field: 'item', autoWidth: '50%'},
                {title: '舆情个数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvTypeTableWrapper', '/analyze/pvtype', [
                {title: '舆情类别', field: 'type', autoWidth: '50%'},
                {title: '舆情个数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvDutyTableWrapper', '/analyze/pvduty', [
                {title: '考核部门', field: 'name', autoWidth: '50%'},
                {title: '提交舆情数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvReviewTableWrapper', '/analyze/pvreview', [
                {title: '标题', field: 'title', autoWidth: '60%'},
                {title: '浏览数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvFellowTableWrapper', '/analyze/pvfellow', [
                {title: '标题', field: 'title', autoWidth: '60%'},
                {title: '评论数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvFeedbackTypeTableWrapper', '/analyze/pvfeedbacktype', [
                {
                    title: '回复类型', field: 'type', autoWidth: '60%',
                    formatter: function (val) {
                        switch (val) {
                            case 0: return '书面反馈';
                            default: return '网络反馈';
                        }
                    }
                },
                {title: '数量', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#pvCommentAndFeedbackTableWrapper', '/analyze/pvcomment', [
                {
                    title: '处置状态', field: 'dispose_stat', autoWidth: '60%',
                    formatter: function (val) {
                        switch (val) {
                            case 0: return '未批示';
                            case 1: return '已批示';
                            case 2: return '待审批';
                            case 3: return '转';
                            case 4: return '转发';
                            case 5: return '阅存';
                        }
                    }
                },
                {title: '数量', field: 'count', sortable: true, order: 'desc'}
            ])
        ];
    },
    events: {
        'click #btnSearch': 'doSearch'
    },
    doSearch: function () {
        var self = this;

        $.each(this.dataTables, function () {
            this.refresh({
                query: {
                    sTime: self.sTime.getTime(),
                    eTime: self.eTime.getTime()
                }
            });
        });
    }
});