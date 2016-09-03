/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSNotifyPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/notify/list', [
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
                    return '<a href="javascript:" title="详情"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var editor = self.editor;

                        editor.ready(function () {
                            editor.setContent(arguments[2].content || '')
                                .setDisabled();
                        });

                        self._showModal('#dataModal', self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnNotify': 'showNotifyModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #notifyModal .btn-default': 'closeNotifyModal',
        'click #notifyModal .btn-primary': 'saveNotify'
    },

    showNotifyModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();

        ids.length ?
            bootbox.confirm('确定通报？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要通报的记录！');

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    closeNotifyModal: function () {
        var modal = $('#notifyModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },

    saveNotify: function (ids, done) {
        this._sendRequest({
            type: 'post', url: '/notify/save',
            data: {ids: ids},
            done: done
        });

        return this;
    },

    _validator: function () {
        var jqform = $('#disposeDetailModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});