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
        this.sTime = this._createTimepicker('#starttime');
        this.eTime = this._createTimepicker('#endtime');
        this.sTime.onChange(function (e) {
            $('#endtime').data("DateTimePicker").minDate(e.date);
        });
        this.eTime.onChange(function (e) {
            $('#starttime').data("DateTimePicker").maxDate(e.date);
        });

        this.pvMissPVTable = this._createTable('#pvMissReportTableWrapper', '/analyze/pvmiss', [
            {title: '舆情ID', field: 'id', sortable: true, order: 'desc'},
            {title: '标题', field: 'title', sortable: true, order: 'desc'},
            {
                title: '录入时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {title: '漏报者', field: 'name', sortable: true, order: 'desc'},
        ]);
        this.pvMissGroupTable = this._createTable('#pvGroupMissTableWrapper', '/analyze/groupmiss', [
            {title: '漏报者', field: 'name', sortable: true, order: 'desc'},
            {title: '漏报条数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.pvItemTable = this._createTable('#pvItemTableWrapper', '/analyze/pvitem', [
            {title: '舆情类别', field: 'item'},
            {title: '舆情个数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.pvTypeTable = this._createTable('#pvTypeTableWrapper', '/analyze/pvtype', [
            {title: '舆情类别', field: 'type'},
            {title: '舆情个数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.pvDutyTable = this._createTable('#pvDutyTableWrapper', '/analyze/pvduty', [
            {title: '考核部门', field: 'name'},
            {title: '提交舆情数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.pvReviewTable = this._createTable('#pvReviewTableWrapper', '/analyze/pvreview', [
            {title: '标题', field: 'title'},
            {title: '浏览数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.pvFellowTable = this._createTable('#pvFellowTableWrapper', '/analyze/pvfellow', [
            {title: '标题', field: 'title'},
            {title: '评论数', field: 'count', sortable: true, order: 'desc'}
        ]);
    },
    events: {
        'click #btnSearch': 'search'
    },
    search: function () {
        var start = $('#starttime');
        var end = $('endtime');

    }
});