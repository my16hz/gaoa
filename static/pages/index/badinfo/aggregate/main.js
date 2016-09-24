/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAggregatePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.websiteTable = this._createTable('#websiteTableWrapper', '/badinfo/aggregate/website', [
            {title: '举报网站', field: 'website', sortable: true, order: 'desc'},
            {title: '举报次数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.sTime = this._createTimepicker('#starttime');
        this.eTime = this._createTimepicker('#endtime');
    },
    events: {
    }
});