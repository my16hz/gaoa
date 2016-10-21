/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyCreatePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/daily/unapplied', [
            {field: 'checkbox', checkbox: true},
            {title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '载体', field: 'from_website', sortable: true, order: 'desc'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc'},
            {title: '回帖人数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注人数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未提交';
                        case 1:
                            return '待审核';
                        case 2:
                            return '审核通过';
                        case 3:
                            return '审核不通过';
                        case 4:
                            return '已入报';
                        case 5:
                            return '待批示';
                        case 6:
                            return '已批示';
                        case 7:
                            return '待回复';
                        case 8:
                            return '已回复';
                        case 9:
                            return '回复待采用';
                        case 10:
                            return '回复已采用';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self._showDetailModal(arguments[2], true);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnCreate': 'showDataModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveDataModal'
    },

    showDataModal: function () {
        var selected = this.dataTable.getOriginalSelected();
        var self = this;

        selected.length ?
            self._genDaily(selected) :
            bootbox.alert('请先选择要编报的舆情');
        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveDataModal: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/daily/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },

    _showDetailModal: function (pubvoice, readonly) {
        var editor = this.editor;
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var classHandler = readonly ? 'addClass' : 'removeClass';

        this._setFormControlValues(jqform, pubvoice);
        editor.ready(function () {
            editor.setContent(pubvoice.content == null ? '' : pubvoice.content);
            editor[readonly ? 'setDisabled' : 'setEnabled']();
        });

        modal.find('.modal-body > label')[classHandler]('hide');
        modal.find('.modal-footer > .btn-primary')[classHandler]('hide');

        return this._showModal(modal, this.dataTable);
    },

    _genDaily: function (pubvoices) {
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/daily/template',
            done: function (rs) {
                var template = rs.template;
                var total_id = 0, issue_id = 0;
                if (rs.issue) {
                    total_id = parseInt(rs.issue.daily_id) + 1;
                    issue_id = parseInt(rs.issue.daily_issue_id) + 1;
                }
                var daily = self._buildDaily(template, total_id, issue_id, pubvoices);
                var pvids = [];

                for (var idx in pubvoices) {
                    pvids.push(pubvoices[idx].id);
                }

                self._showDetailModal({
                    id: total_id,
                    issue_id: issue_id,
                    pvids: pvids.join(),
                    content: daily
                }, false);
            }
        });
        return this;
    },
    _buildDaily: function (template, total_id, issue_id, pubvoices) {
        var daily = template;
        daily = daily.replace('%issue_id%', issue_id);
        daily = daily.replace('%id%', total_id);
        daily = daily.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
        var zmyq_title = '', zmyq_content = '',
            fmyq_title = '', fmyq_content = '',
            yqzz_title = '', yqzz_content = '',
            rdht_title = '', rdht_content = '',
            sght_title = '', sght_content = '',
            yzwy_title = '', yzwy_content = '';
        for (var idx in pubvoices) {
            var pv = pubvoices[idx];
            var title = '<p><span style="font-size:20px;font-family:仿宋_GB2312">※ ' + pv.title + '</span></p>';
            var content = pv.content;

            if (pv.content.indexOf('<p>') == 0) {
                pv.content = pv.content.substring(3, content.length - 4);
            }

            if (pv.item == '正面舆情') {
                if (pv.content) {
                    zmyq_title += title;
                }

                zmyq_content += this._buildZMYQContent(pv);
            } else if (pv.item == '负面舆情') {
                fmyq_title += title;
                fmyq_content += this._buildFMYQContent(pv);
            } else if (pv.item == '舆情追踪') {
                yqzz_title += title;
                yqzz_content += this._buildYQZZContent(pv);
            } else if (pv.item == '热点话题' || pv.item == '网上热点') {
                rdht_title += title;
                rdht_content += this._buildRDHTContent(pv);
            } else if (pv.item == '涉广话题') {
                sght_title += title;
                sght_content += this._buildSGHTContent(pv);
            } else if (pv.item == '一周网语') {
                yzwy_title += title;
                yzwy_content += this._buildYZWYContent(pv);
            }
        }
        daily = daily.replace('%zmyq_title%', zmyq_title);
        daily = daily.replace('%fmyq_title%', fmyq_title);
        daily = daily.replace('%yqzz_title%', yqzz_title);
        daily = daily.replace('%rdht_title%', rdht_title);
        daily = daily.replace('%sght_title%', sght_title);
        daily = daily.replace('%yzwy_title%', yzwy_title);
        daily = daily.replace('%zmyq_content%', zmyq_content);
        daily = daily.replace('%fmyq_content%', fmyq_content);
        daily = daily.replace('%yqzz_content%', yqzz_content);
        daily = daily.replace('%rdht_content%', rdht_content);
        daily = daily.replace('%sght_content%', sght_content);
        daily = daily.replace('%yzwy_content%', yzwy_content);
        return daily;
    },
    _buildZMYQContent: function (pv) {
        return '<p><span style="font-size: 20px;font-family: 黑体">■ ' + pv.title
            + '</span> <span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;'
            + pv.content + '</span></p><p style="text-align: right; text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">——'
            + pv.from_website + '</span></p>';

    },
    _buildFMYQContent: function (pv) {
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
            '</span></p><p><span style="font-size:20px;font-family:仿宋_GB2312"> &nbsp;' +
            pv.content +
            '</span></p><p><br/></p>';
    },
    _buildYQZZContent: function (pv) {
        return '<p><strong><span style="font-size: 20px;font-family: 黑体">■' +
            pv.title +
            '</span></strong></p><p style="text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;' +
            pv.content +
            '</span></p>';
    },
    _buildRDHTContent: function (pv) {
        return '<p><strong><span style="font-size: 20px;font-family: 黑体">■' +
            pv.title +
            '</span></strong></p><p style="text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;' +
            pv.content +
            '</span></p>';
    },
    _buildSGHTContent: function (pv) {
        return '<p><strong><span style="font-size: 20px;font-family: 黑体">■' +
            pv.title +
            '</span></strong></p><p style="text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;' +
            pv.content +
            '</span></p>';
    },
    _buildYZWYContent: function (pv) {
        return '<p><strong><span style="font-size: 20px;font-family: 黑体">■' +
            pv.title +
            '</span></strong></p><p style="text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;' +
            pv.content +
            '</span></p>';
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    }
});