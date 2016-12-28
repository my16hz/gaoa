/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSCommentPage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/comment/pvlist', [
            {title: '处置书ID', field: 'dispose_doc_no', sortable: true, order: 'desc', maxWidth: 60},
            {
                title: '标题', field: 'title', alwaysDisplay: true, sortable: true, order: 'desc', autoWidth: '18%',
                formatter: function (val, rowdata) {
                    return '<a href="' + (rowdata.url || 'javascript:') + '" target="_blank">' + val + '</a>';
                }
            },
            {title: '批示领导', field: 'comment_user', sortable: true, order: 'desc'},
            {title: '批示内容', field: 'comment', sortable: true, order: 'desc', autoWidth: '18%'},
            {title: '涉及部门', field: 'to_department', sortable: true, order: 'desc'},
            {
                title: '处理时间', field: 'createtime', sortable: true, order: 'desc',
                formatter: function (val) {
                    return moment(val).format('YYYY/MM/DD HH:mm');
                }
            },
            {
                title: '操作', field: 'action',
                formatter: function () {
                   return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-eye-open"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        self.showDataModal(arguments[2]);
                    }
                }
            }
        ]);
        this.sTime = this._createTimepicker('#sTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.eTime.minDate(e.date)
        });
        this.eTime = this._createTimepicker('#eTime', 'YYYY-MM-DD HH:mm').onChange(function (e) {
            this.sTime.maxDate(e.date);
        });
        this.commentEditor = this._createEditor('#commentWrapper');
    },
    events: {
        'click #btnSearch': 'doSearch',
        'click #dataModal .btn-default': 'closeDataModal'
    },
    doSearch: function (jqbtn) {
        this.dataTable.setFilter({
            title: $('#title').val(),
            sTime: this.sTime.getTime(),
            eTime: this.eTime.getTime()
        }).refresh();
    },
    showDataModal: function (pvobj) {
        var modal = $('#dataModal');
        var jqform = modal.find('form');
        var editor = this.commentEditor;
        this._setFormControlValues(jqform, pvobj);
        editor.ready(function () {
            editor.setContent(pvobj.attachment || '');
            editor.setDisabled();
        });
        this._showModal(modal, this.dataTable);
    },
    closeDataModal: function() {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'))
            ._closeModal(modal, this.dataTable);
    }
});