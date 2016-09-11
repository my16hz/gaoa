/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDisposePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/socialvoice/list', [
            {field: 'checkbox', checkbox: true},
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
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var modal = $('#dataModal');
                        var report = arguments[2];

                        report.id && self._setFormControlValues(modal.find('form'), report);

                        self._showModal(modal, self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnAdd': 'showReportModal',
        'click #btnAccept': 'showAcceptModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveSocialVoice',
        'click #reportModal .btn-primary': 'saveReportModal',
        'click #reportModal .btn-default': 'closeReportModal'
    },

    showReportModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getWholeSelected();
        ids.length ?
            this._showReportModal(ids):
            bootbox.alert('请先选择要报送的社情！');
    },
    _showReportModal: function (ids) {
        var editor = this.editor;
        var modal = $('#reportModal');
        var content = '<p style="font-size:21px;font-family: 黑体;font-weight:normal">广安市网络舆情中心'+ moment(new Date()).format('MM月DD日') +"报送舆情信息"+ ids.length +"条</p>";
            content += '<p style="font-size:21px;font-family: 黑体;font-weight:normal">信息目录：</p>';
        for (var idx in ids) {
            content += '<p style="font-size:21px;font-family: 黑体;font-weight:normal">'+ idx + '. ' + ids[idx].title + '</p>'
        }
        editor.ready(function () {
            editor.setContent(content || '');
        });
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
    showAcceptModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();

        ids.length ?
            bootbox.confirm('确定被采用？', function (rs) {
                rs && self._ajaxAccept(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要采用的记录！');

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveReportModal: function () {

    },
    closeReportModal: function () {
        var modal = $('#reportModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    _ajaxAccept: function (ids, done) {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/socialvoice/accept',
            data: {"ids" : ids},
            done: function () {
                dataTable.expand().refresh();
            }
        });
    }
});