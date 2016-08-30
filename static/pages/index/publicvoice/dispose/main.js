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
        this.editor = UM.getEditor('disposeDetailUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #disposeDetailModal .btn-default': 'closeDisposeModal',
        'click #disposeDetailModal .btn-primary': 'saveDispose'
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
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
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
                            '<i class="glyphicon glyphicon-comment"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="通报">' +
                            '<i class="glyphicon glyphicon-bullhorn"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self._showDisposeModal(arguments[2]);
                        },
                        'click a:last': function () {
                            self._showNotifyModal(arguments[2]);
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
    _showDisposeModal: function (pubvoice) {
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/dispose/detail',
            data: {'id': pubvoice.id},
            done: function (rs) {
                var jqform = '#disposeDetailModal form';
                if (rs[0]['state'] == -1) {
                    pubvoice['doc_year'] = new Date().getYear() + 1900;
                    pubvoice['doc_no'] = 1;
                    var template = rs[0]['template'];
                    template = template.replace('%doc_year%', pubvoice['doc_year']);
                    template = template.replace('%doc_no%', pubvoice['doc_no']);
                    template = template.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
                    self.editor.setContent(template + pubvoice.content);
                } else {
                    self.editor.setContent(rs[0]['content']);
                }
                self._setFormControlValues(jqform, pubvoice);
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
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDisposeModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    saveDispose: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/dispose/save',
            validator: $.proxy(this._disposeValidator, this),
            done: function () {
                self._refreshTable().closeDisposeModal();
            }
        });
    },
    _disposeValidator: function () {
        var jqform = $('#disposeDetailModal form');
        var values = this._getFormControlValues(jqform);

        return  values;
    }
});