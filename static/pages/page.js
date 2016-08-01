/**
 * Build Date: 07-09-2016
 * Copyright (c): Naver China Co.,LTD
 * Author: nhn
 */
var LHSBasicPage = {
    el: '#main_panel',
    run: $.noop,
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

        return this;
    },
    /**
     * Send request to given server path.
     * @param options { type, url, data/validator, done }
     * @returns {LHSBasicPage}
     */
    sendRequest: function (options) {
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
                self._showXHRError(rs.message);
            }
        }).fail(function (xhr) {
            self._showXHRError('请求失败:' + xhr.responseText);
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
    _showXHRError: function () {

        return this;
    }
};