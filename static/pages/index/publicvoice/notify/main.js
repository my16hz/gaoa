/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSNotifyPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        // this.ajax({}, $.proxy(function () {
        //     $(this.el).append(jqtmpl($, {data: {}}).join(''));
        //     this.initDependencies();
        // }, this));

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('pvDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #pvDetailModal .btn-default': 'closeModal',
        'click #btnAdd': 'showNotifyModal'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/notify/list',
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
                    title: '舆情详情',
                    field: 'content',
                    visible: false
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
                        return '<a href="javascript:" title="详情">' +
                            '<i class="glyphicon glyphicon-eye-open"></i></a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showPVModal(arguments[2]);
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

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'createtime', 'content', 'state', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'relate_department', 'fellow_count', 'createtime', 'state', 'action'])
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
    _showPVModal: function (pubvoice) {
        var self = this;
        this.editor.setContent(pubvoice.content == null ? '' : pubvoice.content);
        this.editor.setDisabled();
        $('#pvDetailModal').removeClass('hide');
        $('#notifyModal').addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
    },
    showNotifyModal: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定通报？', function (rs) {
                rs && self._showNotifyModal(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要通报的舆情');
    },
    _showNotifyModal: function (pvids) {
        var modal = $('#notifyModal').removeClass('hide');
        var self = this;

        modal.siblings().addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
    },
    closeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    _saveNotify: function (ids, done) {
        this._sendRequest({
            type: 'post', url: '/notify/save',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _notifyValidator: function () {
        var jqform = $('#disposeDetailModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/notify/list',
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
    }
});