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

        this.dataTable = this._createTable('#tableWrapper', '/socialvoice/list', [
            {field: 'checkbox', checkbox: true},
            {title: "编号", field: 'id'},
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '作者', field: 'reportuser'},
            {title: '单位', field: 'department'},
            {title: '内容', field: 'origin_content'},
            {
                title: '上报时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '待报送';
                        case 1: return '已报送';
                        case 2: return '已采用';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                        '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        var modal = $('#dataModal');
                        var report = arguments[2];

                        report.id && self._setFormControlValues(modal.find('form'), report);

                        self._showModal(modal, self.dataTable);
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
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveSocialVoice',
        'click #importModal .btn-default': 'closeImportModal'
    },

    showDataModal: function () {
        var modal = $('#dataModal');
        this._showModal(modal, this.dataTable);
    },
    saveSocialVoice: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/socialvoice/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    },
    showImportModal: function () {
        var modal = $('#importModal');

        this._createUploader(modal.find('input[type="file"]'), '/datafile', function () {
            this._removeLoading().closeImportModal();
        });

        this._showModal(modal, this.dataTable);
    },
    delSelected: function () {
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
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    closeImportModal: function () {
        var modal = $('#importModal');
        var dataTable = this.dataTable;

        modal.find('input[type="file"]').val('');

        this._closeModal(modal, dataTable);
        dataTable.refresh();
    },

    _ajaxDelete: function (ids, done) {

    }
});