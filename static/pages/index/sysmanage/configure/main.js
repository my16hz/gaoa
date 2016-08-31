/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSConfigurePage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/


        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #configModal .btn-default': 'closeModal',
        'click #configModal .btn-primary': 'updateConfigure'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/sysmanage/configure',
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
                    title: '配置项',
                    field: 'name'
                }, {
                    title: '当前值',
                    field: 'value'
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="修改">' +
                            '<i class="glyphicon glyphicon-edit"></i></a>';
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
    _showGridWrapper: function () {
        $('#gridWrapper > div:first')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#gridWrapper > div:first')
            .next()
            .addClass('hide');

        return this;
    },
    showDataModal: function () {
        var self = this;
        $('#configModal').removeClass('hide').siblings().addClass('hide');
        this._clearFormControlValues($('#configModal form'));

        this._shrinkTable()
            ._showGridWrapper();
    },
    _showDetailModal: function (config) {
        var jqform = $('#configModal form');
        this._setFormControlValues(jqform, config);
        this._showGridWrapper();
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/sysmanage/configure',
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
        this._hideGridWrapper();
    },
    updateConfigure: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/sysmanage/configure/update',
            validator: $.proxy(this._configValidator, this),
            done: function () {
                self._refreshTable().closeModal();
            }
        });
    },
    _configValidator: function () {
        var jqform = $('#configModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});