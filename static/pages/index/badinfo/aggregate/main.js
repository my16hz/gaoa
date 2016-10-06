/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAggregatePage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTables = [
            this._createTable('#websiteTableWrapper', '/badinfo/aggregate/website', [
                {title: '举报网站', field: 'website', sortable: true, order: 'desc'},
                {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#reporterTableWrapper', '/badinfo/aggregate/reporter', [
                {title: '举报者', field: 'username', sortable: true, order: 'desc'},
                {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#departmentTableWrapper', '/badinfo/aggregate/department', [
                {title: '举报单位', field: 'department', sortable: true, order: 'desc'},
                {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#zoneTableWrapper', '/badinfo/aggregate/zone', [
                {title: '所属地域', field: 'duty_zone', sortable: true, order: 'desc'},
                {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#typeTableWrapper', '/badinfo/aggregate/type', [
                {title: '举报类型', field: 'type', sortable: true, order: 'desc'},
                {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
            ]),
            this._createTable('#createrTableWrapper', '/badinfo/aggregate/creater', [
                {title: '填报者', field: 'createuser', sortable: true, order: 'desc'},
                {title: '填报次数', field: 'count', sortable: true, order: 'desc'}
            ])
        ];
        this.sTime = this._createTimepicker('#starttime');
        this.eTime = this._createTimepicker('#endtime');
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