/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSDailyCreatePage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.editor = UM.getEditor('dailyCreateUE');
        this.initDependencies()
            ._drawDataTable();
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #dailyModal .btn-default': 'closeDataModal',
        'click #dailyModal .btn-primary': 'saveDataModal',
        'click #detailModal .btn-default': 'closeDataModal'
    },
    _drawDataTable: function () {
        var self = this;

        if (!this.dataTable) {
            (this.dataTable = $('#dataTable')).bootstrapTable({
                method: 'get',
                url: '/daily/unapplied',
                cache: false,
                ajaxOptions: {
                    beforeSend: function () {
                        self._showLoading();
                    },
                    complete: function () {
                        self._removeLoading();
                    }
                },
                onLoadError: function (xhr) {
                    self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
                },
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '标题',
                    field: 'title'
                }, {
                    title: '载体',
                    field: 'from_website'
                }, {
                    title: '所属栏目',
                    field: 'item'
                }, {
                    title: '舆情类别',
                    field: 'type'
                }, {
                    title: '回帖人数',
                    field: 'fellow_count'
                }, {
                    title: '关注人数',
                    field: 'review_count'
                }, {
                    title: '涉及部门',
                    field: 'relate_department'
                }, {
                    title: '处理时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
                    }
                }, {
                    title: '状态',
                    field: 'state',
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
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="查看">' +
                            '<i class="glyphicon glyphicon-eye-open"></i>' +
                            '</a>';
                    },
                    events: {
                        'click a:first': function () {
                            self.showDetailModal(arguments[2]);
                        }
                    }
                }]
            }, this._buildTableOptions());
        } else {
            this._refreshTable();
        }

        return this;
    },
    _refreshTable: function () {
        this.dataTable.bootstrapTable('refresh');

        return this;
    },
    _shrinkTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandTable: function () {
        var self = this;

        $(['checkbox', 'from_website', 'item', 'type', 'review_count', 'fellow_count', 'relate_department', 'state', 'createtime', 'status', 'action'])
            .each(function (index, field) {
                self.dataTable.bootstrapTable('showColumn', field);
            });

        return this;
    },
    _showGridWrapper: function () {
        $('#pubVoiceWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGridWrapper: function () {
        $('#pubVoiceWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },
    _buildTableOptions: function () {
        var self = this;

        return {
            method: 'get',
            url: '/daily/detail',
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            }
        }
    },
    closeDataModal: function () {
        var self = this;

        this._expandTable()
            ._hideGridWrapper();
    },
    showDataModal: function () {
        var selected = this.dataTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv);
        });

        $('#detailModal').addClass('hide');
        $('#dailyModal').removeClass('hide');

        mids.length ?
            self.genDaily(mids):
            bootbox.alert('请先选择要编报的舆情');
        return this;
    },
    genDaily: function(pubvoices) {
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/daily/template',
            done: function (rs) {
                var template = rs.template;
                var total_id = 0,
                    issue_id = 0;
                if (rs.issue) {
                    total_id = parseInt(rs.issue.daily_id, 10) + 1;
                    issue_id = parseInt(rs.issue.daily_issue_id, 10) + 1;
                }
                var daily = self.buildDaily(template, total_id, issue_id, pubvoices);
                self._setFormControlValues('#contentModal form', {'id':total_id, 'issue_id':issue_id});
                self.editor.setContent(daily);
                self.editor.setEnabled();
                self._shrinkTable()
                    ._showGridWrapper();
            }
        });
        return this;
    },
    buildDaily: function (template, total_id, issue_id, pubvoices) {
        var daily = template;
        daily = daily.replace('%issue_id%', issue_id);
        daily = daily.replace('%id%', total_id);
        daily = daily.replace('%date%', moment(new Date()).format('YYYY年MM月DD日'));
        var zmyq_title = '', zmyq_content = '',
            fmyq_title = '', fmyq_content = '',
            yqzz_title = '', yqzz_content = '',
            rdht_title = '', rdht_content = ''
        for(idx in pubvoices) {
            var pv = pubvoices[idx];
            var title = '<p><span style="font-size:20px;font-family:仿宋_GB2312">※ ' + pv.title + '</span></p>';
            var content = pv.content;
            if (pv.item == '正面舆情') {
                zmyq_title += title;
                zmyq_content += content;
            } else if (pv.item == '负面舆情') {
                fmyq_title += title;
                fmyq_content += content;
            } else if (pv.item == '舆情追踪') {
                yqzz_title += title;
                yqzz_content += content;
            } else if (pv.item == '热点话题') {
                rdht_title += title;
                rdht_content += content;
            }
        }
        daily = daily.replace('%zmyq_title%', zmyq_title);
        daily = daily.replace('%fmyq_title%', fmyq_title);
        daily = daily.replace('%yqzz_title%', yqzz_title);
        daily = daily.replace('%rdht_title%', rdht_title);
        daily = daily.replace('%zmyq_content%', zmyq_content);
        daily = daily.replace('%fmyq_content%', fmyq_content);
        daily = daily.replace('%yqzz_content%', yqzz_content);
        daily = daily.replace('%rdht_content%', rdht_content);
        return daily;
    },
    showDetailModal: function (pubvoice) {
        this.editor.setContent(pubvoice.content == null? '':pubvoice.content);
        this.editor.setDisabled();
        $('#detailModal').removeClass('hide');
        $('#dailyModal').addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
        return this;
    },
    saveDataModal: function () {
        var self = this;
        this._sendRequest({
            type: 'post',
            url: '/daily/save',
            validator: $.proxy(this._dailyValidator, this),
            done: function () {
                self._refreshTable().closeDataModal();
            }
        });
    },
    _dailyValidator: function () {
        var values = this._getFormControlValues($('#contentModal form'));
        values['content'] = this.editor.getContent();

        return  values;
    }
});