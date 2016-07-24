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
        'click #btnSubmit': 'clickBtnSubmit'
    },
    clickBtnSubmit: function () {
        this.sendRequest({
            url: '/auth', type: 'post', done: function () {
                location.href = '/pubvoice';
            }
        });
    },
    _validator: function () {
        var inputUName = this.$('#username');
        var inputPassword = this.$('#password');

        var username = $.trim(inputUName.val());
        var password = $.trim(inputPassword.val());

        if (!username.length) {
            inputUName
                .parent('.form-group').addClass('has-error')
                .unbind()
                .bind('click', function () {
                    $(this).removeClass('has-error');
                });

            return false;
        } else if (!password.length) {
            inputPassword
                .parent('.form-group').addClass('has-error')
                .unbind()
                .bind('focus', function () {
                    $(this).removeClass('has-error');
                });

            return false;
        } else {
            return {
                username: username,
                password: password
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