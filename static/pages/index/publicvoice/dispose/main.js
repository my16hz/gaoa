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
            {title: '期数', field: 'daily_id'},
            {title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '18%'},
            {title: '载体', field: 'from_website', sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc', maxWidth: 90},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc', maxWidth: 60},
            {title: '回帖数', field: 'fellow_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '关注数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
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
                    var state = arguments[1].dispose_stat;
                    var btns = [
                        '<a href="javascript:" title="批示详情">' +
                        '<i class="glyphicon glyphicon-' + (0 == state ? 'comment' : 'eye-open') + '"></i>' +
                        '</a>'];

                    state == 1 && btns.push('<a href="javascript:" title="提交审批">' +
                        '<i class="glyphicon glyphicon-ok"></i>' +
                        '</a>');

                    return btns.join('&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        var pvid = arguments[2].id;
                        var modalBody = $('#dataModal .comment-content');

                        self._sendRequest({
                            type: 'get', url: '/dispose/comment',
                            data: {id: pvid},
                            done: function (rs) {
                                var type = rs[0] ? rs[0].type : 2;
                                var docNo = 1;

                                if (2 == type) { // no comment
                                    docNo = rs[0].value - 0 + 1;
                                    rs = [{
                                        message_id: '舆收[' + moment(new Date()).format('YYYY') + '] ' + docNo + '号',
                                        comment_doc_no: docNo
                                    }];
                                }


                                $.each(rs, function (i, cmt) {
                                    cmt.id = pvid;

                                    if (0 !== i) {
                                        modalBody.find('.modal-body')
                                            .append(self.commentFormClone.clone(true).attr('data-index', i))
                                            .find('.nav > li:last').before(slef.commentTabClone.clone(true)
                                            .attr('data-index', i));
                                    }

                                    _fillFormValues(cmt, i);

                                    // record the maximum comment_doc_no.
                                    if (i == rs.length - 1) {
                                        modalBody.data('comment_doc_no', cmt.comment_doc_no);
                                    }
                                });

                                self._showModal('#dataModal', self.dataTable);
                            }
                        });

                        function _fillFormValues (comment, index) {
                            var form = modalBody.find('form').eq(index);
                            var editor = form.data('editor');

                            if (!editor) {
                                editor = self._createEditor($('.editor-wrapper', form));
                                form.data('editor', editor);
                            }

                            self._setFormControlValues(form, comment);
                            modalBody.find('.nav a').eq(index).text('批示（' + comment.comment_user + '）');
                            editor.ready(function () {
                                editor.setContent(comment.attachment || '');
                            });
                        }
                    },
                    'click a:last': function () {
                        var pvid = arguments[2].id;

                        bootbox.confirm('确定提交审批？', function (rs) {
                            rs && self._sendRequest({
                                type: 'post', url: '/dispose/comment/commit',
                                data: {ids: pvid},
                                done: function () {
                                    self.dataTable.refresh();
                                }
                            });
                        });
                    }
                }
            }
        ]);
        this.commentTabClone = $('.comment-content .nav-tabs > li:first', '#dataModal').clone(true);
        this.commentFormClone = $('.comment-content form', '#dataModal').clone(true);
        this.disposeEditor = this._createEditor('#disposeWrapper');
        this._createTimepicker('#recv_date');
        this._createTimepicker('#comment_date');
    },
    events: {
        'keydown #inputSearch': 'autoSearch',
        'click #btnSearch': 'doSearch',
        'click #dataModal .comment-content .cmt-tab': 'switchCommentPanel',
        'click #dataModal .comment-content .addcmt-tab': 'appendCommentPanel',
        'click #dataModal .comment-content .btn:eq(0)': 'closeDataModal',
        'click #dataModal .comment-content .btn-eq(1)': 'showDisposeDoc',
        'click #dataModal .comment-content .btn:eq(2)': 'saveComment',
        'click #dataModal .dispose-content .btn:first': 'backToComment',
        'click #dataModal .dispose-content .btn:last': 'saveAndExportDispose'
    },
    autoSearch: function (jqinput, evt) {
        var id = $.trim(jqinput.val());

        13 == evt.keyCode && this.dataTable
            .setFilter(id ? {id: id} : null)
            .refresh();
    },
    doSearch: function (jqbtn) {
        var id = $.trim(jqbtn.prev('input').val());

        this.dataTable
            .setFilter(id ? {id: id} : null)
            .refresh();
    },
    switchCommentPanel: function (jqli) {
        $('#dataModal .comment-content')
            .find('form').eq(jqli.attr('data-index')).removeClass('hide')
            .siblings('form').addClass('hide');
    },
    appendCommentPanel: function () {
        var self = this;
        var newform = self.commentFormClone.clone(true).attr('data-index', i);

        modalBody.find('.modal-body')
            .append(newform.data('editor', self._createEditor($('.editor-wrapper', newform))))
            .find('.nav > li:last').before(slef.commentTabClone.clone(true)
            .attr('data-index', i));
    },
    closeDataModal: function () {
        var modalBody = $('#dataModal .comment-content');
        var form = modalBody.removeData('comment_doc_no') // remove cache
            .removeClass('hide').next().addClass('hide').end() // reset visible
            .find('.cmt-tab:first > a').text('批示（新）').end() // reset title
            .find('.cmt-tab:gt(0)').remove().end() // remove other tabs
            .find('form:gt(0)').remove().end() // remove other forms
            .find('form:first').find('.btn:eq(1)').addClass('hide').end(); // hide doc button

        form.data('editor').ready(function () { editor.content(''); }); // clear editor contents.

        this._clearFormControlValues(form); // clear inputs' value in the first form
        this._closeModal('#dataModal', this.dataTable); // close modal
    },
    showDisposeDoc: function () {
        var editor = this.disposeEditor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/dispose/detail',
            data: {id: pubvoice.id},
            done: function (rs) {
                rs = rs[0];

                if (rs && rs.state == -1) {
                    rs.dispose_doc_no = parseInt(rs.dispose_doc_no, 10) + 1;
                    rs.content = _genDisposeDoc(pubvoice, rs);
                }

                _fillFormValuesAndDisplay(rs);
            }
        });

        function _fillFormValuesAndDisplay (rs) {
            self._setFormControlValues($('.dispose-content form', '#dataModal '), rs);
            editor.ready(function () { editor.setContent(rs.content || ''); });
            $('#dataModal')
                .find('.comment-content').addClass('hide')
                .next().removeClass('hide');
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

            return '<p style="text-align:center;line-height:33px"><strong>' +
                '<span style="font-size:24px;font-family:方正小标宋简体">' + pv.title + '</span>' +
                '</strong></p><p style="text-align:center;line-height:33px">' +
                '<span style="font-size:20px;font-family:仿宋_GB2312">' + pv.from_website + '</span>' +
                '</p><p style="text-align:center;line-height:33px">' +
                '<span style="font-size:20px;font-family:仿宋_GB2312">浏览人数：' + (pv.review_count || "无法统计") + '&nbsp;&nbsp;</span>' +
                '<span style="font-size:20px;font-family:仿宋_GB2312">跟帖数：' + (pv.fellow_count || "无法统计") + '</span></p>' +
                '<p style="text-align: center;font-size:20px;font-family:仿宋_GB2312">' + pv.url + '</p>' +
                '<p><br/></p><p>' +
                '<span style="font-size:20px;font-family:仿宋_GB2312"> &nbsp;' + content + '</span>' +
                '</p><p><br/></p>';
        }
    },
    saveComment: function (jqbtn) {
        var jqform = jqbtn.parents('form');
        var jqInputId = jqform.find('input[name="comment_id"]');
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/dispose/comment/save',
            validator: function () { return self._commentValidator(jqform); },
            done: function (cmt) {
                !jqInputId.val() && jqInputId.val(cmt.comment_id);
                jqform.find('.btn:eq(1)').removeClass('hide').end()
                    .siblings('.nav').children('li').eq(jqform.attr('data-index'))
                    .text('批示（' + cmt.comment_user + '）');
            }
        });
    },
    backToComment: function () {
        $('#dataModal')
            .find('.comment-content').removeClass('hide')
            .next().addClass('hide');
        this.disposeEditor.content('');
    },
    saveAndExportDispose: function () {
        this._sendRequest({
            type: 'post',
            url: '/dispose/save',
            validator: $.proxy(this._disposeValidator, this),
            done: function () {
                $('<iframe class="hide"></iframe>').appendTo('body').attr('src',
                    '/dispose/export/' + $('.dispose-content input[name="id"]', '#dataModal').val()
                );
            }
        });
    },

    _commentValidator: function (jqform) {
        var values = this._validate(jqform, {
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

        if (values) values['attachment'] = jqform.data('editor').getContent();

        return values || false;
    },
    _disposeValidator: function () {
        var jqform = $('#disposeModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.disposeEditor.getContent();

        return values;
    }
});