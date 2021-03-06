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

        this.initDependencies()._appendGroups();

        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });

        this.dataTable = this._createTable('#tableWrapper', '/socialvoice/list', [
            {field: 'checkbox', checkbox: true},
            {title: "编号", field: 'id', sortable: true, order: 'desc'},
            {
                title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '40%',
                formatter: function (val) {
                    return '<a href="javascript:">' + val + '</a>';
                },
                events: {
                    'click a': function () { self.showDataModal(arguments[2], true); }
                }
            },
            {title: '作者', field: 'reportuser', sortable: true, order: 'desc'},
            {title: '单位', field: 'department', sortable: true, order: 'desc', maxWidth: 120},
            {
                title: '上报时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
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
                    ].join('&nbsp;');
                },
                events: {
                    'click a:first': function () { self.showDataModal(arguments[2]); },
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
        'click #importModal .btn-default': 'closeImportModal',
        'click #btnSearch': 'doSearch'
    },
    doSearch: function () {
        this.dataTable.setFilter({
            group: $('#group').val(),
            keyword: $('#keyword').val(),
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showDataModal: function (report, readonly) {
        var modal = $('#dataModal');

        report.id && this._setFormControlValues(modal.find('form'), report);

        modal.find('.btn-primary')[true === readonly ? 'hide' : 'show']();
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
    showImportModal: function () {
        var modal = $('#importModal');

        this._createUploader(modal.find('input[type="file"]'), '/datafile?type=sv', function () {
            this.closeImportModal();
        });

        this._showModal(modal, this.dataTable);
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
        this._sendRequest({
            type: 'delete', url: '/socialvoice/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _appendGroups: function () {
        return this._sendRequest({
            type: 'get',
            url: '/sysmanage/groups',
            done: function (rs) {
                var jqSelect = $('#group');

                jqSelect.find('option:gt(0)').remove();

                $.each(rs, function (n, gp) {
                    jqSelect.append($('<option></option>')
                        .attr('value', gp.name)
                        .text(gp.name));
                });
            }
        });
    },
    _validator: function () {
        var self = this;
        var values = this._validate($('#dataModal form'), {
            province_use: function (val) {
                if (isNaN(parseFloat(val))) return '必须为数字。';
            },
            china_use: function (val) {
                if (isNaN(parseFloat(val))) return '必须为数字。';
            },
            title: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            department: function (val) {
                if (!val || !val.length) return '不能为空。';
            }
        });

        return values || false;
    }
});