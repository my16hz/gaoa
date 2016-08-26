/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/
        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('dailyDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #dailyDetailModal .btn-default': 'closeDailyDetailModal',
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dailyReportTable) {
            (this.dailyReportTable = $('#dailyReportTable')).bootstrapTable({
                method: 'get',
                url: '/daily/list',
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
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '总期数',
                    field: 'id'
                }, {
                    title: '当季期数',
                    field: 'issue_id'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDailyDetailModal(arguments[2]);
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
        this.dailyReportTable.bootstrapTable('refresh');

        return this;
    },
    showDailyDetailModal: function (arguments) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/daily/detail',
            data: {'id' : arguments.id},
            done: function (rs) {
                var jqform = '#dailyDetailModal form';

                $('input[name="content"]', jqform).prop('readonly', true);
                self._setFormControlValues(jqform, arguments);
                self.editor.setContent(rs[0]['content']);

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox',  'createtime', 'action'])
            .each(function (index, field) {
                self.dailyReportTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'id', 'issue_id', 'createtime', 'action'])
            .each(function (index, field) {
                self.dailyReportTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#dailyReportWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#dailyReportWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/daily/detail',
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
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDailyDetailModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
});