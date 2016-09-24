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
            {title: '回帖人数', field: 'fellow_count', sortable: true, order: 'desc'},
            {title: '关注人数', field: 'review_count', sortable: true, order: 'desc'},
            {title: '涉及部门', field: 'relate_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
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
                            return '待审核';
                        case 2:
                            return '审核通过';
                        case 3:
                            return '审核不通过';
                        case 4:
                            return '已入报';
                        case 5:
                            return '待批示';
                        case 6:
                            return '已批示';
                        case 7:
                            return '待回复';
                        case 8:
                            return '已回复';
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
        13 == evt.keyCode && this.dataTable.refresh({
            query: {id: jqinput.val()}
        });
    },
    doSearch: function (jqbtn) {
        var daily_id = $.trim(jqbtn.prev('input').val());
        this.dataTable.refresh({
            query: {id: daily_id}
        });
    },
    showNotifyModal: function () {
        var dataTable = this.dataTable;
        var ids = dataTable.getSelected();
        var modal = $('#notifyModal');
        var jqform = modal.find('form');
        var self = this;

        if (!ids.length) {
            return bootbox.alert('请先选择要通报的记录！');
        }

        this._setFormControlValues(jqform, {pvids: ids.join()});
        this._sendRequest({
            type: 'get',
            url: '/sysmanage/members',
            done: function (rs) {
                _initMultipleSelect(rs);
                self._showModal(modal, self.dataTable);
            }
        });

        function _initMultipleSelect (members) {
            var jqSelect = $('select[name="uids"]', jqform);
            var options = [$('<optgroup label="未分组"></optgroup>')];
            var index = {nogroup: 0};

            $.each(members, function (gpid, user) {
                gpid = user.groupid;

                if (!gpid) {
                    options[index.nogroup].append(
                        $('<option></option>')
                            .attr('value', user.id)
                            .text(user.name)
                    );
                } else {
                    if (!index[gpid]) {
                        options.push(
                            $('<optgroup></optgroup>')
                                .attr('label', user.groupname)
                                .append(
                                    $('<option></option>')
                                        .attr('value', user.id)
                                        .text(user.name)
                                )
                        );
                    } else {
                        options[index[gpid]].append(
                            $('<option></option>')
                                .attr('value', user.id)
                                .text(user.name)
                        );
                    }
                }
            });

            self._createSelect2(jqSelect.append(options))
                .clear();
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
                self._closeModal($('#notfiyModal'), self.dataTable);
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