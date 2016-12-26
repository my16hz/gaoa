/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecvMessagePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', '/smartoffice/recvmsg/list', [
            {field: 'checkbox', checkbox: true},
            {title: '文件标题', field: 'title', alwaysDisplay: true},
            {
                title: '收文时间', field: 'recv_date', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
            },
            {title: '收文编号', field: 'message_id', sortable: true, order: 'desc'},
            {title: '来文单位', field: 'origin_department', sortable: true, order: 'desc'},
            {title: '秘密等级', field: 'secret_level', sortable: true, order: 'desc'},
            {title: '批示领导', field: 'approved_user', sortable: true, order: 'desc'},
            {title: '领取人', field: 'from_user', sortable: true, order: 'desc'},
            {title: '从何领取', field: 'from_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc', minWidth: 72,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
            },
            {
                title: '状态', field: 'state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未提交';
                        case 1: return '待签发';
                        case 2: return '已签发';
                    }
                }
            },
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    var args = arguments[1].state;
                    switch (args) {
                        case 0 :
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="导出"><i class="glyphicon glyphicon-export"></i></a>',
                                '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                            ].join('&nbsp;');
                        case 1 :
                        case 2 :
                            return [
                                '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                                '<a href="javascript:" title="导出"><i class="glyphicon glyphicon-export"></i></a>',
                                '<a></a>'
                            ].join('&nbsp;');
                    }
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:eq(1)': function () {
                        var msg = arguments[2];

                        self._sendRequest({
                            type: 'get',
                            url: '/smartoffice/template',
                            done: function (rs) {
                                var template = rs.template.recvmessage;
                                var editor = self.editor;
                                var modal = $('#detailModal');

                                $.each(['title', 'comment', 'recv_date', 'message_id', 'origin_department', 'origin_id',
                                    'secret_level', 'origin_date', 'from_department', 'from_user', 'approved_user',
                                    'copies', 'content', 'result'], function (n, field) {
                                    template = template.replace('%' + field + '%', msg[field] || '');
                                });

                                editor.ready(function () {
                                    editor.setContent(template || '');
                                });
                                self._showModal(modal, self.dataTable);
                            }
                        });
                    },
                    'click a:eq(2)': function () {
                        var msgid = arguments[2].id;

                        bootbox.confirm('确定删除？', function (rs) {
                            rs && self._sendRequest({
                                type: 'delete', url: '/smartoffice/recvmsg/delete',
                                data: {id: msgid},
                                done: function () {
                                    self.dataTable.refresh();
                                }
                            });
                        })
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this._createTimepicker('#recv_date');
        this._createTimepicker('#origin_date');
        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });

    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnCommit': 'commitMessage',
        'click #btnExport': 'exportMessagelist',
        'click #btnSearch': 'doSearch',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveMessage',
        'click #detailModal .btn-default': 'closeExportModal',
        'click #detailModal .btn-primary': 'exportMessage'
    },
    exportMessagelist: function () {
        var funcCtrls = $('.func-btns');

        $('<iframe class="hide"></iframe>')
            .appendTo('body')
            .attr('src', '/smartoffice/recvmsg/exportlist?' + $.param({
                    sTime: this.sTime.getTime(),
                    eTime: this.eTime.getTime()
                }));
    },
    doSearch: function () {
        this.dataTable.setFilter({
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showDataModal: function (msg) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var self = this;

        if (msg.id) {
            this._setFormControlValues(jqform, msg);
            this._showModal(modal, self.dataTable);
        } else {
            this._sendRequest({
                type: 'get',
                url: '/smartoffice/template',
                done: function (rs) {
                    var modal = $('#dataModal');
                    var no = parseInt(rs.smartoffice_recvmessage_id) + 1;
                    var prefix = '广舆中心收[' + moment(new Date()).format('YYYY') + '] ' + no + '号';

                    self._setFormControlValues(modal.find('form'), {
                        message_id: prefix,
                        smartoffice_recvmessage_id: no
                    });
                    self._showModal(modal, self.dataTable);
                }
            });
        }
    },
    commitMessage: function () {
        var self = this;
        var dataTable = this.dataTable;
        var pids = dataTable.getSelected();

        pids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._sendRequest({
                    type: 'post', url: '/smartoffice/recvmsg/commit',
                    data: {ids: pids.join()},
                    done: function () {
                        dataTable.refresh();
                    }
                });
            }) :
            bootbox.alert('请先选择要提交的舆情');

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveMessage: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/smartoffice/recvmsg/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },
    closeExportModal: function () {
        var modal = $('#detailModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    exportMessage: function () {
        var modal = $('#detailModal ');

        modal.find('input[name="content"]').val(this.editor.getContent());
        modal.find('form').submit();
    },

    _validator: function () {
        var values = this._validate($('#dataModal form'), {
            copies: function (val) {
                if (!(/^\d+$/.test(val))) return '必须为数字。';
            }
        });

        return values || false;
    }
});