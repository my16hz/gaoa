/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSGuidePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/notify/list', [
            {field: 'checkbox', checkbox: true},
            {title: '日报期数', field: 'daily_id', sortable: true, order: 'desc'},
            {title: '舆情标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc'},
            {title: '舆情载体', field: 'from_website', sortable: true, order: 'desc'},
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
                title: '状态', field: 'guide_state', sortable: true, order: 'desc',
                formatter: function (val) {
                    switch (val) {
                        case 0:
                            return '未引导';
                        case 1:
                            return '已引导';
                    }
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="引导"><i class="glyphicon glyphicon-tag"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2])
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
        this.__collapsepanels__ = $('.guid-panel');
    },
    events: {
        'click .func-btns > a:eq(0)': 'addGuidPanel',
        'click .func-btns > a:eq(1)': 'expandGuidPanels',
        'click .func-btns > a:eq(2)': 'collapseGuidPanels',
        'click #dataModal .panel-heading a:first': 'toggleGuidPanel',
        'click #dataModal .panel-heading a:last': 'removeGuidPanel',
        'keyup #dataModal .panel-body input[name="guide_name"]': 'checkPanelTitle',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveGuide'
    },
    addGuidPanel: function () {
        var jqPanel = $('.guid-panel:first');
        var newPanel = jqPanel.clone().insertAfter(jqPanel);
        var self = this;

        newPanel.find('.panel-heading a:first').bind('click', function () {
            self.toggleGuidPanel($(this));
        });
        newPanel.find('.panel-heading a:last').bind('click', function () {
            self.removeGuidPanel($(this));
        });
        newPanel.find('.panel-body input[name="guide_name"]').bind('keyup', function () {
            self.checkPanelTitle($(this));
        });

        this._checkGuidPanelCount();
    },
    expandGuidPanels: function () {
        $.each(this.__collapsepanels__, function () {
            $(this).find('.panel-body')
                .collapse('show');
        });
    },
    collapseGuidPanels: function () {
        $.each(this.__collapsepanels__, function () {
            $(this).find('.panel-body')
                .collapse('hide');
        });
    },
    toggleGuidPanel: function (jqTitle) {
        jqTitle.parent()
            .next('.panel-body')
            .collapse('toggle');
    },
    removeGuidPanel: function (jqDel) {
        jqDel.parents('.guid-panel').remove();
        this._checkGuidPanelCount();
    },
    checkPanelTitle: function (jqinput) {
        var name = $.trim(jqinput.val());

        jqinput.parents('.guid-panel')
            .find('.panel-heading > a:first')
            .text(!name ?
                '未完善引导信息' : (
                '引导信息(引导员：' + name + ')'
            ));
    },
    showDataModal: function (pubvoice) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.editor;
        var self = this;

        this._sendRequest({
            type: 'get',
            url: '/guide/detail',
            data: {id: pubvoice.id},
            done: function (rs) {
                if (rs.length != 0) {
                    rs[0]['id'] = pubvoice.id;
                    _fillFormValues(rs[0]);
                }
                else {
                    rs = {id: pubvoice.id};
                    _fillFormValues(rs);
                }

                self._showModal(modal, self.dataTable);
            }
        });

        function _fillFormValues (rs) {
            self._setFormControlValues(jqform, rs);

            editor.ready(function () {
                editor.setContent(rs.content || '');
            });
        }

        return this;
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    },
    saveGuide: function () {
        var dataTable = this.dataTable;

        this._sendRequest({
            type: 'post',
            url: '/guide/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                dataTable.expand().refresh();
            }
        });
    },

    _checkGuidPanelCount: function () {
        var panels = [];

        this.__collapsepanels__ = $('.guid-panel');
        panels = this.__collapsepanels__;

        if (1 == panels.length) {
            $(panels[0]).find('.panel-heading > a:last').addClass('hide');
        } else {
            $.each(panels, function () {
                $(this).find('.panel-heading > a:last').removeClass('hide');
            });
        }
    },
    _validator: function () {
        var jqform = $('#dataModal form');
        var values = this._getFormControlValues(jqform);

        values['content'] = this.editor.getContent();

        return values;
    }
});