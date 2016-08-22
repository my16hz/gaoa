/**
 * Build Date: 07-09-2016
 * Copyright (c): Naver China Co.,LTD
 * Author: nhn
 */
var LHSBasicPage = {
    el: '#main_panel',
    run: $.noop,
    reset: $.noop,
    events: {},
    initDependencies: function () {
        var self = this;

        this.$el = $(this.el);

        this.$ = function (selector) {
            return this.$el.find(selector);
        };

        $.each(this.events, function (name, handler) {
            var evtkey = name.split(/\s+/)[0];

            $(self.el).on(evtkey, $.trim(name.replace(evtkey, '')), function (evt) {
                self[handler].call(self, $(this), evt);
            });
        });

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

        bootbox.setDefaults({size: 'small', locale: 'zh_CN'});

        return this;
    },

    /**
     * Send request to given server path.
     * @param options { type, url, data/validator, done }
     * @returns {LHSBasicPage}
     */
    _sendRequest: function (options) {
        var self = this;

        if (options.validator && !(options.data = options.validator())) {
            return;
        }

        $.ajax({
            type: options.type,
            url: options.url,
            data: options.data,
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                self._showLoading();
            }
        }).then(function (rs) {
            if (rs.success) {
                options.done(rs.data);
            } else {
                self._showXHRMessage(rs.message, 'danger');
            }
        }).fail(function (xhr) {
            self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
        }).always(function () {
            self._removeLoading();
        });

        return this;
    },

    _showLoading: function () {

        return this;
    },
    _removeLoading: function () {

        return this;
    },

    _showXHRMessage: function (msg, type) {
        var pid = 'lhs' + type + 'panel';
        var panel = $('#' + pid);

        if (!panel.length) {
            panel = $('<div id="' + pid + '" class="alert alert-' + type + '" data-dismiss="alert">' +
                '<button type="button" class="close">' +
                '<span>&times;</span>' +
                '</button></div>').prependTo(this.$el);
            panel.alert();
            panel.on('closed.bs.alert', function () {
                panel.remove();
            });
        }

        panel.append($('<span></span>').text(err));

        return this;
    },

    _getFormControlValues: function (jqform) {
        var values = {};
        var value, name;

        $.each(jqform.serializeArray(), function () {
            name = this.name;
            value = values[name];

            if (!value) {
                values[name] = this.value;
            } else if ($.isArray(value)) {
                values[name].push(this.value);
            } else {
                values[name] = [value, this.value];
            }
        });

        return values;
    },
    _clearFormControlValues: function (jqform) {
        $.each(jqform.serializeArray(), function () {
            $('[name="' + this.name + '"]', jqform).each(function (elem) {
                elem = $(this);

                if (elem.is('input[type="text"]') || elem.is('input[type="password"]') || elem.is('textarea')) {
                    elem.val('');
                } else if (elem.is('input[type="checkbox"]')) {
                    elem.removeAttr('checked');
                } else if (elem.is('input[type="radio"]')) {
                    if (0 == index) {
                        elem.attr('checked', 'checked');
                    } else {
                        elem.removeAttr('checked');
                    }
                } else if (elem.is('select')) {
                    elem
                        .children('option:eq(0)').attr('selected', 'selected')
                        .siblings().removeAttr('selected');
                }
            });
        });

        return this;
    },
    _setFormControlValues: function (jqform, values) {
        $.each(values, function (name, val) {
            $('[name="' + name + '"]', jqform).each(function (jqElem) {
                jqElem = $(this);

                if (jqElem.is('input[type="radio"]')) {
                    jqElem.find('[value="' + val + '"]').attr('checked', 'checked');
                } else if (jqElem.is('input[type="checkbox"]')) {
                    $.each(val, function (i, v) {
                        jqElem.find('[value="' + v + '"]').attr('checked', 'checked');
                    });
                } else {
                    jqElem.val(val);
                }
            });
        });

        return this;
    }
};