/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSAlertPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/alert/list', [
            {field: 'checkbox', checkbox: true},
            {title: '预警标题', field: 'title', alwaysDisplay: true},
            {title: '预警方式', field: 'type'},
            {title: '涉舆部门', field: 'department'},
            {title: '预警人', field: 'sender'},
            {title: '接警人', field: 'receiver'},
            {
                title: '预警开始时间', field: 'starttime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '预警结束时间', field: 'endtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY年MM月DD日');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '有效预警';
                        default:
                            return '预警结束';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                        '<a href="javascript:" title="清除预警"><i class="glyphicon glyphicon-remove"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        var uid = arguments[2].id;

                        bootbox.confirm('确认清除预警？', function (rs) {
                            rs && self._ajaxDelete(uid, function () {
                                self._refreshTable();
                            });
                        });
                    }
                }
            }
        ]);
        this.sTime = this._createTimepicker('#starttime');
        this.eTime = this._createTimepicker('#endtime');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnDel': 'delSelected',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveAlert'
    },

    showDataModal: function (alert) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');

        alert.id && this._setFormControlValues(jqform, alert);

        this._showModal(modal, this.dataTable);
    },
    delSelected: function () {
        var self = this;
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();

        ids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要删除的记录！');
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveAlert: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/alert/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
    },
    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete',
            url: '/alert/clear',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});