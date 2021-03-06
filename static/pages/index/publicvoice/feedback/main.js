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
            {title: '日报', field: 'daily_id', sortable: true, order: 'desc'},
            {title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '18%',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '时间', field: 'createtime', sortable: true, order: 'desc', minWidth: 112,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '有无批示', field: 'comment_count', sortable: true, order: 'desc', minWidth: 60,
                formatter: function (val) {
                    return val ? "有批示" : "";
                }
            },
            {title: '通报文号', field: 'dispose_doc_no', sortable: true, order: 'desc'},
            {
                title: '状态', field: 'feedback_state', sortable: true, order: 'desc', width: 100,
                formatter: function (val) {
                    var args = arguments[1];
                    switch (val) {
                        case 0: {
                            if (args.docFeedback && args.webFeedback) {
                                return "均回复";
                            } else if (!args.docFeedback && args.webFeedback) {
                                return "已网回";
                            } else if (args.docFeedback && !args.webFeedback) {
                                return "已书回";
                            } else {
                                return "已回复";
                            }
                        }
                        case 1: return "必须回复";
                        case 2: return "建议回复";
                        case 3: return "可以回复";
                        case 4: return "回复已编报";
                    }
                }
            },
            {title: '采用期数', field: 'feedback_daily_id', sortable: true, order: 'desc'},
            {
                title: '操作', field: 'action',
                formatter: function () {
                    var args = arguments[1].feedback_state;

                    switch (args) {
                        case 0:
                        case 4:
                            return [
                                arguments[1].comment_count ? '<a href="javascript:" title="查看批示"><i class="glyphicon glyphicon-comment"></i></a>' : '<a></a>',
                                '<a href="javascript:" title="反馈"><i class="glyphicon glyphicon-edit"></i></a>',
                                lhsupriority == 1 ? '<a href="javascript:" title="采用"><i class="glyphicon glyphicon-ok"></i></a>' : '<a></a>'
                            ].join('&nbsp;');
                        default:
                            return [
                                arguments[1].comment_count ? '<a href="javascript:" title="查看批示"><i class="glyphicon glyphicon-comment"></i></a>' : '<a></a>',
                                '<a href="javascript:" title="反馈"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;');
                    }
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showCommentModal(arguments[2])
                    },
                    'click a:eq(1)': function () {
                        self.showDataModal(arguments[2])
                    },
                    'click a:eq(2)': function () {
                        self.showAcceptModal(arguments[2])
                    }
                }
            }
        ]);
        this.docEditor = this._createEditor('#docEditorWrapper');
        this.webEditor = this._createEditor('#webEditorWrapper');
        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
        this.webFeedbackTime = this._createTimepicker('#webFeedbackTime', 'YYYY-MM-DD HH:mm');
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #dataModal .btn-default': 'closeModal',
        'click #dataModal .btn-primary': 'saveFeedback',
        'click #acceptModal .btn-default': 'closeAcceptModal',
        'click #acceptModal .btn-primary': 'saveAccept',
        'click #commentModal .btn-default': 'closeCommentModal'
    },
    doSearch: function (jqbtn) {
        this.dataTable.setFilter({
            state: $('#state').val(),
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showCommentModal: function (pubvoice) {
        var modal = $('#commentModal');
        var jqform = modal.find('form');
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/dispose/comment',
            data: {id: pubvoice.id},
            done: function (rs) {
                var comment_user = "",
                    comment = "";
                for (var r in rs) {
                    if (rs[r].type == 1) {
                        comment += rs[r].comment + "\n";
                        comment_user += rs[r].comment_user + "\n";
                    }
                }
                self._setFormControlValues(jqform, {comment_user: comment_user || "无批示", comment: comment || "无批示"});
                self._showModal(modal, self.dataTable);
            }
        });

        return this;
    },
    closeCommentModal: function () {
        var modal = $('#commentModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
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
                var docFeedbackTime, webFeedbackTime;
                for (var r in rs) {
                    if (rs[r].type == 0) {
                        docEditor.ready(function () {
                            docEditor.setContent(rs[r].content || '');
                        });
                        if (rs[r].content) {
                            docFeedbackTime = moment(rs[r].createtime).format('YYYY/MM/DD HH:mm');
                        }
                    }
                    if (rs[r].type == 1) {
                        webEditor.ready(function () {
                            webEditor.setContent(rs[r].content || '');
                        });

                        if (rs[r].content) {
                            webFeedbackTime = moment(rs[r].createtime).format('YYYY/MM/DD HH:mm');
                        }
                    }
                }
                self._setFormControlValues(jqform, {id: pubvoice.id, docFeedbackTime: docFeedbackTime, webFeedbackTime: webFeedbackTime});
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
        this.docEditor.setContent("");
        this.webEditor.setContent("");
        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveFeedback: function () {
        var self = this;
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/feedback/save',
            validator: $.proxy(this._fbValidator, this),
            done: function () {
                self.docEditor.setContent("");
                self.webEditor.setContent("");
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