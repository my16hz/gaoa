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

        this.initDependencies()
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
        'click #groupModal .btn-primary': 'saveGroup',
        'click #groupMembersModal .btn-default': 'closeGroupMembersModal'
    },

    changePageContent: function (jqBtn) {
        if (jqBtn.hasClass('btn-primary')) return;

        jqBtn.addClass('btn-primary').removeClass('btn-default')
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

        $(['checkbox', 'id', 'groupname', 'priority', 'description', 'createtime', 'action'])
            .each(function (index, field) {
                self.memberTable.bootstrapTable('showColumn', field);
            });

        this._clearFormControlValues($('#memberModal form'))
            .$('#memberGridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');
    },
    saveMember: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/sysmanage/members/save',
            validator: $.proxy(this._memberValidator, this),
            done: function () {
                self._refreshTable().closeMemberModal();
            }
        });
    },
    closeGroupModal: function () {
        this._clearFormControlValues($('#groupModal form'))
            ._hideGroupModalWrapper()
            ._expandGroupTable();
    },
    saveGroup: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/sysmanage/groups/save',
            validator: $.proxy(this._groupValidator, this),
            done: function () {
                self._refreshTable().closeMemberModal();
            }
        });
    },
    closeGroupMembersModal: function () {
        this._hideGroupModalWrapper()._expandGroupTable();
    },

    _drawMemberTable: function () {
        var self = this;

        if (!this.memberTable) {
            (this.memberTable = $('#memberTable')).bootstrapTable($.extend({
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '用户ID',
                    field: 'id'
                }, {
                    title: '用户名',
                    field: 'name'
                }, {
                    title: '组名',
                    field: 'groupname'
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
                        return moment(val).format('YYYY年MM月DD日 HH:mm:ss');
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
                        'click a:first': function () {
                            self._showMemberModal(arguments[2]);
                        },
                        'click a:last': function () {
                            bootbox.confirm('确认删除？', function (rs) {
                                rs && self._ajaxDelete(arguments[2].id, function () {
                                    self._refreshTable();
                                });
                            });
                        }
                    }
                }]
            }, this._buildTableOptions('member')));
        } else {
            this._refreshTable();
        }

        $('#memberGridWrapper')
            .removeClass('hide')
            .next()
            .addClass('hide');

        return this;
    },
    _drawGroupTable: function () {
        var self = this;

        if (!this.groupTable) {
            (this.groupTable = $('#groupTable')).bootstrapTable($.extend({
                columns: [{
                    field: 'checkbox',
                    checkbox: true
                }, {
                    title: '组ID',
                    field: 'id'
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
                    field: 'action',
                    formatter: function () {
                        return '<a href="javascript:" title="成员"><i class="glyphicon glyphicon-user"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:" title="编辑"><i class="glyphicon glyphicon-edit"></i></a>' +
                            '&nbsp;&nbsp;' +
                            '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>';
                    },
                    events: {
                        'click a:eq(0)': function () {
                            self._showGroupMembersModal(arguments[2].id);
                        },
                        'click a:eq(1)': function () {
                            self._showGroupModal(arguments[2]);
                        },
                        'click a:eq(2)': function () {
                            bootbox.confirm('确认删除？', function (rs) {
                                rs && self._ajaxDelete(arguments[2].id, function () {
                                    self._refreshTable();
                                });
                            });
                        }
                    }
                }]
            }, this._buildTableOptions('group')));
        } else {
            this._refreshTable();
        }

        $('#groupGridWrapper')
            .removeClass('hide')
            .prev()
            .addClass('hide');

        return this;
    },
    _refreshTable: function () {
        this[this.isShown + 'Table'].bootstrapTable('refresh');

        return this;
    },

    _showMemberModal: function (member) {
        var self = this;

        this._sendRequest({
            type: 'get', url: '/sysmanage/groups',
            done: function (rs) {
                var jqform = '#memberModal form';
                var jqSelect = $('select[name="groupid"]', jqform);

                jqSelect.find('option:gt(0)').remove();

                $.each(rs, function (n, gp) {
                    jqSelect.append($('<option></option>')
                        .attr('value', gp.id)
                        .text(gp.name));
                });

                $(['checkbox', 'id', 'groupname', 'priority', 'description', 'createtime', 'action'])
                    .each(function (index, field) {
                        self.memberTable.bootstrapTable('hideColumn', field);
                    });

                if (member) {
                    $('input[name="id"]', jqform).prop('disabled', true);
                    $('input[name="isNew"]', jqform).val(false);

                    !$.isArray(member.role) && (member.role = member.role.split(','));
                    self._setFormControlValues(jqform, member);
                } else {
                    $('input[name="id"]', jqform).prop('disabled', false);
                    $('input[name="isNew"]', jqform).val(true);
                }

                $('#memberGridWrapper > div:first')
                    .attr('class', 'col-xs-2')
                    .next()
                    .removeClass('hide');
            }
        });

        return this;
    },
    _showGroupModal: function (group) {
        var modal = $('#groupModal').show();
        var jqform = modal.find('form');
        var self = this;

        modal.next().hide(); // hide group member modal

        if (group) {
            $('input[name="id"]', jqform).prop('disabled', true);
            $('input[name="isNew"]', jqform).val(false);
            self._setFormControlValues(jqform, group);
        } else {
            $('input[name="id"]', jqform).prop('disabled', false);
            $('input[name="isNew"]', jqform).val(true);
        }

        this._shrinkGroupTable()
            ._showGroupModalWrapper();

        return this;
    },
    _showGroupMembersModal: function (gpid) {
        var modal = $('#groupMembersModal').show();
        var self = this;

        modal.prev().hide(); // hide group modal

        if (!this.groupMembersTable) {
            (this.groupMembersTable = modal.find('table')).bootstrapTable($.extend({
                columns: [{
                    title: '用户ID',
                    field: 'id'
                }, {
                    title: '用户名',
                    field: 'name'
                }, {
                    title: '描述',
                    field: 'description'
                }, {
                    title: '操作',
                    field: 'action',
                    formatter: function () {
                        var groupid = arguments[1].groupid;

                        if (!groupid) {
                            return '<a href="javascript:" title="添加"><i class="glyphicon glyphicon-plus"></i></a>';
                        } else if (gpid == groupid) {
                            return '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-minus"></i></a>';
                        }
                    },
                    events: {
                        'click a': function () {
                            var jqico = $('i', arguments[0].target);
                            var isAdd = jqico.hasClass('glyphicon-plus');
                            var uid = arguments[2].id;

                            self._sendRequest({
                                type: isAdd ? 'post' : 'delete',
                                url: '/sysmanage/groups/' + gpid + '/' + (isAdd ? 'add' : 'del') + 'member',
                                data: {user: uid},
                                done: function () {
                                    isAdd ?
                                        jqico.removeClass('glyphicon-plus').addClass('glyphicon-minus') :
                                        jqico.removeClass('glyphicon-minus').addClass('glyphicon-plus');

                                    self._refreshTable();
                                }
                            });
                        }
                    }
                }]
            }, this._buildTableOptions('member')), {
                url: '/sysmanage/groups/' + gpid + '/members'
            });
        } else {
            this.groupMembersTable.bootstrapTable('refresh')
        }

        this._shrinkGroupTable()
            ._showGroupModalWrapper();

        return this;
    },

    _showGroupModalWrapper: function () {
        $('#groupGridWrapper > div:first')
            .attr('class', 'col-xs-2')
            .next()
            .removeClass('hide');

        return this;
    },
    _hideGroupModalWrapper: function () {
        $('#groupGridWrapper > div:first')
            .attr('class', 'col-md-12')
            .next()
            .addClass('hide');

        return this;
    },

    _shrinkGroupTable: function () {
        var self = this;

        $(['checkbox', 'id', 'priority', 'description', 'action'])
            .each(function (index, field) {
                self.groupTable.bootstrapTable('hideColumn', field);
            });

        return this;
    },
    _expandGroupTable: function () {
        var self = this;

        $(['checkbox', 'id', 'priority', 'description', 'action'])
            .each(function (index, field) {
                self.groupTable.bootstrapTable('showColumn', field);
            });

        return this;
    },

    _delSelectedMembers: function () {
        var selected = this.memberTable.bootstrapTable('getSelections');
        var self = this;
        var mids = [];

        $(selected).each(function (n, member) {
            mids.push(member.id);
        });

        mids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(mids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要删除的用户');

        return this;
    },
    _delSelectedGroups: function () {
        var selected = this.groupTable.bootstrapTable('getSelections');
        var self = this;
        var gpids = [];

        $(selected).each(function (n, member) {
            gpids.push(member.id);
        });

        gpids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(gpids.join(), function () {
                    self._refreshTable();
                });
            }) :
            bootbox.alert('请先选择要删除的组');

        return this;
    },

    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/sysmanage/' + this.isShown + 's/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },

    _memberValidator: function () {
        var jqform = $('#memberModal form');
        var values = this._getFormControlValues(jqform);
        var hasErr = false;

        $.each({
            id: function (id) {
                return !!id.length;
            },
            name: function (name) {
                return !!name.length;
            },
            password: function (pwd) {
                return !!pwd.length;
            },
            repassword: function (repwd, values) {
                return !!repwd.length && values.password == repwd;
            }
        }, function (name, check) {
            if (!check(values[name], values)) {
                $('[name="' + name + '"]', jqform)
                    .parent().addClass('has-error').end()
                    .unbind('focus')
                    .bind('focus', function () {
                        $(this).parent().removeClass('has-error');
                    });

                hasErr = true;
            }
        });

        !values.groupid && (delete values.groupid);
        !values.role && (values.role = 0);

        return hasErr ? false : values;
    },
    _groupValidator: function () {
        var jqform = $('#groupModal form');
        var values = this._getFormControlValues(jqform);
        var hasErr = false;

        $.each({
            id: function (id) {
                return !!id.length;
            },
            name: function (name) {
                return !!name.length;
            },
        }, function (name, check) {
            if (!check(values[name], values)) {
                $('[name="' + name + '"]', jqform)
                    .parent().addClass('has-error').end()
                    .unbind('focus')
                    .bind('focus', function () {
                        $(this).parent().removeClass('has-error');
                    });

                hasErr = true;
            }
        });

        return hasErr ? false : values;
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