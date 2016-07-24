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
            name = name.split(/\s+/);

            $(self.el).on(name[0], name[1], function (evt) {
                self[handler].call(self, $(this), evt);
            });
        });
    },
    /**
     * Send request to given server path.
     * @param options { type, url, data, done }
     * @returns {LHSBasicPage}
     */
    sendRequest: function (options) {
        var self = this;

        if (this._validator && !(options.data = this._validator())) {
            return;
        }

        $.ajax({
            type: options.type,
            url: options.url,
            data: options.data,
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                self._removeLoading();
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
    },
    _validator: null,
    _showLoading: function () {
    },
    _removeLoading: function () {
    },
    _showXHRError: function () {
    }
};