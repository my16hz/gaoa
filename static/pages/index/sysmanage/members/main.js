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
            .target = 'member';
    },
    events: {
        'click #btnMembers': 'onClickBtnMembers',
        'click #btnGroups': 'onClickBtnMembers',
        'click #btnAdd': 'onClickBtnAdd',
        'click #btnDel': 'onClickBtnDel',
        'click #btnCloseMModal': 'onClickBtnCloseMModal',
        'click #btnSaveMember': 'onClickBtnSaveMember'
    },
    onClickBtnMembers: function (jqBtn) {
        if (!jqBtn.hasClass('btn-primay')) {
            this._drawMemberTable().target = 'member';
            jqBtn
                .addClass('btn-primary')
                .siblings()
                .removeClass('btn-primary')
        }
    },
    onClickBtnMembers: function (jqBtn) {
        if (!jqBtn.hasClass('btn-primay')) {
            this._drawGroupTable().target = 'group';
            jqBtn
                .addClass('btn-primary')
                .siblings()
                .removeClass('btn-primary')
        }
    },
    onClickBtnAdd: function () {
        var self = this;

        if ('member' == this.target) {
            this._updateGroupOptions(function () {
                self._shrinkMemberTable();
            })
        } else {

        }
    },
    onClickBtnDel: function () {
        var self = this;

        if ('member' == this.target) {
            this._delSelectedMembers(function () {
                self._refreshMemberTable();
            });
        } else {
            this._delSelectedGroups(function () {
                self._refreshGroupTable();
            });
        }
    },
    onClickBtnCloseMModal: function () {
        this._expandMemberTable();
    },
    onClickBtnSaveMember: function () {
        var self = this;

        this.sendRequest({
            type: 'post', url: '/sysmanage/members/add',
            validator: $.proxy(this._validator, this),
            done: function () {
                self._expandMemberTable()
                    ._refreshMemberTable();
            }
        });
    },

    _drawMemberTable: function () {
        $('#memberTable').bootstrapTable($.extend({
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

        $('#memberGridWrapper')
            .removeClass('hide')
            .next()
            .addClass('hide');

        return this;
    },
    _refreshMemberTable: function () {
        $('#memberTable').bootstrapTable('refresh');

        return this;
    },
    _shrinkMemberTable: function () {
        $('#memberGridWrapper > div:first').attr('class', 'col-xs-2').next().removeClass('hide');
        $('#memberTable')
            .bootstrapTable('hideColumn', 'checkbox')
            .bootstrapTable('hideColumn', 'groupid')
            .bootstrapTable('hideColumn', 'priority')
            .bootstrapTable('hideColumn', 'description')
            .bootstrapTable('hideColumn', 'createtime')
            .bootstrapTable('hideColumn', 'action');

        return this;
    },
    _expandMemberTable: function () {
        $('#memberGridWrapper > div:first').attr('class', 'col-md-12').next().addClass('hide');
        $('#memberTable')
            .bootstrapTable('showColumn', 'checkbox')
            .bootstrapTable('showColumn', 'groupid')
            .bootstrapTable('showColumn', 'priority')
            .bootstrapTable('showColumn', 'description')
            .bootstrapTable('showColumn', 'createtime')
            .bootstrapTable('showColumn', 'action');

        return this;
    },
    _delSelectedMembers: function (done) {
        var selected = $('#memberTable').bootstrapTable('getSelections');

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
            done: done
        });
    },

    _drawGroupTable: function () {
        $('#groupTable').bootstrapTable($.extend({
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

        $('#groupGridWrapper')
            .removeClass('hide')
            .prev()
            .addClass('hide');

        return this;
    },
    _refreshGroupTable: function () {
        $('#groupTable').bootstrapTable('refresh');

        return this;
    },
    _shrinkGroupTable: function () {
        return this;
    },
    _expandGroupTable: function () {

    },
    _delSelectedGroups: function () {

    },

    _updateGroupOptions: function (done) {
        this.sendRequest({
            type: 'get', url: '/sysmanage/groups',
            done: function (rs) {
                $('#mGroup').find('option:gt(0)').remove();

                $.each(rs.data, function (n, gp) {
                    $('#mGroup').append('<option value="' + gp.id + '">' + gp.name + '</option>');
                });

                done();
            }
        });
    },
    _showGroupMembers: function (gpid) {

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
    },
    _validator: function () {
        var sha1 = new Hashes.SHA1();

        return {
            id: $('#mId').val(),
            name: $('#mName').val(),
            password: sha1.hex($('#mPassword').val()),
            description: $('#mPassword').val(),
            role: '11,12',
            priority: 2,
            groupid: $('#mGroup').val()
        };
    }
});