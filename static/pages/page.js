/**
 * Build Date: 07-09-2016
 * Copyright (c): Naver China Co.,LTD
 * Author: nhn
 */
var LHSBasicPage = {
    el: '#main_panel',
    run: $.noop,
    events: {},
    __tableCaches__: [],
    __editorCaches__: [],
    __timepickersCaches__: [],
    initDependencies: function () {
        var self = this.reset();

        this.$el = $(this.el);

        this.$ = function (selector) {
            return this.$el.find(selector);
        };

        $.each(this.events, function (name, handler) {
            var evtkey = name.split(/\s+/)[0];

            $($.trim(name.replace(evtkey, '')), self.el)
                .unbind(evtkey)
                .bind(evtkey, function (evt) {
                    self[handler].call(self, $(this), evt);
                });
        });

        $.fn.bootstrapTable && $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

        window.bootbox && bootbox.setDefaults({size: 'small', locale: 'zh_CN'});

        return this;
    },
    reset: function () {
        $.each(this.__tableCaches__, function () {
            this.bootstrapTable('destroy');
        });

        $.each(this.__editorCaches__, function () {
            this.id && this.destroy();
        });

        this.__tableCaches__.length = 0;
        this.__editorCaches__.length = 0;

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
            $('[name="' + name + '"]', jqform).each(function (index, jqElem) {
                jqElem = $(this);

                if (jqElem.is('input[type="radio"]')) {
                    val == jqElem.val() && jqElem.prop('checked', true);
                } else if (jqElem.is('input[type="checkbox"]')) {
                    ~$.inArray(jqElem.val(), val) && jqElem.prop('checked', true);
                } else {
                    $.isArray(val) ?
                        jqElem.val(val[index] || '') :
                        jqElem.val(val);
                }
            });
        });

        return this;
    },

    _createEditor: function (panel) {
        var ueid = 'lhsUeditor' + $('.edui-container').length;
        var editor = null;

        $(panel).append(
            $('<script type="text/plain"></script>')
                .attr('id', ueid)
                .css({
                    width: '100%',
                    height: 300
                })
        ).width(function () {
            return $(this).parent().width;
        });

        editor = UM.getEditor(ueid);

        this.__editorCaches__.push(editor);

        return editor;
    },
    _createTable: function (panel, url, columns) {
        var self = this;
        var dataTable = $(panel).append(
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
            columns: columns,
            pagination: true
        });

        this.__tableCaches__.push(dataTable);

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
            refresh: function (opts) {
                dataTable.bootstrapTable('refresh', $.extend({
                    silent: true
                }, opts));

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
            getOriginalSelected: function () {
                var selected = dataTable.bootstrapTable('getSelections');
                var values = [];

                selected.length && $(selected).each(function (n, val) {
                    values.push(val);
                });

                return values;
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
            },
            destroy: function () {
                dataTable.bootstrapTable('destroy');
            }
        };
    },
    _createUploader: function (input, action, complete) {
        var self = this;

        $(input).ajaxfileupload({
            action: action,
            validate_extensions: false,
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
    _createTimepicker: function (input, format, defval) {
        var picker = $(input).datetimepicker({
            format: format || 'YYYY-MM-DD',
            useCurrent: defval || true/*,
            locale: 'zh_CN'*/
        });

        defval && picker.val(defval);

        return {
            value: function () {
                return picker.val();
            },
            getTime: function () {
                return moment(picker.val(), format).getTime();
            },
            onChange: function (cb) {
                picker.on('dp.change', $.proxy(cb, self));
            }
        };
    },
    _createSelect2: function (select) {
        var placeholder = $(select).attr('placeholder');
        var selector = $(select).select2();

        return {
            getSelected: function () {
                return selector.val();
            },
            clear: function () {
                selector.val(placeholder || '').trigger("change");
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