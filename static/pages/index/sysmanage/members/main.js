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
            ._drawMemberTable()
            .isShown = 'member';
    },

    events: {
        'click #content-switch > .btn': 'changePageContent',
        'click #btnAdd': 'addSingeItem',
        'click #btnDel': 'delSelectedItems',
        'click #memberModal .btn-default': 'closeMemberModal',
        'click #memberModal .btn-primary': 'saveMember',
        'click #groupModal .btn-default': 'closeGroupModal',
        'click #groupModel .btn-primary': 'saveGroup'
    },

    changePageContent: function (jqBtn) {
        if (jqBtn.hasClass('btn-primary')) return;

        jqBtn
            .addClass('btn-primary').removeClass('btn-default')
            .siblings()
            .removeClass('btn-primary').addClass('btn-default');

        'member' == (this.isShown = jqBtn.attr('data-type')) ?
            this._drawMemberTable() :
            this._drawGroupTable();
    },
    addSingeItem: function () {
        'member' == this.isShown ?
            this._showMemberModal() :
            this._showGroupModal();
    },
    delSelectedItems: function () {
        'member' == this.isShown ?
            this._delSelectedMembers() :
            this._delSelectedGroups();
    },
    closeMemberModal: function () {
        var self = this;

        $([
            'checkbox',
            'groupid',
            'priority',
            'description',
            'createtime',
            'action'
        ]).each(function (index, field) {
            self.memberTable.bootstrapTable('showColumn', field);
        });

        $('#memberGridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');
    },
    saveMember: function () {
        var self = this;

        this.sendRequest({
            type: 'post',
            url: '/sysmanage/members/add',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeMemberModal()._refreshTable();
            }
        });
    },
    closeGroupModal: function () {

    },
    saveGroup: function () {

    },

    _drawMemberTable: function () {
        if (!this.memberTable) {
            (this.memberTable = $('#memberTable')).bootstrapTable($.extend({
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '用户名',
                    field: 'name'
                }, {
                    title: '组',
                    field: 'groupid'
                }, {
                    title: '级别',
                    field: 'priority',
                    formatter: function (val) {
                        return val == 1 ? '市级' : '县级';
                    }
                }, {
                    title: '描述',
                    field: 'description'
                }, {
                    title: '创建时间',
                    field: 'createtime',
                    formatter: function (val) {
                        return val;
                    }
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="编辑"><i class="glyphicon glyphicon-edit"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>';
                    },
                    events: {
                        'click a:first': function (evt, val) {
                            console.log(evt.target);
                        },
                        'click a:last': function (evt, val) {

                        }
                    }
                }]
            }, this._buildTableOptions('member')));
        }

        $('#memberGridWrapper')
            .removeClass('hide')
            .next()
            .addClass('hide');

        return this;
    },
    _drawGroupTable: function () {
        if (!this.groupTable) {
            (this.groupTable = $('#groupTable')).bootstrapTable($.extend({
                columns: [{
                    checkbox: true
                }, {
                    title: '组名',
                    field: 'name'
                }, {
                    title: '级别',
                    field: 'priority',
                    formatter: function (val) {
                        return val == 1 ? '市级' : '县级';
                    }
                }, {
                    title: '描述',
                    field: 'description'
                }, {
                    title: '操作',
                    formatter: function () {
                        return '<a href="javascript:" title="成员"><i class="glyphicon glyphicon-user"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:" title="编辑"><i class="glyphicon glyphicon-edit"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>';
                    },
                    events: {
                        'click a:first': function (evt, val) {

                        },
                        'click a:last': function (evt, val) {

                        }
                    }
                }]
            }, this._buildTableOptions('group')));
        }

        $('#groupGridWrapper')
            .removeClass('hide')
            .prev()
            .addClass('hide');

        return this;
    },
    _showMemberModal: function () {
        var self = this;

        this.sendRequest({
            type: 'get', url: '/sysmanage/groups',
            done: function (rs) {
                var jqSelect = $('form select[name="groupid"]', '#memberModal');

                jqSelect.find('option:gt(0)').remove();

                $.each(rs.data, function (n, gp) {
                    jqSelect.append($('<option></option>')
                        .attr('value', gp.id)
                        .text(gp.name));
                });

                $([
                    'checkbox',
                    'groupid',
                    'priority',
                    'description',
                    'createtime',
                    'action'
                ]).each(function (index, field) {
                    self.memberTable.bootstrapTable('hideColumn', field);
                });

                $('#memberGridWrapper > div:first')
                    .attr('class', 'col-xs-2')
                    .next()
                    .removeClass('hide');
            }
        });

        return this;
    },
    _showGroupModal: function () {
        return this;
    },
    _delSelectedMembers: function () {
        var selected = this.memberTable.bootstrapTable('getSelections');
        var self = this;

        selected.length && this.sendRequest({
            type: 'delete', url: '/sysmanage/members/del',
            data: {
                ids: (function () {
                    var mids = [];

                    $(selected).each(function (n, member) {
                        mids.push(member.id);
                    });

                    return mids.join(',');
                })()
            },
            done: function () {
                self._refreshTable();
            }
        });

        return this;
    },
    _delSelectedGroups: function () {
        var selected = this.groupTable.bootstrapTable('getSelections');
        var self = this;

        selected.length && this.sendRequest({
            type: 'delete', url: '/sysmanage/groups/del',
            data: {
                ids: (function () {
                    var gpids = [];

                    $(selected).each(function (n, gp) {
                        gpids.push(gp.id);
                    });

                    return gpids.join(',');
                })()
            },
            done: function () {
                self._refreshTable();
            }
        });

        return this;
    },
    _refreshTable: function () {
        this[this.isShown + 'Table'].bootstrapTable('refresh');

        return this;
    },
    _buildTableOptions: function (type) {
        var self = this;

        return {
            method: 'get',
            url: '/sysmanage/' + type + 's',
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
                self._showXHRError('请求失败:' + xhr.responseText);
            }
        }
    }
});