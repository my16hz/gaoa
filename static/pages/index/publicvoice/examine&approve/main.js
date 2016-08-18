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

        this.editor = UM.getEditor('approvedUE');

        this.reset()
            .initDependencies()
            ._drawDataTable();
    },
    reset: function () {
        this.dataTable = null;
        this.editor = null;

        return this;
    },
    events: {
        'click #approveModal .btn-default': 'closeApproveModal',
        'click #approveModal .btn-primary': 'saveApprobation'
    },

    closeApproveModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveApprobation: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/application/save',
            validator: $.proxy(this._approvedValidator, this),
            done: function () {
                self._refreshTable().closeApproveModal();
            }
        });
    },

    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/application/list',
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
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
                    formatter: function (val) {
                        switch (val) {
                            case 0:
                                return '未提交';
                            case 1:
                                return '待审批';
                            case 2:
                                return '审批通过';
                        }
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="审批">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showApproveModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _showApproveModal: function (pubvoice) {
        var jqform = '#approveModal form';

        $(['url', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count',
            'relate_department', 'duty_department'])
            .each(function (index, field) {
                $('input[name="' + field + '"]', jqform).prop('readonly', true);
            });
        this._setFormControlValues(jqform, pubvoice);
        this.editor.setContent(pubvoice.content);
        this._shrinkTable()
            ._showGridWrapper();

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/application/list',
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
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'status', 'action'])
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
    _approvedValidator: function () {
        var jqform = $('#approveModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});