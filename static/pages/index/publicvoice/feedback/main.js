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

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/dispose/list', [
            {field: 'checkbox', checkbox: true},
            {title: '标题', field: 'title'},
            {title: '载体', field: 'from_website'},
            {title: '所属栏目', field: 'item'},
            {title: '舆情类别', field: 'type'},
            {title: '回帖人数', field: 'fellow_count'},
            {title: '关注人数', field: 'review_count'},
            {title: '涉及部门', field: 'relate_department'},
            {
                title: '处理时间', field: 'createtime',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未提交';
                        case 1:
                            return '待审批';
                        case 2:
                            return '审批通过';
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
                        var editor = self.editor;
                        var modal = $('#dataModal');
                        var feedback = arguments[2];

                        self._setFormControlValues(modal.find('form'), feedback);

                        editor.ready(function () {
                            editor.setContent(feedback.content || '');
                        });

                        self._showModal(modal, self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'change #feedbackModal select[name="type"]': 'changeFeedbackType',
        'click #feedbackModal .btn-default': 'closeModal',
        'click #feedbackModal .btn-primary': 'saveFeedback'
    },

    changeFeedbackType: function () {

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