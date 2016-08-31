/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRTXReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        $("#rtxTimepicker").datetimepicker({
            format: 'YYYY-MM-DD'
        });
        this.editor = UM.getEditor('rtxReportUE',{initialFrameHeight:300});
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnDel': 'delSelected',
        'click #rtxModal .btn-default': 'closeModal',
        'click #rtxModal .btn-primary': 'saveRTX'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/rtx/report/list',
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
                    title: '网站名称',
                    field: 'website'
                }, {
                    title: '网址',
                    field: 'url'
                }, {
                    title: '上报人',
                    field: 'report_user'
                }, {
                    title: '上报时间',
                    field: 'report_time',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日');
                    }
                }, {
                    title: '填报者',
                    field: 'createuser'
                }, {
                    title: '备注',
                    field: 'remark',
                    visible: false
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="详情">' +
                            '<i class="glyphicon glyphicon-eye-open"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showDetailModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
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

        $(['checkbox', 'report_time', 'website', 'report_user', 'createuser', 'createtime', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'report_time', 'website', 'url', 'report_user', 'createuser', 'createtime', 'action'])
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
    },
    showDataModal: function () {
        var self = this;
        $('#rtxModal').removeClass('hide').siblings().addClass('hide');
        this._clearFormControlValues($('#rtxModal form'));
        this.editor.setContent('');

        this._shrinkTable()
            ._showGridWrapper();
    },
    _showDetailModal: function (pubvoice) {
        var jqform = $('#rtxModal form');

        var values = this._setFormControlValues(jqform, pubvoice);
        $('#rtxModal').removeClass('hide').siblings().addClass('hide');
        this.editor.setContent(pubvoice.remark? pubvoice.remark: '');

        this._shrinkTable()
            ._showGridWrapper();
    },
    delSelected: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(mids, function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要删除的舆情');

        return this;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/rtx/report/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/rtx/report/list',
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
            }
        }
    },
    closeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveRTX: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/rtx/report/save',
            validator: $.proxy(this._rtxValidator, this),
            done: function () {
                self._refreshTable().closeModal();
            }
        });
    },
    _rtxValidator: function () {
        var jqform = $('#rtxModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});