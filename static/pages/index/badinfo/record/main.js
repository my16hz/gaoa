/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var BadInfoRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('badinfoUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeModal',
        'click #dataModal .btn-primary': 'saveGuide'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/badinfo/list',
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
                    title: '网页路径',
                    field: 'url'
                }, {
                    title: '举报者',
                    field: 'username'
                }, {
                    title: '举报单位',
                    field: 'department'
                }, {
                    title: '所属地域',
                    field: 'duty_zone'
                }, {
                    title: '危害类型',
                    field: 'type'
                }, {
                    title: '举报时间',
                    field: 'date',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '举报查询码',
                    field: 'sn'
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

        $(['checkbox', 'url', 'username', 'department', 'duty_zone', 'type', 'date', 'sn', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'url', 'username', 'department', 'duty_zone', 'type', 'date', 'sn', 'action'])
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
        $('#dataModal').removeClass('hide').siblings().addClass('hide');

        self._shrinkTable()
            ._showGridWrapper();
    },
    _showDetailModal: function (pubvoice) {

    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/badinfo/list',
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
    saveGuide: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/guide/save',
            validator: $.proxy(this._guideValidator, this),
            done: function () {
                self._refreshTable().closeGuideModal();
            }
        });
    },
    _guideValidator: function () {
        var jqform = $('#guideModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});