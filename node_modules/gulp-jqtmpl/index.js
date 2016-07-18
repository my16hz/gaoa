'use strict'

var Compiler = require('jqtmpl-compiler');
var through = require('through2');
var extend = require('extend');

function map(template) {
    return "exports['" + template.name + "'] = " + template.template + ';';
}

var defaults = {
    map: map,
    prefix: null,
    suffix: null
};

module.exports = function (opts) {
    var compiler,
        lastFile,
        templates = null;

    opts = extend({}, defaults, opts);
    compiler = new Compiler(opts);

    if (typeof opts.map !== 'function') {
        opts.map = map;
    }

    function buffer(file, enc, cb) {
        templates = compiler.extractScripts(file.contents);
        lastFile = file;
        cb();
    }

    function flush(cb) {
        var content = templates.map(opts.map).join('\n'),
            resultFile = lastFile.clone({ contents: false });

        if (typeof opts.prefix === 'string') {
            content = opts.prefix + content;
        }
        if (typeof opts.suffix === 'string') {
            content += opts.suffix;
        }

        resultFile.contents = new Buffer(content);

        this.push(resultFile);
        cb();
    }

    return through.obj(buffer, flush);
};

module.exports.defaults = defaults;
