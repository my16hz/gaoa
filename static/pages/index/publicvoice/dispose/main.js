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
            {title: '日报期数', field: 'daily_id'},
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
                title: '处置状态', field: 'dispose_state',
                formatter: function (val) {
                    switch (val) {
                        case 1: return '已处置';
                        default: return '未处置';
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
                        var modal = $('#disposeModal');
                        var jqform = modal.find('form');
                        var editor = self.editor;

                        self._sendRequest({
                            type: 'get',
                            url: '/dispose/detail',
                            data: {id: arguments[2].id},
                            done: function (rs) {
                                _fillFormValues(rs);
                                self._showModal(modal, self.dataTable);
                            }
                        });

                        function _fillFormValues (dispose) {
                            var content = "";
                            if (dispose[0].state != -1) {
                                // 填充...
                                content = dispose[0].content;
                            } else {
                                // 生成...
                                content = dispose[0].template + arguments[2].content;
                            }
                            editor.ready(function () {
                                editor.setContent(content || '');
                            });
                        }
                    },
                    'click a:last': function () {
                        $(self.el).loadTemplate("/sample/dispose.html", {
                            name: 'dispose page',
                            numbers: [1, 2, 3, 4, 5, 6]
                        });
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'keydown #inputSearch': 'autoSearch',
        'click #btnSearch': 'doSearch',
        'click #disposeModal .btn-default': 'closeDisposeModal',
        'click #disposeModal .btn-info': 'exportDispose',
        'click #disposeModal .btn-primary': 'saveDispose',
        'click #notiModal .btn-default': 'closeNotiModal',
        'click #notiModal .btn-primary': 'saveNotification'
    },
    autoSearch: function (jqinput, evt) {
        13 == evt.keyCode && this.dataTable.refresh({
            query: {id: jqinput.val()}
        });
    },
    doSearch: function (jqbtn) {
        var daily_id = $.trim(jqbtn.prev('input').val());

        this.dataTable.refresh({
            query: {id: daily_id}
        });
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