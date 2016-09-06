/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDisposeAndApprovePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/dispose/comment/list', [
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '载体', field: 'from_website'},
            {title: '批示内容', field: 'comment'},
            {
                title: '处理时间', field: 'createtime',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'dispose_stat',
                formatter: function (val) {
                    switch (val) {
                        case 0: return "未批示";
                        case 1: return "已批示";
                        case 2: return "待审批";
                        case 3: return "转";
                        case 4: return "转发";
                        case 5: return "阅存";
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="审批"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var editor = self.editor;
                        var modal = $('#dataModal');
                        var pubvoice = arguments[2];

                        self._setFormControlValues(modal.find('form'), pubvoice);

                        editor.ready(function () {
                            editor.setContent(pubvoice.attachment || '');
                        });

                        self._showModal(modal, self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'apply'
    },

    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    apply: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/dispose/comment/approve',
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
    }
});