/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSPasswordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));
        this.initDependencies();
    },
    events: {
        'click .btn-default': 'resetInputs',
        'click .btn-primary': 'savePassword'
    },
    resetInputs: function () {
        this._clearFormControlValues($('form'));
    },
    savePassword: function () {
        this._sendRequest({
            type: 'put',
            url: '/sysmanage/members/modifypwd',
            validator: $.proxy(this._validator, this),
            done: function () {
                location.href = '/login';
            }
        });
    },

    _validator: function () {
        var jqform = $('form');
        var values = this._getFormControlValues(jqform);
        var hasErr = false;

        $.each({
            oldpwd: function (oldpwd) {
                return !!oldpwd.length;
            },
            newpwd: function (newpwd) {
                return !!newpwd.length;
            },
            repwd: function (repwd, values) {
                return !!repwd.length && values.newpwd == repwd;
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
    }
});