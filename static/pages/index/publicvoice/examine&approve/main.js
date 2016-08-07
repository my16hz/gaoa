/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSExamineAndApprovePage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        '#approveModal .btn-defautl': 'closeApproveModal',
        '#approveModal .btn-primary': 'saveApprobation'
    },

    closeApproveModal: function () {
        // hide modal
        // expand table
    },
    saveApprobation: function () {
        // send post request
        // success: close modal
        // error: show error
    },

    _drawDataTable: function () {
        return this;
    },
    _showApproveModal: function () {
        // show modal
        return this;
    }
});