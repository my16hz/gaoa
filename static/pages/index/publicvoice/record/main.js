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

        this.editor = UM.getEditor('lhsUE');

        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #btnCommit': 'applyApprobation',
        'click #dataModal .btn-default': 'closeDatadModal',
        'click #dataModal .btn-primary': 'savePubVoice',
        'click #importModal .btn-default': 'closeImportModal',
        'click #importModal .btn-primary': 'uploadDataFile'
    },

    showDataModal: function (pubvoice) {
        var modal = $('#dataModal').show();
        var jqform = modal.find('form');
        var self = this;

        modal.siblings().hide();

        if (pubvoice) {
            self._setFormControlValues(jqform, pubvoice);
        } else {

        }

        this._shrinkTable()
            ._showGridWrapper();
    },
    showImportModal: function () {
        $('#importModal').show().siblings().hide();

        this._shrinkTable()
            ._showGridWrapper();
    },
    applyApprobation: function () {
        // get selected items
        // set post request!
    },
    closeDataModal: function () {
        this._clearFormControlValues($('#dataModal form'))
            ._hideGridWrapper()
            ._expandTable();
    },
    savePubVoice: function () {
        // send post request!
        // success: close modal
        // error: show error
    },
    closeImportModal: function () {
        this._hideGridWrapper()
            ._expandTable();
    },
    uploadDataFile: function () {
        // upload file
        // success: close modal
        // error: show error
    },

    _drawDataTable: function () {
        var self = this;

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
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type',
                    formatter: function (val) {
                        return val == 1 ? '市级' : '县级';
                    }
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'status'
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除">' +
                            '<i class="glyphicon glyphicon-trash"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showMemberModal(arguments[2]);
                        },
                        'click a:last': function () {
                            var uid = arguments[2].id;

                            bootbox.confirm('确认删除？', function (rs) {
                                rs && self._ajaxDelete(uid, function () {
                                    self._refreshTable();
                                });
                            });
                        }
                    }
                }]
            });
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', '...', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', '...', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    }
});
