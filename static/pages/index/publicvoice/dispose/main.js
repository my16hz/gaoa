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
            {title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '载体', field: 'from_website', sortable: true, order: 'desc'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc'},
            {title: '回帖人数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注人数', field: 'review_count', sortable: true, order: 'desc'},
            {
                title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'
            },
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '处置状态', field: 'dispose_stat', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return "未批示";
                        case 1:
                            return "已批示";
                        case 2:
                            return "待审批";
                        case 3:
                            return "转";
                        case 4:
                            return "转发";
                        case 5:
                            return "阅存";
                        default:
                            return "未批示";
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    var args = arguments[1].dispose_stat;
                    switch (args) {
                        case 1 :
                            return [
                                '<a href="javascript:" title="批示详情"><i class="glyphicon glyphicon-eye-open"></i></a>',
                                '<a href="javascript:" title="提交审批"><i class="glyphicon glyphicon-ok"></i></a>'
                            ].join('&nbsp;&nbsp;');
                        case 2 :
                            return ['<a href="javascript:" title="批示详情"><i class="glyphicon glyphicon-eye-open"></i></a>',
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
                        default:
                            return ['<a href="javascript:" title="批示登记"><i class="glyphicon glyphicon-comment"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;&nbsp;');
                    }
                },
                events: {
                    'click a:first': function () {
                        var pubvoice = arguments[2];
                        var modal = $('#commentModal');
                        var editor = self.editor;

                        self._sendRequest({
                            type: 'get',
                            url: '/dispose/comment',
                            data: {id: pubvoice.id},
                            done: function (rs) {
                                var type = rs[0] ? rs[0].type : 2;
                                var result = rs[0];
                                if (type == 2) {
                                    var value = rs[0].value - 0 + 1;
                                    result = {comment: "", attachment: "", comment_doc_no: value, message_id: '舆收[' + moment(new Date()).format('YYYY') + '] ' + value + '号'}
                                }
                                result.id = pubvoice.id;

                                _fillFormValues(result);

                                self._showModal(modal, self.dataTable);
                            }
                        });

                        function _fillFormValues (rs) {
                            self._setFormControlValues(modal.find('form'), rs);

                            editor.ready(function () {
                                editor.setContent(rs.attachment || '');
                            });
                        }
                    },
                    'click a:last': function () {
                        var pubvoice = arguments[2];
                        var modal = $('#disposeModal');
                        var editor = self.disposeEditor;

                        if (1 == pubvoice.dispose_stat) {
                            bootbox.confirm('确定提交审批？', function (rs) {
                                rs && self._sendRequest({
                                    type: 'post',
                                    url: '/dispose/comment/commit',
                                    data: {ids: pubvoice.id},
                                    done: function () {
                                        self.dataTable.refresh();
                                    }
                                });
                            });
                        } else {
                            self._sendRequest({
                                type: 'get',
                                url: '/dispose/detail',
                                data: {id: pubvoice.id},
                                done: function (rs) {
                                    rs = rs[0];

                                    if (rs && rs.state == -1) {
                                        rs.dispose_doc_no = parseInt(rs.dispose_doc_no, 10) + 1;
                                        rs.content = _genDisposeDoc(pubvoice, rs);
                                    }

                                    _fillFormValues(rs);
                                    self._showModal(modal, self.dataTable);
                                }
                            });
                        }

                        function _fillFormValues (rs) {
                            self._setFormControlValues(modal.find('form'), rs);

                            editor.ready(function () {
                                editor.setContent(rs.content || '');
                            });
                        }

                        function _genDisposeDoc (pubvoice, value) {
                            var template = value.content;

                            return template
                                .replace("%doc_year%", value.dispose_doc_year)
                                .replace("%doc_no%", value.dispose_doc_no)
                                .replace("%doc_content%", _buildFMYQContent(pubvoice))
                                .replace("%doc_comment%", pubvoice.comment)
                                .replace("%doc_attachment%", pubvoice.attachment)
                                .replace("%daily_id%", pubvoice.daily_id)
                                .replace('%date%', moment(new Date()).format('YYYY年MM月DD日'))

                                .replace("%to_department%", pubvoice.to_department)
                                .replace("%pv_date%", moment(pubvoice.createtime).format('MM月DD日'))
                                .replace("%from_website%", pubvoice.from_website)
                                .replace("%pv_title%", pubvoice.title)
                                .replace("%comment_date%", moment(pubvoice.comment_date).format('MM月DD日'))
                                .replace("%comment_user%", pubvoice.comment_user);
                        }

                        function _buildFMYQContent (pv) {
                            var content = pv.content;
                            if (content.indexOf('<p>') == 0) {
                                content = content.substring(3, content.length - 4);
                            }
                            return '<p style="text-align:center;line-height:33px"><strong><span style="font-size:24px;font-family:方正小标宋简体">' +
                                pv.title +
                                '</span></strong></p><p style="text-align:center;line-height:33px"><span style="font-size:20px;font-family:仿宋_GB2312">' +
                                pv.from_website +
                                '</span></p><p style="text-align:center;line-height:33px"><span style="font-size:20px;font-family:仿宋_GB2312">浏览人数：' +
                                (pv.review_count || "无法统计") +
                                '&nbsp; &nbsp; </span><span style="font-size:20px;font-family:仿宋_GB2312">跟帖数：' +
                                (pv.fellow_count || "无法统计") +
                                '</span></p><p style="text-align: center;font-size:20px;font-family:仿宋_GB2312">' +
                                pv.url +
                                '</p><p><br/></p><p><span style="font-size:20px;font-family:仿宋_GB2312"> &nbsp;' +
                                pv.content +
                                '</span></p><p><br/></p>';
                        }
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.disposeEditor = this._createEditor('#disposeWrapper');
        this._createTimepicker('#recv_date');
        this._createTimepicker('#comment_date');
    },
    events: {
        'keydown #inputSearch': 'autoSearch',
        'click #btnSearch': 'doSearch',
        'click #commentModal .btn-default': 'closeCommentModal',
        'click #commentModal .btn-primary': 'saveComment',
        'click #disposeModal .btn-default': 'closeDisposeModal',
        'click #disposeModal .btn-primary': 'saveAndExportDispose'
    },
    autoSearch: function (jqinput, evt) {
        var id = $.trim(jqinput.val());

        if (13 == evt.keyCode) {
            this.dataTable.setFilter(id ? {id: id} : null)
                .refresh();
        }
    },
    doSearch: function (jqbtn) {
        var id = $.trim(jqbtn.prev('input').val());

        this.dataTable.setFilter(id ? {id: id} : null)
            .refresh();
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
    closeDisposeModal: function () {
        this._closeModal('#disposeModal', this.dataTable);
    },
    saveAndExportDispose: function () {
        var id = $('#disposeModal input[name="id"]').val();

        this._sendRequest({
            type: 'post',
            url: '/dispose/save',
            validator: $.proxy(this._disposeValidator, this),
            done: function () {
                $('<iframe class="hide"></iframe>').appendTo('body')
                    .attr('src', '/dispose/export/' + id);
            }
        });
    },

    _commentValidator: function () {
        var values = this._validate($('#commentModal form'), {
            comment_date: function (val) {
                if (!val.length) return '批示时间 不能为空。';
            },
            to_department: function (val) {
                if (!val.length) return '处置单位 不能为空。';
            },
            comment_user: function (val) {
                if (!val.length) return '批示领导 不能为空。';
            }
        });

        if (values) values['attachment'] = this.editor.getContent();

        return values || false;
    },
    _disposeValidator: function () {
        var jqform = $('#disposeModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.disposeEditor.getContent();

        return values;
    }
});