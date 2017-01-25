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
            {
                title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '20%',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '载体', field: 'from_website', sortable: true, order: 'desc', autoWidth: '10%'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc', maxWidth: 90},
            {title: '回帖数', field: 'fellow_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '关注数', field: 'review_count', sortable: true, order: 'desc', maxWidth: 60},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
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
        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
    },
    events: {
        'click #btnDailyCreate': 'showDailyModal',
        'click #btnPhoneCreate': 'showPhoneModal',
        'click #btnReportCreate': 'showReportModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveDataModal',
        'click #btnSearch': 'doSearch'
    },
    doSearch: function () {
        var self = this;

        this.dataTable.setFilter({
            sTime: self.sTime.getTime(),
            eTime: self.eTime.getTime()
        }).refresh();
    },
    showDailyModal: function () {
        this._showDataModal(0);
    },
    showReportModal: function () {
        this._showDataModal(1);
    },
    showPhoneModal: function () {
        this._showDataModal(2);
    },
    _showDataModal: function (type) {
        var selected = this.dataTable.getOriginalSelected();
        var self = this;

        selected.length ?
            self._genDaily(type, selected) :
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

    _genDaily: function (type, pubvoices) {
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/daily/template',
            done: function (rs) {
                var template = rs.template;
                var total_id = 0, issue_id = 0, content = '';
                if (rs.issue) {
                    if (type == 0) {
                        /* 日报 */
                        total_id = parseInt(rs.issue.daily_id) + 1;
                        issue_id = parseInt(rs.issue.daily_issue_id) + 1;
                        content = self._buildDaily(template, total_id, issue_id, pubvoices);
                    } else if (type == 1) {
                        /* 专报 */
                        total_id = parseInt(rs.issue.report_id) + 1;
                        issue_id = parseInt(rs.issue.report_issue_id) + 1;
                        content = self._buildReport(template, total_id, issue_id, pubvoices);
                    } else {
                        /* 手机报 */
                        total_id = moment(new Date()).format('YYYYMMDD') - 0;
                        issue_id = moment(new Date()).format('HHmmss') - 0;
                        content = self._buildPhone(pubvoices);
                    }
                }
                var pvids = [];

                for (var idx in pubvoices) {
                    pvids.push(pubvoices[idx].id);
                }

                self._showDetailModal({
                    id: total_id,
                    issue_id: issue_id,
                    pvids: pvids.join(),
                    type: type,
                    content: content
                }, false);
            }
        });
        return this;
    },
    _buildDaily: function (template, total_id, issue_id, pubvoices) {
        var daily = '<p>    <span style=";position: relative;z-index:251657728"> </span></p><p>    <br/></p><p>    <br/></p><p>    <br/></p><p>    <br/></p><p>    <br/></p><p>    <br/></p><p style="text-align:center;line-height:27px">    <span style="font-size:19px;font-family:楷体_GB2312">第 %issue_id% 期</span></p><p style="text-align:center;line-height:40px">    <span style="font-size:19px;font-family:楷体_GB2312">（总第 %id% 期）</span></p><p style="line-height: 32px; text-align: center;">    <span style="font-size:20px;font-family:楷体_GB2312">广安市网络舆情中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%date%</span></p><p style="margin-top:40px;margin-right:0;margin-bottom:16px;margin-left:0;text-align:center">    <span style="font-size:29px;font-family:方正小标宋简体">≡本期要目≡</span></p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【负面舆情】</span></strong></p><p>    %fmyq_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【舆情追踪】</span></strong></p><p>    %yqzz_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【网言网语】</span></strong></p><p>    %wywy_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【媒体聚焦】</span></strong></p><p>    %mtjj_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【热点观察】</span></strong></p><p>    %rdgc_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【网上调查】</span></strong></p><p>    %wsdc_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【涉广话题】</span></strong></p><p>    %sght_title%</p><p style="line-height:32px"><strong><span style="font-size:20px; font-family: 楷体_GB2312">【网上民声】</span></strong></p><p>    %wsms_title%</p><p><br/></p><p><img src="/sample/template/fmyq.jpg"/></p><p>    %fmyq_content%</p><p><img src="/sample/template/yqzz.jpg"/></p><p>    %yqzz_content%</p><p><img src="/sample/template/wywy.jpg"/></p><p>    %wywy_content%</p><p><img src="/sample/template/mtjj.jpg"/></p><p>    %mtjj_content%</p><p><img src="/sample/template/rdgc.jpg"/></p><p>    %rdgc_content%</p><p><img src="/sample/template/wsdc.jpg"/></p><p>    %wsdc_content%</p><p><img src="/sample/template/sght.jpg"/></p><p>    %sght_content%</p><p><img src="/sample/template/wsms.jpg"/></p><p>    %wsms_content%</p><hr style="height:5px;border:none;border-top:2px ridge black;" /><p style="margin-left:37px;line-height:32px">    <strong><span style="font-size: 19px;font-family: 仿宋_GB2312">报：</span></strong><span style="font-size: 19px;font-family: 仿宋_GB2312">市委常委。</span></p><hr style="height:5px;border:none;border-top:2px ridge black;" /><p style="text-align: right;">    <span style="font-size: 19px;font-family: 仿宋_GB2312">（共印16份）</span></p><p>    <br/></p>';
        daily = daily.replace('%issue_id%', issue_id);
        daily = daily.replace('%id%', total_id);
        daily = daily.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
        var fmyq_title = '', fmyq_content = '',
            yqzz_title = '', yqzz_content = '',
            wywy_title = '', wywy_content = '',
            mtjj_title = '', mtjj_content = '',
            rdgc_title = '', rdgc_content = '',
            wsdc_title = '', wsdc_content = '',
            sght_title = '', sght_content = '',
            wsms_title = '', wsms_content = '';
        for (var idx in pubvoices) {
            var pv = pubvoices[idx];
            var title = '<p><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;※ ' + pv.title + '</span></p>';
            var content = pv.content;

            if (pv.content.indexOf('<p>') == 0) {
                pv.content = pv.content.substring(3, content.length - 4);
            }

            if (pv.item == '负面舆情') {
                fmyq_title += title;
                fmyq_content += this._buildFMYQContent(pv);
            } else if (pv.item == '舆情追踪') {
                yqzz_title += title;
                yqzz_content += this._buildBaseContent(pv);
            } else if (pv.item == '网言网语') {
                wywy_title += title;
                wywy_content += this._buildBaseContent(pv);
            } else if (pv.item == '媒体聚焦') {
                mtjj_title += title;
                mtjj_content += this._buildBaseContent(pv);
            } else if (pv.item == '热点观察') {
                rdgc_title += title;
                rdgc_content += this._buildBaseContent(pv);
            } else if (pv.item == '网上调查') {
                wsdc_title += title;
                wsdc_content += this._buildBaseContent(pv);
            } else if (pv.item == '涉广话题') {
                sght_title += title;
                sght_content += this._buildBaseContent(pv);
            } else if (pv.item == '网上民声') {
                wsms_title += title;
                wsms_content += this._buildBaseContent(pv);
            }
        }
        daily = daily.replace("%fmyq_title%", fmyq_title);
        daily = daily.replace("%yqzz_title%", yqzz_title);
        daily = daily.replace("%wywy_title%", wywy_title);
        daily = daily.replace("%mtjj_title%", mtjj_title);
        daily = daily.replace("%rdgc_title%", rdgc_title);
        daily = daily.replace("%wsdc_title%", wsdc_title);
        daily = daily.replace("%sght_title%", sght_title);
        daily = daily.replace("%wsms_title%", wsms_title);
        daily = daily.replace("%fmyq_content%", fmyq_content);
        daily = daily.replace("%yqzz_content%", yqzz_content);
        daily = daily.replace("%wywy_content%", wywy_content);
        daily = daily.replace("%mtjj_content%", mtjj_content);
        daily = daily.replace("%rdgc_content%", rdgc_content);
        daily = daily.replace("%wsdc_content%", wsdc_content);
        daily = daily.replace("%sght_content%", sght_content);
        daily = daily.replace("%wsms_content%", wsms_content);
        return daily;
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
    _buildBaseContent: function (pv) {
        return '<p><strong><span style="font-size: 20px;font-family: 黑体">■' +
            pv.title +
            '</span></strong></p><p style="text-indent: 40px; line-height: 33px;"><span style="font-size:20px;font-family:仿宋_GB2312">&nbsp;' +
            pv.content +
            '</span></p>';
    },
    _buildReport: function (template, total_id, issue_id, pubvoices) {
        var report = '<p style="text-align: center;">    <span style="font-family:宋体;color:red;font-size: 75px;">网络舆情</span><span style="font-family:黑体;color:red;font-size: 100px;"><strong>专报</strong></span></p><p>    <br/></p><p style="text-align:center;line-height:27px">    <span style="font-size:19px;font-family:楷体_GB2312">第 %issue_id% 期</span></p><p style="text-align:center;line-height:40px">    <span style="font-size:19px;font-family:楷体_GB2312">（总第 %id% 期）</span></p><p style="line-height: 32px; text-align: center;">    <span style="font-size:20px;font-family:楷体_GB2312">广安市网络舆情中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%date%</span></p><hr style="height:3px;border:none;border-top:3px ridge red;" /><p>    %doc_content%</p><hr style="height:3px;border:none;border-top:1px ridge black;" /><p style="margin-left:37px;line-height:32px">    <strong><span style="font-size: 19px;font-family: 仿宋_GB2312">报：</span></strong><span style="font-size: 19px;font-family: 仿宋_GB2312">晓春书记、增斌市长、春风副书记、利民常委、甘丽常委。</span></p><hr style="height:3px;border:none;border-top:1px ridge black;" /><p style="text-align: right;">    <span style="font-size: 19px;font-family: 仿宋_GB2312">（共印6份）</span></p><p>    <br/></p>';
        report = report.replace('%issue_id%', issue_id);
        report = report.replace('%id%', total_id);
        report = report.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
        var doc_content = "";
        for (var idx in pubvoices) {
            doc_content += pubvoices[idx].content;
        }
        report = report.replace('%doc_content%', doc_content);
        return report;
    },
    _buildPhone: function (pubvoices) {
        var content = '';
        var header = '<p><span style="font-size:20px;font-family:宋体">【舆情报告】</span></p><p><span style="font-family:宋体"><span style="font-size: 20px;">网友称：';
        var prefix = '(广安市网络舆情中心  ' + moment(new Date()).format('YYYY.MM.DD') + ')';
        var tail = '</span></span></p><p><br/></p>';
        for (var idx in pubvoices) {
            content += header + pubvoices[idx].title + prefix + tail;
        }
        return content;
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    }
});