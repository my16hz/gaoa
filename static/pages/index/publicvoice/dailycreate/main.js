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

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/daily/unapplied', [
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
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDetailModal(arguments[2]);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveReport'
    },
    
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    showDataModal: function () {
        var selected = this.dataTable.getSelected();
        var self = this;
        var mids = [];

        $(selected).each(function (n, pv) {
            mids.push(pv);
        });

        $('#detailModal').addClass('hide');
        $('#dailyModal').removeClass('hide');

        mids.length ?
            self.genDaily(mids) :
            bootbox.alert('请先选择要编报的舆情');
        return this;
    },
    genDaily: function (pubvoices) {
        var self = this;
        this._sendRequest({
            type: 'get',
            url: '/daily/template',
            done: function (rs) {
                self.editor.setContent(rs);
                self.editor.setEnabled();
                self._shrinkTable()
                    ._showGridWrapper();
            }
        });
        return this;
    },
    showDetailModal: function (pubvoice) {
        this.editor.setContent(pubvoice.content == null ? '' : pubvoice.content);
        this.editor.setDisabled();
        $('#detailModal').removeClass('hide');
        $('#dailyModal').addClass('hide');
        this._shrinkTable()
            ._showGridWrapper();
        return this;
    },
    saveDataModal: function () {
        var values = {'content': this.editor.getContent()};
    }
});