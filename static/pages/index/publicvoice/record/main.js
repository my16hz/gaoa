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

        this.reset()
            .initDependencies()
            ._drawDataTable();
    },
    reset: function () {
        this.dataTable = null;
        this.editer = null;

        return this;
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #btnCommit': 'applyApprobation',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'savePubVoice',
        'click #importModal .btn-default': 'closeImportModal',
        'click #importModal .btn-primary': 'uploadDataFile'
    },
    showDataModal: function (pubvoice) {
        var self = this;

        this._appendEditor()
            ._sendRequest({
                type: 'get',
                url: '/sysmanage/groups',
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
    showImportModal: function () {
        $('#importModal').show().siblings().hide();

        this._shrinkTable()
            ._showImportGridWrapper();
    },
    applyApprobation: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv.id);
        });

        mids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._ajaxApply(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要提交的舆情');

        return this;
    },
    closeDataModal: function () {
        var self = this;

        $(['checkbox', 'title', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        this._clearFormControlValues($('#dataModal form'))
            .$('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');
    },
    savePubVoice: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/pubvoice/save',
            validator: $.proxy(this._pvValidator, this),
            done: function () {
                self._refreshTable().closeDataModal();
            }
        });
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
                rs && self._ajaxDelete(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要删除的舆情');

        return this;
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

    _appendEditor: function () {
        if (!this.editor) {
            $('#editorWrapper')
                .append('<script type="text/plain" id="lhsUE" style="width:100%;height:300px;"></script>')
                .width(function () {
                    return $(this).parent().width;
                });

            this.editor = UM.getEditor('lhsUE');
        }

        return this;
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/pubvoice/list',
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
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-edit"></i>' +
                            '</a>&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除">' +
                            '<i class="glyphicon glyphicon-trash"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDataModal(arguments[2]);
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
    _showImportGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-xs-2');
        $('#gridWrapper > div:last')
            .removeClass('hide');

        return this;
    },
    _hideImportGridWrapper: function () {
        $('#gridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next().next()
            .addClass('hide');

        return this;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/pubvoice/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _ajaxApply: function (ids, done) {
        this._sendRequest({
            type: 'post', url: '/pubvoice/apply',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _pvValidator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/pubvoice/list',
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
