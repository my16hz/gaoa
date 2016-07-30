/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSMembersPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
        this
            .initDependencies()
            ._fetchTableData('members', null, function (rs) {
                self._drawMemberTable(rs);
            });

    },
    events: {
        'click #btnMembers': '_onClickBtnMembers',
        'click #btnGroups': '_onClickBtnGroups'
    },
    _onClickBtnMembers: function (jqBtn) {
        var self = this;

        if (jqBtn.hasClass('btn-primary')) return;

        this._fetchTableData('members', null, function (rs) {
            !self.memberTable ?
                self._drawMemberTable(rs) :
                self.memberTable.load(rs);

            jqBtn
                .addClass('btn-primay')
                .siblings('button')
                .removeClass('btn-primay');

            $('.group-func-buttons').hide();
        });
    },
    _onClickBtnGroups: function (jqBtn) {
        var self = this;

        if (jqBtn.hasClass('btn-primary')) return;

        this._fetchTableData('groups', null, function (rs) {
            !self.groupTable ?
                self._drawGroupTable(rs) :
                self.groupTable.load(rs);

            jqBtn
                .addClass('btn-primay')
                .siblings('button')
                .removeClass('btn-primay');

            $('.member-func-buttons').hide();
        });

    },
    /**
     * Fetching members from server
     * @param type {String} - memebers, groups
     * @param params {Object} - {sort, order, offset, limit}
     * @param done
     */
    _fetchTableData: function (type, params, done) {
        this.sendRequest({
            url: '/sysmanage/' + type,
            type: 'get',
            data: params,
            done: done
        });

        return this;
    },
    _drawMemberTable: function (data) {
        this.memberTable = $('<table></table>')
            .appendTo($('#table_panel').empty())
            .bootstrapTable({
                class: 'table table-striped table-hover table-condensed',
                data: data,
                columns: [{
                    checkbox: true
                }, {
                    title: '用户名',
                    field: 'name'
                }, {
                    title: '类型',
                    field: 'name'
                }, {
                    title: '组',
                    field: 'name'
                }, {
                    title: '级别',
                    field: 'name'
                }, {
                    title: '创建时间',
                    field: 'name'
                }, {
                    title: '操作',
                    formatter: function () {
                        return '<a href="javascript:"><i class="glyphicon glyphicon-edit"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:"><i class="glyphicon glyphicon-trash"></i></a>';
                    },
                    events: {
                        'click a:first': function (evt, val) {
                            console.log(evt.target);
                        },
                        'click a:last': function (evt, val) {

                        }
                    }
                }]
            });

    },
    _drawGroupTable: function (data) {
        this.groupTable = $('<table></table>')
            .appendTo($('#table_panel').empty())
            .bootstrapTable({
                class: 'table table-striped table-hover table-condensed',
                data: data,
                columns: [{
                    checkbox: true
                }, {
                    title: '用户名',
                    field: 'name'
                }, {
                    title: '类型',
                    field: 'name'
                }, {
                    title: '组',
                    field: 'name'
                }, {
                    title: '级别',
                    field: 'name'
                }, {
                    title: '创建时间',
                    field: 'name'
                }, {
                    title: '操作',
                    formatter: function () {
                        return '<a href="javascript:"><i class="glyphicon glyphicon-edit"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:"><i class="glyphicon glyphicon-trash"></i></a>';
                    },
                    events: {
                        'click a:first': function (evt, val) {
                            console.log(evt.target);
                        },
                        'click a:last': function (evt, val) {

                        }
                    }
                }]
            });
    }
});