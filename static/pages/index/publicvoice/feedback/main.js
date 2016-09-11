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

        this.dataTable = this._createTable('#tableWrapper', '/notify/list', [
            {field: 'checkbox', checkbox: true},
            {title: '日报期数', field: 'daily_id'},
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '载体', field: 'from_website'},
            {title: '所属栏目', field: 'item'},
            {title: '舆情类别', field: 'type'},
            {title: '回帖人数', field: 'fellow_count'},
            {title: '关注人数', field: 'review_count'},
            {title: '涉及部门', field: 'relate_department'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'feedback_state',
                formatter: function (val) {
                    switch (val) {
                        case 0: return "已回复";
                        case 1: return "必须回复";
                        case 2: return "建议回复";
                        case 3: return "可以回复";
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="反馈"><i class="glyphicon glyphicon-share-alt"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2], 0)
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'change #dataModal select[name="type"]': 'changeFeedbackType',
        'click #dataModal .btn-default': 'closeModal',
        'click #dataModal .btn-primary': 'saveFeedback'
    },
    changeFeedbackType: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        this.showDataModal(values, values.type);
    },
    showDataModal: function (pubvoice, type) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/feedback/detail',
            data: {id: pubvoice.id, type: type},
            done: function (rs) {
                if (rs.length != 0) {
                    rs[0]['id'] = pubvoice.id;
                    _fillFormValues(rs[0]);
                }
                else {
                    rs = { id: pubvoice.id, type: type};
                    _fillFormValues(rs);
                }

                self._showModal(modal, self.dataTable);
            }
        });

        function _fillFormValues (rs) {
            self._setFormControlValues(jqform, rs);

            editor.ready(function () {
                editor.setContent(rs.content || '');
            });
        }

        return this;
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
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },

    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    }
});