/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSFeedbackPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/feedback/list', [
            {field: 'checkbox', checkbox: true},
            {title: '期数', field: 'daily_id', sortable: true, order: 'desc'},
            {title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '18%',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc', maxWidth: 90},
            {title: '回帖数', field: 'fellow_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '关注数', field: 'review_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc', minWidth: 112,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '状态', field: 'feedback_state', sortable: true, order: 'desc', width: 124,
                formatter: function (val) {
                    switch (val) {
                        case 0: return "已回复";
                        case 1: return "必须回复";
                        case 2: return "建议回复";
                        case 3: return "可以回复";
                        case 4: return "回复已编报";
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    var args = arguments[1].feedback_state;
                    switch (args) {
                        case 0:
                        case 4:
                            return [
                                '<a href="javascript:" title="反馈"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="采用"><i class="glyphicon glyphicon-ok"></i></a>'
                            ].join('&nbsp;');
                        default:
                            return [
                                '<a href="javascript:" title="反馈"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2])
                    },
                    'click a:last': function () {
                        self.showAcceptModal(arguments[2])
                    }
                }
            }
        ]);
        this.docEditor = this._createEditor('#docEditorWrapper');
        this.webEditor = this._createEditor('#webEditorWrapper');
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #dataModal .btn-default': 'closeModal',
        'click #dataModal .btn-primary': 'saveFeedback',
        'click #acceptModal .btn-default': 'closeAcceptModal',
        'click #acceptModal .btn-primary': 'saveAccept'
    },
    doSearch: function (jqbtn) {
        var id = $.trim(jqbtn.prev('input').val());

        this.dataTable.setFilter(id ? {did: id} : null)
            .refresh();
    },
    showDataModal: function (pubvoice) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var docEditor = this.docEditor;
        var webEditor = this.webEditor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {id: pubvoice.id},
            done: function (rs) {
                for (var r in rs) {
                    if (rs[r].type == 0) {
                        docEditor.ready(function () {
                            docEditor.setContent(rs[r].content || '');
                        });
                    }
                    if (rs[r].type == 1) {
                        webEditor.ready(function () {
                            webEditor.setContent(rs[r].content || '');
                        });
                    }
                }
                self._setFormControlValues(jqform, {id: pubvoice.id});
                self._showModal(modal, self.dataTable);
            }
        });

        return this;
    },
    showAcceptModal: function (pubvoice) {
        var modal = $('#acceptModal');
        var jqform = modal.find('form');
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/dailyid',
            data: {id: pubvoice.id},
            done: function (rs) {
                var value = {id: pubvoice.id};
                if (rs.length != 0) {
                    value['daily_id'] = rs[0].daily_id;
                }
                self._setFormControlValues(jqform, value);
                self._showModal(modal, self.dataTable);
            }
        });

        return this;
    },
    closeAcceptModal: function () {
        var modal = $('#acceptModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    closeModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveFeedback: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/feedback/save',
            validator: $.proxy(this._fbValidator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },

    _fbValidator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['doc'] = this.docEditor.getContent();
        values['web'] = this.webEditor.getContent();

        return values;
    },
    saveAccept: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/feedback/accept',
            validator: $.proxy(this._acceptValidator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    _acceptValidator: function () {
        var values = this._validate($('#acceptModal form'), {
            daily_id: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            }
        });

        return values || false;
    }
});