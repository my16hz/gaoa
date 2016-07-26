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
        'keydown #password': 'onKeyDown'
    },
    clickBtnSubmit: function () {
        this.sendRequest({
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
        var inputUName = this.$('#username');
        var inputPassword = this.$('#password');

        var username = $.trim(inputUName.val());
        var password = $.trim(inputPassword.val());
        var sha1 = new Hashes.SHA1();

        if (!username.length) {
            inputUName
                .parent('.form-group').addClass('has-error')
                .unbind('focus')
                .bind('focus', function () {
                    $(this).removeClass('has-error');
                });

            return false;
        } else if (!password.length) {
            inputPassword
                .parent('.form-group').addClass('has-error')
                .unbind('focus')
                .bind('focus', function () {
                    $(this).removeClass('has-error');
                });

            return false;
        } else {
            return {
                username: username,
                password: sha1.hex(password)
            };
        }
    },
    _showLoading: function () {
        this.$('#btnSubmit').button('loading');
    },
    _removeLoading: function () {
        this.$('#btnSubmit').button('reset');
    }
});

$('body').ready(function () {
    LHSLoginPage.run();
});