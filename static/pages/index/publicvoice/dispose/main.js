/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDisposePage = $.extend({}, LHSBasicPage, {
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
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/dispose/list',
                queryParams: function (p) {
                    return { 'id': 10 };
                },
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
                        return '<a href="javascript:" title="处置">' +
                            '<i class="glyphicon glyphicon-edit"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDataModal(arguments[2]);
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

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
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
    showDataModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/sysmanage/groups',
            data: {'id':10},
            done: function (rs) {
                var jqform = '#dataModal form';
                var jqSelect = $('select[name="duty_department"]', jqform);
                jqSelect.find('option:gt(0)').remove();
                $.each(rs, function (n, gp) {
                    jqSelect.append($('<option></option>')
                        .attr('value', gp.id)
                        .text(gp.name));
                });

                if (pubvoice.hasOwnProperty('id')) {
                    $('input[name="url"]', jqform).prop('readonly', true);
                    self._setFormControlValues(jqform, pubvoice);
                    self.editor.setContent(pubvoice.content);
                } else {
                    self._setFormControlValues(jqform, pubvoice);
                    self.editor.setContent('');
                }

                self._shrinkTable()
                    ._showGridWrapper();
            }
        });

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/dispose/list',
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
    }
});