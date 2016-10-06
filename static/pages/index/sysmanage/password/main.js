/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSPasswordPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

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
        var sha1 = new Hashes.SHA1();
        var values = this._validate($('form'), {
            oldpwd: function (oldpwd) {
                if (!oldpwd.length) return '旧密码不能为空。';
            },
            newpwd: function (newpwd) {
                if (!newpwd.length) return '新密码不能为空。';
            },
            repwd: function (repwd, values) {
                if (!repwd.length) return '确认密码不能为空。';
                if (values.newpwd != repwd) return '两次密码输入不一致。';
            }
        });

        if (values) {
            values.oldpwd = sha1.hex(values.oldpwd);
            values.newpwd = sha1.hex(values.newpwd);
        }

        return values || false;
    }
});