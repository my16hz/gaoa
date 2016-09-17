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
        this.eTime = this._createTimepicker('#endtime', null, false);
        this.sTime.onChange(function (e) {
                $('#endtime').data("DateTimePicker").minDate(e.date);
            });
        this.eTime.onChange(function (e) {
            $('#starttime').data("DateTimePicker").maxDate(e.date);
        });
        this.pvItemTable = this._createTable('#pvItemTableWrapper', '/analyze/pvitem', [
            {title: '舆情类别', field: 'item'},
            {title: '计数', field: 'count'}
        ]);
        this.pvTypeTable = this._createTable('#pvTypeTableWrapper', '/analyze/pvtype', [
            {title: '舆情类别', field: 'type'},
            {title: '计数', field: 'count'}
        ]);
    }
});