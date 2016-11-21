/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSStatisticsPage = $.extend({}, LHSBasicPage, {
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
            this._createTable('#userTableWrapper', '/socialvoice/statistics/user', [
                {title: '用户名', field: 'name', autoWidth: '60%'},
                {title: '提交条数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#groupTableWrapper', '/socialvoice/statistics/group', [
                {title: '部门', field: 'name', autoWidth: '60%'},
                {title: '提交条数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#acceptUserTableWrapper', '/socialvoice/statistics/acceptuser', [
                {title: '用户名', field: 'name', autoWidth: '60%'},
                {title: '采用条数', field: 'count', sortable: true, order: 'desc'},
                {title: '省委采用', field: 'province_value', sortable: true, order: 'desc'},
                {title: '中宣部采用', field: 'china_value', sortable: true, order: 'desc'}
            ]),
            this._createTable('#acceptGroupTableWrapper', '/socialvoice/statistics/acceptgroup', [
                {title: '部门', field: 'name', autoWidth: '60%'},
                {title: '采用条数', field: 'count', sortable: true, order: 'desc'},
                {title: '省委采用', field: 'province_value', sortable: true, order: 'desc'},
                {title: '中宣部采用', field: 'china_value', sortable: true, order: 'desc'}
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