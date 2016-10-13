/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSGuidePage = $.extend({}, LHSBasicPage, {
    __collapsepanels__: [],
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
                        var pvid = arguments[2].id;
                        var modal = $('#dataModal').data('pvid', pvid);

                        self._sendRequest({
                            type: 'get', url: '/guide/detail', data: {id: pvid},
                            done: function (rs) {
                                rs.length ?
                                    $.each(rs, function () {
                                        self.addGuidePanel($.extend(this, {id: pvid}));
                                    }) :
                                    self.addGuidePanel({id: pvid});

                                self._showModal(modal, self.dataTable);
                            }
                        });
                    }
                }
            }
        ]);
    },
    events: {
        'click .func-btns > a:eq(0)': 'addGuidePanel',
        'click .func-btns > a:eq(1)': 'expandGuidePanels',
        'click .func-btns > a:eq(2)': 'collapseGuidePanels',
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveGuide'
    },
    addGuidePanel: function (guide) {
        var modal = $('#dataModal');
        var newPanel = $('#guidePanelTmpl')
            .clone().removeAttr('id').removeClass('hide')
            .appendTo(modal.find('.modal-body'));
        var self = this, newEditor;

        this._checkGuidePanelCount();

        newPanel.data('editor', newEditor = this._createEditor($('.editor-wrapper', newPanel)));
        newPanel.find('.panel-heading a:first').bind('click', function () {
            self._toggleGuidePanel($(this));
        });
        newPanel.find('.panel-heading a:last').bind('click', function () {
            self._removeGuidePanel($(this));
        });
        newPanel.find('form input[name="guide_name"]').bind('keyup', function () {
            self._checkPanelTitle($(this));
        });

        this._setGuideFormValues(newPanel.find('form'), newEditor, guide.id ? guide : {
            id: modal.data('pvid')
        });
    },
    expandGuidePanels: function () {
        $.each(this.__collapsepanels__, function () {
            $(this).find('.panel-body').collapse('show');
        });
    },
    collapseGuidePanels: function () {
        $.each(this.__collapsepanels__, function () {
            $(this).find('.panel-body').collapse('hide');
        });
    },
    closeDataModal: function () {
        $.each(this.__collapsepanels__, function (editor) {
            editor = $(this).data('editor');
            editor.ready(function () {
                editor.destroy();
            });
            $(this).remove();
        });

        this.__collapsepanels__.length = 0;
        this._closeModal($('#dataModal'), this.dataTable);
    },
    saveGuide: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/guide/save',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.closeDataModal();
                self.dataTable.refresh();
            }
        });
    },

    _toggleGuidePanel: function (jqTitle) {
        jqTitle.parent()
            .next('.panel-body')
            .collapse('toggle');

        return this;
    },
    _removeGuidePanel: function (jqDel) {
        var jqPanel = jqDel.parents('.lhs-guide-panel');
        var editor = jqPanel.data('editor');

        editor.ready(function () {
            editor.destroy();
        });
        jqPanel.remove();

        this._checkGuidePanelCount();

        return this;
    },
    _checkPanelTitle: function (jqinput) {
        var name = $.trim(jqinput.val());

        jqinput.parents('.lhs-guide-panel')
            .find('.panel-heading > a:first')
            .text(!name ?
                '未完善引导信息' : (
                '引导信息 (引导员:' + name + ')'
            ));

        return this;
    },
    _checkGuidePanelCount: function () {
        var panels = this.__collapsepanels__ = $('#dataModal .lhs-guide-panel');

        if (1 == panels.length) {
            $(panels[0]).find('.panel-heading > a:last').addClass('hide');
        } else {
            $.each(panels, function () {
                $(this).find('.panel-heading > a:last').removeClass('hide');
            });
        }

        return this;
    },
    _setGuideFormValues: function (jqform, editor, guide) {
        this._setFormControlValues(jqform, guide);

        editor.ready(function () {
            editor.setContent(guide.content || '');
        });

        this._checkPanelTitle(jqform.find('input[name="guide_name"]'));

        return this;
    },
    _validator: function () {
        var values = [];
        var self = this;

        $.each($('#dataModal .lhs-guide-panel'), function (jqpanel) {
            jqpanel = $(this);
            values.push(JSON.stringify(
                $.extend(self._getFormControlValues(jqpanel.find('form')), {
                    content: jqpanel.data('editor').getContent()
                })
            ));
        });

        return {guides: values};
    }
});