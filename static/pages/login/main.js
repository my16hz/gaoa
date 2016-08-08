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
        var values = {};
        var sha1 = new Hashes.SHA1();
        var hasErr = false;

        $.each({
            username: function (name) {
                return !!name.length;
            },
            password: function (pwd) {
                return !!pwd.length;
            }
        }, function (id, checker) {
            var jqInput = $('#' + id);
            var value = $.trim(jqInput.val());

            if (!checker(value)) {
                jqInput
                    .parent('.form-group').addClass('has-error')
                    .unbind('focus')
                    .bind('focus', function () {
                        $(this).removeClass('has-error');
                    });
                hasErr = true;
            } else {
                values[id] = value;
            }
        });

        !hasErr && (values.password = sha1.hex(values.password));

        return hasErr ? false : values;

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