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

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.isShown = 'member';
        this.memberTable = this._createTable('#memberTableWrapper', '/sysmanage/members', [
            {field: 'checkbox', checkbox: true},
            {title: '用户ID', field: 'id'},
            {title: '用户名', field: 'name', alwaysDisplay: true, maxWidth: 120},
            {title: '组名', field: 'groupname'},
            {
                title: '级别', field: 'priority',
                formatter: function (val) {
                    return val == 1 ? '市级' : '县级';
                }
            },
            {title: '描述', field: 'description', autoWidth: '25%'},
            {
                title: '创建时间', field: 'createtime', minWidth: 72,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD');
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="编辑"><i class="glyphicon glyphicon-edit"></i></a>',
                        '<a href="javascript:" title="密码重置"><i class="glyphicon glyphicon-exclamation-sign"></i></a>',
                        '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                    ].join('&nbsp;');
                },
                events: {
                    'click a:eq(0)': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:eq(1)': function () {
                        var uid = arguments[2].id;
                        var name = arguments[2].name;

                        bootbox.confirm('确认重置 ' + name + ' 的密码为123456？', function (rs) {
                            rs && self._ajaxResetPwd(uid, function () {
                                self.memberTable.refresh();
                            });
                        });
                    },
                    'click a:eq(2)': function () {
                        var uid = arguments[2].id;

                        bootbox.confirm('确认删除？', function (rs) {
                            rs && self._ajaxDelete(uid, function () {
                                self.memberTable.refresh();
                            });
                        });
                    }
                }
            }
        ]);
        this.groupTable = this._createTable('#groupTableWrapper', 'sysmanage/groups', [
            {field: 'checkbox', checkbox: true},
            {title: '组ID', field: 'id'},
            {title: '组名', field: 'name', alwaysDisplay: true},
            {
                title: '级别', field: 'priority',
                formatter: function (val) {
                    return val == 1 ? '市级' : '县级';
                }
            },
            {title: '描述', field: 'description', autoWidth: '25%'},
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="成员"><i class="glyphicon glyphicon-user"></i></a>',
                        '<a href="javascript:" title="编辑"><i class="glyphicon glyphicon-edit"></i></a>',
                        '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                    ].join('&nbsp;');
                },
                events: {
                    'click a:eq(0)': function () {
                        var gpid = arguments[2].id;

                        self.groupMembersTable = self._createTable('#groupMembersTableWrapper', '/sysmanage/groups/' + gpid + '/members', [
                            {title: '用户ID', field: 'id'},
                            {title: '用户名', field: 'name'},
                            {title: '描述', field: 'description'},
                            {
                                title: '操作', field: 'action',
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

                                                self.groupMembersTable.refresh();
                                            }
                                        });
                                    }
                                }
                            }
                        ]);

                        self._showModal('#groupMembersModal', self.groupTable);
                    },
                    'click a:eq(1)': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:eq(2)': function () {
                        var gpid = arguments[2].id;

                        bootbox.confirm('确认删除？', function (rs) {
                            rs && self._ajaxDelete(gpid, function () {
                                self.groupTable.refresh();
                            });
                        });
                    }
                }
            }
        ]);
    },
    events: {
        'click #content-switch > .btn': 'changePageContent',
        'click #btnAdd': 'showDataModal',
        'click #btnDel': 'delSelectedItems',
        'click #memberModal .btn-default': 'closeDataModal',
        'click #memberModal .btn-primary': 'saveData',
        'click #groupModal .btn-default': 'closeDataModal',
        'click #groupModal .btn-primary': 'saveData',
        'click #groupMembersModal .btn-default': 'closeGroupMembersModal'
    },

    changePageContent: function (jqBtn) {
        if (jqBtn.hasClass('btn-primary')) return;

        ('member' == (this.isShown = jqBtn.attr('data-type')) ?
            this.memberTable.showDataWrapper() :
            this.groupTable.showDataWrapper()).reviseAutoWidth();

        jqBtn.addClass('btn-primary')
            .removeClass('btn-default')
            .siblings()
            .removeClass('btn-primary')
            .addClass('btn-default');
    },
    showDataModal: function (data) {
        var self = this;
        var displayed = self._getDisplayed();
        var jqform = displayed.modal.find('form');

        'member' == this.isShown ?
            this._sendRequest({
                type: 'get',
                url: '/sysmanage/groups',
                done: function (rs) {
                    _appendOptions(rs);
                    _fillFormValuesAndOpenModal();
                }
            }) :
            _fillFormValuesAndOpenModal();

        function _appendOptions (values) {
            var jqSelect = $('select[name="groupid"]', jqform);

            jqSelect.find('option:gt(0)').remove();

            $.each(values, function (n, gp) {
                jqSelect.append($('<option></option>')
                    .attr('value', gp.id)
                    .text(gp.name));
            });
        }

        function _fillFormValuesAndOpenModal () {
            $('input[name="id"]', jqform).prop('readonly', !!data.id);
            $('input[name="isNew"]').val(data.id ? '' : 'true');

            $('.form-group-password')[data.id ? 'hide' : 'show']().find('input').prop('disabled', !!data.id);

            if (data.id) {
                data.role && !$.isArray(data.role) && (data.role = data.role.split(','));
                self._setFormControlValues(jqform, data);
            }

            self._showModal(displayed.modal, displayed.dataTable);
        }
    },
    delSelectedItems: function () {
        var dataTable = this._getDisplayed().dataTable;
        var ids = dataTable.getSelected();
        var self = this;

        ids.length ?
            bootbox.confirm('确定删除？', function (rs) {
                rs && self._ajaxDelete(ids.join(), function () {
                    dataTable.refresh();
                });
            }) :
            bootbox.alert('请先选择要删除数据！');

        return this;
    },
    closeDataModal: function () {
        var displyed = this._getDisplayed();

        this._clearFormControlValues(displyed.modal.find('form'))
            ._closeModal(displyed.modal, displyed.dataTable);
    },
    saveData: function () {
        var self = this;
        var displayed = this._getDisplayed();

        this._sendRequest({
            type: 'post',
            url: displayed.saveUrl,
            validator: displayed.validator,
            done: function () {
                displayed.dataTable.refresh();
                self.closeDataModal();
            }
        });
    },
    closeGroupMembersModal: function () {
        this._closeModal('#groupMembersModal', this.groupTable);
    },

    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: this._getDisplayed().delUrl,
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _ajaxResetPwd: function (uid, done) {
        var pwd = new Hashes.SHA1().hex('123456');
        this._sendRequest({
            type: 'put', url: "/sysmanage/members/resetpwd",
            data: {uid: uid, pwd: pwd},
            done: done
        });

        return this;
    },
    _memberValidator: function () {
        var sha1 = new Hashes.SHA1();
        var values = this._validate($('#memberModal form'), {
            id: function (id) {
                if (!id.length) return 'ID 不能为空。';
            },
            name: function (name) {
                if (!name.length) return '用户名不能为空。';
            },
            password: function (pwd, values) {
                if (values.isNew && !pwd.length) return '密码不能为空。';
            },
            repassword: function (repwd, values) {
                if (values.isNew) {
                    if (!repwd.length) return '确认密码不能为空。';
                    if (values.password != repwd) return '两次密码输入不一致。';
                }
            }
        });

        if (values) {
            values.password = sha1.hex(values.password);
            !values.groupid && (delete values.groupid);
        }

        return values || false;
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

        return hasErr ? false : values;
    },
    _getDisplayed: function () {
        return 'member' == this.isShown ? {
            dataTable: this.memberTable,
            modal: $('#memberModal'),
            saveUrl: '/sysmanage/members/save',
            validator: $.proxy(this._memberValidator, this),
            delUrl: '/sysmanage/members/delete'
        } : {
            dataTable: this.groupTable,
            modal: $('#groupModal'),
            saveUrl: '/sysmanage/groups/save',
            validator: $.proxy(this._groupValidator, this),
            delUrl: '/sysmanage/groups/delete'
        };
    }
});