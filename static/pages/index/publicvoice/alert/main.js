/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAlertPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showAlertModal',
        'click #btnDel': 'clearSelected',
        'click #alertModal .btn-default': 'closeModal',
        'click #alertModal .btn-primary': 'saveAlert'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/alert/list',
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
                    title: '预警标题',
                    field: 'title'
                }, {
                    title: '预警方式',
                    field: 'type'
                }, {
                    title: '涉舆部门',
                    field: 'department'
                }, {
                    title: '预警人',
                    field: 'sender'
                }, {
                    title: '接警人',
                    field: 'receiver'
                }, {
                    title: '预警开始时间',
                    field: 'starttime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '预警结束时间',
                    field: 'endtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '有效预警';
                            default:
                                return '预警结束';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="清除预警">' +
                            '<i class="glyphicon glyphicon-remove"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showAlertModal(arguments[2]);
                        },
                        'click a:last': function () {
                            var uid = arguments[2].id;

                            bootbox.confirm('确认清除预警？', function (rs) {
                                rs && self._ajaxDelete(uid, function () {
                                    self._refreshTable();
                                });
                            });
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

        $(['checkbox', 'type', 'department', 'sender', 'receiver', 'starttime', 'endtime', 'state', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(["checkbox", "type", "department", "sender", "receiver", "starttime", "endtime", "state", "action"])
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
    _showAlertModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#alertModal form';
                var type = rs;
                self._setFormControlValues(jqform, pubvoice);

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    showAlertModal: function () {
        $('#alertModal').removeClass('hide').siblings().addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();

    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/feedback/detail',
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
    saveAlert: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/alert/save',
            validator: $.proxy(this._alertValidator, this),
            done: function () {
                self._refreshTable().closeModal();
            }
        });
    },
    _alertValidator: function () {
        var jqform = $('#alertModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/alert/clear',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    clearSelected: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定清除？', function (rs) {
                rs && self._ajaxDelete(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要清除的预警');

        return this;
    }
});