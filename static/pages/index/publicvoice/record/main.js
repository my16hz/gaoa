/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/pubvoice/list', [
            {field: 'checkbox', checkbox: true},
            {
                title: '标题', field: 'title', alwaysDisplay: true,
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', sortable: true, order: 'desc'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc'},
            {title: '回帖人数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注人数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '上报用户', field: 'name', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未提交';
                        case 1:
                            return '待审核';
                        case 2:
                            return '审核通过';
                        case 3:
                            return '审核不通过';
                        case 4:
                            return '已入报';
                        case 5:
                            return '待批示';
                        case 6:
                            return '已批示';
                        case 7:
                            return '待回复';
                        case 8:
                            return '已回复';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    var args = arguments[1].state;
                    switch (args) {
                        case 0:
                        case 3:
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                            ].join('&nbsp;&nbsp;');
                        case 1:
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        var uid = arguments[2].id;

                        bootbox.confirm('确认删除？', function (rs) {
                            rs && self._ajaxDelete(uid, function () {
                                self.dataTable.refresh();
                            });
                        });
                    }
                }
            }
        ]);
        this.tableFilter = null;

        this.editor = this._createEditor('#editorWrapper');

        this.sTime = this._createTimepicker('#sTime').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #btnCommit': 'applyApprobation',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'savePubVoice',
        'click #dataModal .btn-infosrc': 'addInfoSrcRow',
        'click #importModal .btn-default': 'closeImportModal'
    },
    doSearch: function () {
        this.dataTable.setFilter({
            level: $('#level').val(),
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showDataModal: function (pubvoice) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/sysmanage/groups',
            done: function (rs) {
                _appendOptions(rs);
                _fillFormValues(pubvoice);

                self._showModal(modal, self.dataTable);
            }
        });

        function _appendOptions (values) {
            var jqSelect = $('select[name="duty_department"]', jqform);

            jqSelect.find('option:gt(0)').remove();

            $.each(values, function (n, gp) {
                jqSelect.append($('<option></option>')
                    .attr('value', gp.id)
                    .text(gp.name));
            });
        }

        function _fillFormValues (pubvoice) {
            var jqInput = $('input[name="url"]', jqform);

            jqInput.prop('readonly', !!pubvoice.id);

            if (pubvoice.id) {
                !$.isArray(pubvoice.url) && (pubvoice.url = pubvoice.url.split(','));
                !$.isArray(pubvoice.from_website) && (pubvoice.from_website = pubvoice.from_website.split(','));

                /*self._appendInfoSrcRow(jqInput.parents('div.form-group'))
                 ._setFormControlValues(jqform, pubvoice);*/
                self._setFormControlValues(jqform, pubvoice);
            }

            editor.ready(function () {
                editor.setContent(pubvoice.content || '');
            });
        }

        return this;
    },
    showImportModal: function () {
        var modal = $('#importModal');

        this._createUploader(modal.find('input[type="file"]'), '/datafile?type=pv', function () {
            this.closeImportModal();
        });

        this._showModal(modal, this.dataTable);
    },
    applyApprobation: function () {
        var self = this;
        var dataTable = this.dataTable;
        var pids = dataTable.getSelected();

        pids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._sendRequest({
                    type: 'post', url: '/pubvoice/apply',
                    data: {ids: pids.join()},
                    done: function () {
                        dataTable.refresh();
                    }
                });
            }) :
            bootbox.alert('请先选择要提交的舆情');

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        modal.find('div.info-src-row').remove();

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    savePubVoice: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/pubvoice/save',
            validator: $.proxy(this._pvValidator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
    },
    addInfoSrcRow: function (jqbtn) {
        this._appendInfoSrcRow(jqbtn.parents('.form-group'));
    },
    delSelected: function () {
        var self = this;
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();

        ids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要删除的记录！');

        return this;
    },
    closeImportModal: function () {
        var modal = $('#importModal');
        var dataTable = this.dataTable;

        modal.find('input[type="file"]').val('');

        this._closeModal(modal, dataTable);

        dataTable.refresh();
    },

    _appendInfoSrcRow: function (formRow) {
        var newRow = formRow.clone(false).addClass('info-src-row');

        newRow.find('input').val('');
        newRow.find('i')
            .removeClass('glyphicon-plus').addClass('glyphicon-minus')
            .parent().bind('click', function () {
            $(this).parents('div.form-group').remove();
        });
        newRow.insertAfter(formRow);

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
    _pvValidator: function () {
        var values = this._validate($('#dataModal form'), {
            review_count: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            },
            fellow_count: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            }
        });

        if (values) values['content'] = this.editor.getContent();

        return values || false;
    }
});
