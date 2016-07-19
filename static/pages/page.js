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
        this.$el = $(this.el);
        // runs queries scoped within the view's element
        this.$ = function (selector) {
            return this.$el.find(selector);
        };
        // binding all events in events list on root element of page.
        $.each(this.events, $.proxy(function (name, handler) {
            name = name.split(/\s+/);

            $(this.el).on(name[0], name[1], function (evt) {
                this[handler].call(this, $(this), evt);
            });
        }, this));

        return this;
    },
    ajax: function (config, callback) {
        $.ajax(config)

        return this;
    }
};