/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showRecordModal',
        'click #btnImport': 'showImportModal',
        'click #btnCommit': 'applyApprobation',

        'click #recordModal .btn-default': 'closeRecordModal',
        'click #recordModal .btn-primary': 'savePubVoice',

        'click #importModal .btn-default': 'closeImportModal',
        'click #importModal .btn-primary': 'uploadDataFile'
    },

    showRecordModal: function (pubvoice) {
        this._shrinkTable();
        // show modal
        // 1. show data, set all disabled, hide submit.
        // 2. normally open.
    },
    showImportModal: function () {
        this._shrinkTable();
        // show modal
    },
    applyApprobation: function () {
        // get selected items
        // set post request!
    },
    closeRecordModal: function () {
        // hide modal
        this._expandTable();
    },
    savePubVoice: function () {
        // send post request!
        // success: close modal
        // error: show error
    },
    closeImportModal: function () {
        // hide modal
        this._expandTable();
    },
    uploadDataFile: function () {
        // upload file
        // success: close modal
        // error: show error
    },

    _drawTable: function () {
        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/pubvoice/records',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRError('请求失败:' + xhr.responseText);
                },
                columns: []
            });
        } else {

        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        return this;
    },
    _expandTable: function () {
        return this;
    }
});
