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

        this.dataTable = this._createTable('#tableWrapper', '/dispose/list', [
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '载体', field: 'from_website'},
            {title: '所属栏目', field: 'item'},
            {title: '舆情类别', field: 'type'},
            {title: '回帖人数', field: 'fellow_count'},
            {title: '关注人数', field: 'review_count'},
            {
                title: '涉及部门', field: 'relate_department'
            },
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
                    return [
                        '<a href="javascript:" title="处置"><i class="glyphicon glyphicon-comment"></i></a>',
                        '<a href="javascript:" title="通报"><i class="glyphicon glyphicon-bullhorn"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        var editor = self.editor;

                        editor.ready(function () {
                            editor.setContent(arguments[2].content || '');
                        });

                        self._showModal('#disposeModal', self.dataTable);
                    },
                    'click a:last': function () {
                        // ...
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #disposeModal .btn-default': 'closeDisposeModal',
        'click #disposeModal .btn-info': 'exportDispose',
        'click #disposeModal .btn-primary': 'saveDispose',
        'click #notiModal .btn-default': 'closeNotiModal',
        'click #notiModal .btn-primary': 'saveNotification'
    },

    doSearch: function () {
        this.dataTable.filterBy({});
    },
    closeDisposeModal: function () {
        this._closeModal('#disposeModal', this.dataTable);
    },
    exportDispose: function () {

    },
    saveDispose: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/dispose/save',
            validator: $.proxy(this._disposeValidator, this),
            done: function () {
                self.closeDisposeModal();
                self.dataTable.refresh();
            }
        });
    },
    closeNotiModal: function () {
        var modal = $('#notiModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveNotification: function () {

    },

    _disposeValidator: function () {

    },
    _notiValidator: function () {

    }
});