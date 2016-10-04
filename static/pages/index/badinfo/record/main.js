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

        this.dataTable = this._createTable('#tableWrapper', '/badinfo/list', [
            {field: 'checkbox', checkbox: true},
            {title: '网站名称', field: 'website', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '网页路径', field: 'url', sortable: true, order: 'desc'},
            {title: '举报者', field: 'username', sortable: true, order: 'desc'},
            {title: '举报单位', field: 'department', sortable: true, order: 'desc'},
            {title: '所属地域', field: 'duty_zone', sortable: true, order: 'desc'},
            {title: '危害类型', field: 'type', sortable: true, order: 'desc'},
            {title: '举报查询码', field: 'sn', sortable: true, order: 'desc'},
            {
                title: '举报时间', field: 'reportdate', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
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
        this._createTimepicker('#reportdate');
    },
    events: {
        'click #btnAdd': 'showNewDataModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveInfo'
    },
    showNewDataModal: function () {
        var editor = this.editor;
        var modal = $('#dataModal');
        this._showModal(modal, this.dataTable);
        editor.ready(function () {
            editor.setContent('');
        });
    },
    showDataModal: function (info) {
        var editor = this.editor;
        var modal = $('#dataModal');

        info.id && this._setFormControlValues(modal.find('form'), info);
        editor.ready(function () {
            editor.setContent(info.remark || '');
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
    _badinfoValidator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);
        values['remark'] = this.editor.getContent();
        return  values;
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