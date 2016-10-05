/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSLoginPage = $.extend({}, LHSBasicPage, {
    el: '.login-modal',
    run: function () {
        this.initDependencies();
    },
    events: {
        'click #btnSubmit': 'clickBtnSubmit',
        'keydown input:password': 'onKeyDown'
    },
    clickBtnSubmit: function () {
        this._sendRequest({
            url: '/auth', type: 'post',
            validator: $.proxy(this._validator, this),
            done: function () {
                location.href = '/pubvoice';
            }
        });
    },
    onKeyDown: function (jqbtn, evt) {
        evt.keyCode == 13 && this.clickBtnSubmit();
    },
    _validator: function () {
        var sha1 = new Hashes.SHA1();
        var values = this._validate($('.login-modal form'), {
            username: function (name) {
                if (!name.length) return '用户名不能为空。';
            },
            password: function (pwd) {
                if (!pwd.length) return '密码不能为空。';
            }
        });

        if (values)  values.password = sha1.hex(values.password);

        return values || false;
    },
    _showLoading: function () {
        this.$('#btnSubmit').button('loading');
    },
    _removeLoading: function () {
        this.$('#btnSubmit').button('reset');
    },
    _showXHRMessage: function (msg) {
        var panel = $('<div class="alert alert-warning lhs-alert-panel">' +
            '<strong>登录失败：</strong>' +
            '</div>');
        var timer;

        $('.lhs-alert-panel').remove();

        panel.append($('<span></span>').text(msg)).appendTo('.login-modal .modal-body');

        timer = setTimeout(function () {
            panel.remove();
            clearTimeout(timer);
        }, 5000);

        return this;
    }
});

$('body').ready(function () {
    LHSLoginPage.run();
});