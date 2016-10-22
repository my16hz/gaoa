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

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/daily/pvlist', [
            {field: 'checkbox', checkbox: true},
            {title: '期数', field: 'daily_id', sortable: true, order: 'desc'},
            {title: '标题', field: 'title', alwaysDisplay: true},
            {title: '载体', field: 'from_website'},
            {title: '所属栏目', field: 'item', sortable: true, order: 'desc'},
            {title: '舆情类别', field: 'type', sortable: true, order: 'desc'},
            {title: '回帖数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc', minWidth: 112,
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '状态', field: 'state',
                formatter: function (val) {
                    switch (val) {
                        case 0: return '未提交';
                        case 1: return '待审核';
                        case 2: return '审核通过';
                        case 3: return '审核不通过';
                        case 4: return '已入报';
                        case 5: return '待批示';
                        case 6: return '已批示';
                        case 7: return '待回复';
                        case 8: return '已回复';
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
                        var content = arguments[2].content;

                        editor.ready(function () {
                            editor.setContent(content || '');
                            editor.setDisabled();
                        });

                        self._showModal('#dataModal', self.dataTable);
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'keydown #inputSearch': 'autoSearch',
        'click #btnSearch': 'doSearch',
        'click #btnNotify': 'showNotifyModal',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #notifyModal .btn-default': 'closeNotifyModal',
        'click #notifyModal .btn-primary': 'saveNotify'
    },
    autoSearch: function (jqinput, evt) {
        var id = $.trim(jqinput.val());

        if (13 == evt.keyCode) {
            this.dataTable.setFilter(id ? {id: id} : null)
                .refresh();
        }
    },
    doSearch: function (jqbtn) {
        var id = $.trim(jqbtn.prev('input').val());

        this.dataTable.setFilter(id ? {id: id} : null)
            .refresh();
    },
    showNotifyModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var modal = $('#notifyModal');
        var self = this;

        if (!ids.length) {
            return bootbox.alert('请先选择要通报的记录！');
        }

        this._setFormControlValues(modal.find('form'), {pvids: ids.join()});
        this._sendRequest({
            type: 'get',
            url: '/sysmanage/members',
            done: function (rs) {
                _initMemberTree(rs);
                self._showModal(modal, dataTable);
            }
        });

        function _initMemberTree (members) {
            var groups = [{id: '_root_', parent: '#', text: '成员列表', type: 'root', state: {opened: true}}];
            var isCached = {};

            $.each(members, function (gpid, user) {
                gpid = '_gpid_' + (user.groupid || '');

                if (!isCached[gpid]) {
                    groups.push({id: gpid, parent: '_root_', text: user.groupname || '未分组', type: 'group'});
                    isCached[gpid] = true;
                }

                groups.push({id: user.id, parent: gpid, text: user.name, type: 'member'});
            });

            self.memberTree = self._createJsTree('#treeWrapper', groups).onChanged(function () {
                $('input[name="uids"]', modal).val(this.memberTree.getChecked().filter(function (id) {
                    return '_root_' !== id && !/^_gpid_/.test(id);
                }).join());
            });
        }
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
    saveNotify: function () {
        var self = this;
        this._sendRequest({
            type: 'post', url: '/notify/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeNotifyModal();
                self.dataTable.refresh();
            }
        });

        return this;
    },

    _validator: function () {
        var jqform = $('#notifyModal form');
        var values = this._getFormControlValues(jqform);

        return values;
    }
});