/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSConfigurePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();

        this.dataTable = this._createTable('#tableWrapper', '/sysmanage/configure', [
            {title: '配置项', field: 'name'},
            {title: '当前值', field: 'value'},
            {
                title: '操作', field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="修改"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                        var modal = $('#dataModal');
                        var config = arguments[2];

                        self._setFormControlValues(modal.find('form'), config);

                        modal.find('.control-label').text(config.name + ':');
                        modal.parent().removeClass('hide');
                    }
                }
            }
        ]);
    },
    events: {
        'click #dataModal .btn-default': 'closeDataModal',
        'click #dataModal .btn-primary': 'saveConfig'
    },
    closeDataModal: function () {
        var modal = $('#dataModal');

        this._clearFormControlValues(modal.find('form'));

        modal.find('.control-label').empty();
        modal.parent().addClass('hide');
    },
    saveConfig: function () {
        var self = this;

        this._sendRequest({
            type: 'post',
            url: '/sysmanage/configure/update',
            validator: $.proxy(this._validator, this),
            done: function () {
                self.dataTable.refresh();
                self.closeDataModal();
            }
        });
    },

    _validator: function () {
        var values = this._validate($('#dataModal form'), {
            value: function (val) {
                if (!/^\d+$/.test(val)) return '配置项必须为数字。';
            }
        });

        return values || false;
    }
});