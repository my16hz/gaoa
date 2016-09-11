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

        this.dataTable = this._createTable('#tableWrapper', '/daily/pvlist', [
            {field: 'checkbox', checkbox: true},
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
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '处置状态', field: 'dispose_stat',
                formatter: function (val) {
                    switch (val) {
                        case 0: return "未批示";
                        case 1: return "已批示";
                        case 2: return "待审批";
                        case 3: return "转";
                        case 4: return "转发";
                        case 5: return "阅存";
                        default: return "未批示";
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    var args = arguments[1].dispose_stat;
                    switch(args) {
                        case 1 :  return [
                                        '<a href="javascript:" title="批示详情"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                        '<a href="javascript:" title="提交审批"><i class="glyphicon glyphicon-ok"></i></a>'
                                        ].join('&nbsp;&nbsp;');
                        case 2 : return ['<a href="javascript:" title="批示详情"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                            '<a></a>'
                                        ].join('&nbsp;&nbsp;');
                        case 3 :
                        case 4 :
                        case 5 :
                            return [
                                '<a href="javascript:" title="批示详情"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                '<a href="javascript:" title="批示处置"><i class="glyphicon glyphicon-retweet"></i></a>'
                            ].join('&nbsp;&nbsp;');
                        case 0 :
                        default: return ['<a href="javascript:" title="添加批示"><i class="glyphicon glyphicon-comment"></i></a>',
                            '<a></a>'
                        ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        var state = arguments[2].dispose_stat;
                        switch (state) {
                            case 1: return self.showCommitModal(arguments[2]);
                            case 3:
                            case 4:
                            case 5:
                                return self.showDisposeModal(arguments[2]);
                        }

                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.disposeEditor = this._createEditor('#disposeWrapper');
    },
    events: {
        'keydown #inputSearch': 'autoSearch',
        'click #btnSearch': 'doSearch',
        'click #commentModal .btn-default': 'closeCommentModal',
        'click #commentModal .btn-primary': 'saveComment',
        'click #disposeModal .btn-default': 'closeDisposeModal',
        'click #disposeModal .btn-primary': 'saveDispose',
        'click #disposeModal .btn-info': 'exportDispose',
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
    showCommitModal: function (pubvoice) {
        var self = this;
        var ids = pubvoice.id;

        bootbox.confirm('确定提交审批？', function (rs) {
            rs && self._ajaxCommit(ids, function () {
                self.dataTable.refresh();
            });
        }) ;

        return this;
    },
    _ajaxCommit: function (ids, done) {
        this._sendRequest({
            type: 'post',
            url: '/dispose/comment/commit',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    showDataModal: function (pubvoice) {
        var modal = $('#commentModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        self._sendRequest({
            type: 'get',
            url: '/dispose/comment',
            data: {id: pubvoice.id},
            done: function (rs) {
                if (rs.length != 0) {
                    rs[0]['id'] = pubvoice.id;
                    _fillFormValues(rs[0]);
                }
                else {
                    rs = { id: pubvoice.id, comment:"", attachment:""};
                    _fillFormValues(rs);
                }
                self._showModal(modal, self.dataTable);
            }
        });

        function _fillFormValues (rs) {
            self._setFormControlValues(jqform, rs);

            editor.ready(function () {
                editor.setContent(rs.attachment || '');
            });
        }
    },
    closeCommentModal: function () {
        this._closeModal('#commentModal', this.dataTable);
    },
    saveComment: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/dispose/comment/save',
            validator: $.proxy(this._commentValidator, this),
            done: function () {
                self.closeCommentModal();
                self.dataTable.refresh();
            }
        });
    },
    showDisposeModal: function (pubvoice) {
        var modal = $('#disposeModal');
        var jqform = modal.find('form');
        var editor = this.disposeEditor;
        var self = this;

        self._sendRequest({
            type: 'get',
            url: '/dispose/detail',
            data: {id: pubvoice.id},
            done: function (rs) {
                if (rs[0].state == -1) {
                    rs['0']['dispose_doc_no'] = parseInt(rs['0']['dispose_doc_no']) + 1;
                    rs[0]['content'] = self.genDisposeDoc(pubvoice, rs[0]);
                }
                 _fillFormValues(rs[0]);
                self._showModal(modal, self.dataTable);
            }
        });

        function _fillFormValues (rs) {
            self._setFormControlValues(jqform, rs);

            editor.ready(function () {
                editor.setContent(rs.content || '');
            });
        }
    },
    genDisposeDoc: function (pubvoice, value) {
        var template = value.content;
        template = template.replace("%doc_year%", value.dispose_doc_year);
        template = template.replace("%doc_no%", value.dispose_doc_no);
        template = template.replace("%doc_content%", pubvoice.content);
        template = template.replace("%doc_comment%", pubvoice.comment);
        template = template.replace("%doc_attachment%", pubvoice.attachment);
        template = template.replace("%daily_id%", pubvoice.daily_id);
        template = template.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));

        return template;
    },
    closeDisposeModal: function () {
        this._closeModal('#disposeModal', this.dataTable);
    },
    exportDispose: function () {
        /*inject:jqtmplsample:html*/
        /*endinject*/
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
    _commentValidator: function () {
        var jqform = $('#commentModal form');
        var values = this._getFormControlValues(jqform);

        values['attachment'] = this.editor.getContent();

        return values;
    },
    _disposeValidator: function () {
        var jqform = $('#disposeModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.disposeEditor.getContent();

        return values;
    }
});