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

        $.fn.bootstrapTable && $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

        window.bootbox && bootbox.setDefaults({size: 'small', locale: 'zh_CN'});

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

        panel.append($('<span></span>').text(msg));

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
    },

    _createEditor: function (panel) {
        var ueid = 'lhsUeditor' + $('.edui-container').length;

        $(panel).empty().append(
            $('<script type="text/plain"></script>')
                .attr('id', ueid)
                .css({
                    width: '100%',
                    height: 300
                })
        ).width(function () {
            return $(this).parent().width;
        });

        return UM.getEditor(ueid);
    },
    _createTable: function (panel, url, columns) {
        var self = this;
        var dataTable = $(panel).empty().append(
            $('<table></table>').addClass('table table-striped table-hover table-condensed')
        ).children('table');

        dataTable.bootstrapTable({
            method: 'get',
            url: url,
            cache: false,
            ajaxOptions: {
                beforeSend: function () {
                    self._showLoading();
                },
                complete: function () {
                    self._removeLoading();
                }
            },
            onLoadError: function (xhr) {
                self._showXHRMessage('请求失败:' + xhr.responseText, 'danger');
            },
            columns: columns
        });

        return {
            origin: dataTable,
            shrink: function () {
                $.each(columns, function (i, cfg) {
                    if (!cfg.alwaysDisplay) {
                        dataTable.bootstrapTable('hideColumn', cfg.field);
                    }
                });

                $(panel)
                    .attr('class', 'col-xs-2')
                    .next()
                    .removeClass('hide');

                return this;
            },
            expand: function () {
                $.each(columns, function (i, cfg) {
                    dataTable.bootstrapTable('showColumn', cfg.field);
                });

                $(panel)
                    .attr('class', 'col-md-12')
                    .next()
                    .addClass('hide');

                return this;
            },
            refresh: function () {
                dataTable.bootstrapTable('refresh');

                return this;
            },
            getSelected: function (field) {
                var selected = dataTable.bootstrapTable('getSelections');
                var values = [];

                field = field || 'id';

                selected.length && $(selected).each(function (n, val) {
                    values.push(val[field]);
                });

                return values;
            },
            filterBy: function (data) {
                dataTable.bootstrapTable('filterBy', data);
            },
            showDataWrapper: function () {
                $(panel)
                    .parent()
                    .removeClass('hide')
                    .siblings('.data-wrapper')
                    .addClass('hide');

                return this;
            },
            hidedDataWrapper: function () {
                $(panel).parent().addClass('hide');

                return this;
            }
        };
    },
    _createUploader: function (input, action, complete) {
        var self = this;

        $(input).ajaxfileupload({
            action: action,
            onStart: function () {
                self._showLoading();
            },
            onCancel: function () {
                self._removeLoading();
            },
            onComplete: function () {
                self._removeLoading();
                $.isFunction(complete) && complete.call(self);
                self._showXHRMessage('上传成功。', 'info');
            }
        });

        return this;
    },
    _createTimepicker: function (input, format, defVal) {
        var picker = $(input).datetimepicker({
            format: format || 'YYYY-MM-DD'
        });
        var self = this;

        return {
            onChange: function (cb) {
                picker.on('dp.change', $.proxy(cb, self));
            }
        };
    },

    _showModal: function (jqmodal, table) {
        $(jqmodal).removeClass('hide')
            .siblings()
            .addClass('hide');
        table.shrink();

        return this;
    },
    _closeModal: function (jqmodal, table) {
        $(jqmodal).addClass('hide');
        table.expand();

        return this;
    }
};