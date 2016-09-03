/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRTXReportPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/rtx/directive/list', [
            {field: 'checkbox', checkbox: true},
            {title: '网站名称', field: 'website'},
            {title: '网址', field: 'url'},
            {title: '上报人', field: 'report_user'},
            {
                title: '上报时间', field: 'report_time',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {title: '填报者', field: 'createuser'},
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
        this._createTimepicker('.lhstimepicker');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveRTX'
    },

    showDataModal: function (rtx) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;

        rtx.id && this._setFormControlValues(jqform, rtx);

        editor.ready(function () {
            editor.setContent(rtx.remark || '');
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
    saveRTX: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/rtx/directive/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
    },

    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/rtx/directive/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['remark'] = this.editor.getContent();

        return values;
    }
});