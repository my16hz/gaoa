/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSStatisticsPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.userTable = this._createTable('#userTableWrapper', '/socialvoice/statistics/user', [
            {title: '用户名', field: 'name'},
            {title: '提交社情个数', field: 'count', sortable: true, order: 'desc'}
        ]);
        this.groupTable = this._createTable('#userTableWrapper', '/socialvoice/statistics/group', [
            {title: '区县', field: 'name'},
            {title: '提交社情个数', field: 'count', sortable: true, order: 'desc'}
        ]);
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal'
    },

    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    }
});