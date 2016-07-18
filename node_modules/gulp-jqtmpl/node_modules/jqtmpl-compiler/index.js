'use strict'

var jqTmpl = require('./lib/jquery.tmpl.core');
var $ = require('cheerio');
var htmlclean = require('htmlclean');
var extend = require('extend');

var rxNestedTemplates = /{{tmpl(\([^)]*\))?\s+(?:"#?(.+?)"|'#?(.+?)'|([A-Za-z$_(].*?))\s*}}/g,
    rxExcludedScripts = /^text\/(javascript)$/i;

function nestedResolver(name) {
    return 'exports[' + name + ']';
}

function nameResolver(script) {
    return script.attr('id');
}

function scriptFilter(script) {
    var type = script.attr('type');
    return !!type && !rxExcludedScripts.test(type);
}

function preProcess(source) {
    return source;
}

function postProcess(template) {
    var base = Function.prototype.toString;

    template.toString = function () {
        return base.call(this).replace('function anonymous(', 'function (').replace(/\n+/g, '');
    };

    return template;
}

Compiler.defaults = {
    cleanSource: true,
    scriptFilter: scriptFilter,
    nameResolver: nameResolver,
    nestedResolver: nestedResolver,
    preProcess: preProcess,
    postProcess: postProcess
};

function Compiler(opts) {
    this.opts = extend({}, Compiler.defaults, opts);
}

Compiler.prototype._clean = function (clean, source) {
    var result = source;

    if (typeof source !== 'string') {
        throw new TypeError('source was not a string');
    } else if (typeof clean === 'function') {
        result = clean(source);

        if (typeof result !== 'string') {
            throw new TypeError('clean function was expected to return a string but returned ' + result);
        }
    }

    return result;
};

Compiler.prototype._filterScripts = function (scriptFilter, scripts) {
    var result = scripts;

    if (!Array.isArray(scripts)) {
        throw new TypeError('scripts was not an array');
    } else if (typeof scriptFilter === 'function') {
        result = scripts.filter(scriptFilter);
    }

    return result;
};

Compiler.prototype._postProcess = function (postProcess, template) {
    var result = template;

    if (typeof template !== 'function') {
        throw new TypeError('template was not a function');
    } else if (typeof postProcess === 'function') {
        result = postProcess(template);

        if (typeof result !== 'function') {
            throw new TypeError('postProcess function was expected to return a function but returned ' + result);
        }
    }

    return result;
};

Compiler.prototype._preProcess = function (preProcess, source) {
    var result = source;

    if (typeof source !== 'string') {
        throw new TypeError('source was not a string');
    } else if (typeof preProcess === 'function') {
        result = preProcess(source);

        if (typeof result !== 'string') {
            throw new TypeError('preProcess function was expected to return a string but returned ' + result);
        }
    }

    return result;
};

Compiler.prototype._resolveNestedTemplates = function (nestedResolver, source) {
    var result = source;

    if (typeof source !== 'string') {
        throw new TypeError('source was not a string');
    } else if (typeof nestedResolver === 'function') {
        result = source.replace(rxNestedTemplates, function (m, data, name1, name2, name3) {
            var name;

            if (name1 != null) {
                name = '"' + name1 + '"';
            } else if (name2 != null) {
                name = "'" + name2 + "'";
            } else {
                name = name3;
            }

            name = nestedResolver(name);

            if (typeof name !== 'string') {
                return m;
            }
            return '{{tmpl' + (data || '') + ' ' + name + '}}';
        });
    }

    return result;
};

Compiler.prototype._resolveTemplateName = function (nameResolver, element, getFallback) {
    var result;

    if (typeof nameResolver === 'function') {
        result = nameResolver(element);
    }
    if (typeof result !== 'string'){
        result = getFallback()
    }

    return result;
};


Compiler.prototype.compile = function (source, opts) {
    if (typeof source !== 'string') {
        throw new TypeError('ArgumentError - source must be a string')
    }

    opts = extend({}, Compiler.defaults, this.opts, opts);

    source = this._clean(opts.cleanSource ? htmlclean : null, source);
    source = this._preProcess(opts.preProcess, source);
    source = this._resolveNestedTemplates(opts.nestedResolver, source);

    return this._postProcess(opts.postProcess, jqTmpl.template(source));
};

Compiler.prototype.extractScripts = function (html, opts) {
    var _this = this,
        scripts,
        unnamedCount = 0;

    if (typeof html !== 'string') {
        if (html && typeof html.toString === 'function') {
            html = html.toString();
        } else {
            throw new TypeError('ArgumentError - html must be a string or have a toString method');
        }
    }

    opts = extend({}, Compiler.defaults, this.opts, opts);
    scripts = $.load(html)('script').map(function () {
        return $(this);
    }).get();

    return this._filterScripts(opts.scriptFilter, scripts).map(function (script) {
        return {
            name: _this._resolveTemplateName(opts.nameResolver, script, getFallback),
            template: _this.compile(script.html(), opts)
        };
    }).sort(function (a, b) {
        return a.name > b.name ? 1 :
               a.name < b.name ? -1 : 0;
    });


    function getFallback() {
        return 'Template_' + (++unnamedCount);
    }
};

module.exports = Compiler;
