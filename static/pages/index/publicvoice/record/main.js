/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/pubvoice/list', [
            {field: 'checkbox', checkbox: true},
            {title: '标题', field: 'title', alwaysDisplay: true},
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
                        case 3:
                            return '审批未通过';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return [
                        '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>',
                        '<a href="javascript:" title="删除"><i class="glyphicon glyphicon-trash"></i></a>'
                    ].join('&nbsp;&nbsp;');
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    },
                    'click a:last': function () {
                        var uid = arguments[2].id;

                        bootbox.confirm('确认删除？', function (rs) {
                            rs && self._ajaxDelete(uid, function () {
                                self.dataTable.refresh();
                            });
                        });
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnAdd': 'showDataModal',
        'click #btnImport': 'showImportModal',
        'click #btnDel': 'delSelected',
        'click #btnCommit': 'applyApprobation',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'savePubVoice',
        'click #importModal .btn-default': 'closeImportModal'
    },

    showDataModal: function (pubvoice) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/sysmanage/groups',
            done: function (rs) {
                _appendOptions(rs);
                _fillFormValues(pubvoice);

                self._showModal(modal, self.dataTable);
            }
        });

        function _appendOptions (values) {
            var jqSelect = $('select[name="duty_department"]', jqform);

            jqSelect.find('option:gt(0)').remove();

            $.each(values, function (n, gp) {
                jqSelect.append($('<option></option>')
                    .attr('value', gp.id)
                    .text(gp.name));
            });
        }

        function _fillFormValues (pubvoice) {
            $('input[name="url"]', jqform).prop('readonly', !!pubvoice.id);

            pubvoice.id && self._setFormControlValues(jqform, pubvoice);

            editor.ready(function () {
                editor.setContent(pubvoice.content || '');
            });
        }

        return this;
    },
    showImportModal: function () {
        var modal = $('#importModal');

        this._createUploader(modal.find('input[type="file"]'), '/datafile', function () {
            this.closeImportModal();
        });

        this._showModal(modal, this.dataTable);
    },
    applyApprobation: function () {
        var self = this;
        var dataTable = this.dataTable;
        var pids = dataTable.getSelected();

        pids.length ?
            bootbox.confirm('确定提交审批？', function (rs) {
                rs && self._sendRequest({
                    type: 'post', url: '/pubvoice/apply',
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
    savePubVoice: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/pubvoice/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
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

        return this;
    },
    closeImportModal: function () {
        var modal = $('#importModal');
        var dataTable = this.dataTable;

        modal.find('input[type="file"]').val('');

        this._closeModal(modal, dataTable);
        dataTable.refresh();
    },

    _ajaxDelete: function (ids, done) {
        this._sendRequest({
            type: 'delete', url: '/pubvoice/delete',
            data: {ids: ids},
            done: done
        });

        return this;
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    }
});
