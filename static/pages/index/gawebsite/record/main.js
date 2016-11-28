/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var WebsiteRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.sTime = this._createTimepicker('#sTime').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });

        this.dataTable = this._createTable('#tableWrapper', '/gawebsite/list', [
            {field: 'checkbox', checkbox: true},
            {title: '网站名称', field: 'website', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '网页路径', field: 'url', sortable: true, order: 'desc', autoWidth: '18%'},
            {title: '网站类别', field: 'type', sortable: true, order: 'desc', maxWidth: 60},
            {title: '所属区域', field: 'zone', sortable: true, order: 'desc', maxWidth: 60},
            {title: '备案号', field: 'record', sortable: true, order: 'desc', maxWidth: 60},
            {title: '主管单位', field: 'duty_department', sortable: true, order: 'desc', maxWidth: 60},
            {title: '负责人', field: 'duty_user', sortable: true, order: 'desc', maxWidth: 60},
            {
                title: '录入时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
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
            url: '/gawebsite/save',
            validator: $.proxy(this._websiteValidator, this),
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

    _websiteValidator: function () {
        var self = this;
        var values = this._validate($('#dataModal form'), {
            website: function (val) {
                if (!val || !val.length) return '不能为空。';
            },
            url: function (val) {
                if (!val || !val.length) return '不能为空。';
            }
        });

        return values || false;
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/gawebsite/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    }
});