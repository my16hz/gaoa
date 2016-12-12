/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var BadInfoRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });

        this.dataTable = this._createTable('#tableWrapper', '/badinfo/list', [
            {
                field: 'checkbox', checkbox: true,
                formatter: function () {
                    return '<i class="hide lhs-disabled-chk">' + (arguments[1].createuser !== lhsuid) + '</>';
                }
            },
            {title: '网站名称', field: 'website', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '网页路径', field: 'url', sortable: true, order: 'desc', autoWidth: '18%'},
            {title: '举报者', field: 'username', sortable: true, order: 'desc', maxWidth: 60},
            {title: '举报单位', field: 'department', sortable: true, order: 'desc', maxWidth: 90},
            {title: '所属地域', field: 'duty_zone', sortable: true, order: 'desc', maxWidth: 150},
            {title: '危害类型', field: 'type', sortable: true, order: 'desc'},
            {title: '举报查询码', field: 'sn', sortable: true, order: 'desc', maxWidth: 90},
            {
                title: '举报时间', field: 'reportdate', sortable: true, order: 'desc'
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="详情"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.rTime = this._createTimepicker('#reportdate');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveInfo',
        'click #importModal .btn-default': 'closeImportModal',
        'click #btnSearch': 'doSearch'
    },
    doSearch: function () {
        this.dataTable.setFilter({
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showDataModal: function (info) {
        var editor = this.editor;
        var modal = $('#dataModal');

        if (info.id) {
            this._setFormControlValues(modal.find('form'), info);
            editor.ready(function () {
                editor.setContent(info.remark || '');
            });
        } else {
            this.rTime.setVal();
            editor.ready(function () {
                editor.setContent('');
            });
        }

        this._showModal(modal, this.dataTable);
    },
    showImportModal: function () {
        var modal = $('#importModal');

        this._createUploader(modal.find('input[type="file"]'), '/datafile?type=bi', function () {
            this.closeImportModal();
        });

        this._showModal(modal, this.dataTable);
    },
    delSelected: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var self = this;

        ids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh(
                    );
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
    saveInfo: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/badinfo/save',
            validator: $.proxy(this._badinfoValidator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
    },
    closeImportModal: function () {
        var modal = $('#importModal');
        var dataTable = this.dataTable;

        modal.find('input[type="file"]').val('');

        this._closeModal(modal, dataTable);

        dataTable.refresh();
    },

    _badinfoValidator: function () {
        var self = this;
        var values = this._validate($('#dataModal form'), {
            website: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            url: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            username: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            duty_zone: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            department: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            type: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            reportdate: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            sn: function (val) {
                if (!val || !val.length) return '不能为空。';
            }
        });

        if (values) values['remark'] = this.editor.getContent();

        return values || false;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/badinfo/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    }
});