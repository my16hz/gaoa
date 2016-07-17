/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_SRC = {
    coreJs: 'static/core/js/',
    pages: 'static/pages/',
    loginPage: 'static/pages/login/',
    indexPage: 'static/pages/index/'
};
var DIR_DEST = 'public/js/';
var SUB_PAGES = [
    'badinfo/aggregate',
    'badinfo/record',
    'badinfo/RTXDirective',
    'publicvoice/dailyreport',
    'publicvoice/dispose',
    'publicvoice/examine&approve',
    'publicvoice/feedback',
    'publicvoice/guide',
    'publicvoice/notify',
    'publicvoice/record',
    'smartoffice/allmessages',
    'smartoffice/examine&approve',
    'smartoffice/sendmessage',
    'socialvoice/dispose',
    'socialvoice/record',
    'sysmanage/members',
    'sysmanage/password'
];
var INDEXJS_DEPENDENCIES = [];

module.exports = function (gulp, plugins, isdebug) {
    gulp.task('cleanJs', function () {
        return gulp.src(DIR_DEST + '*.js', {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('buildLoginJs', ['cleanJs'], function () {
        var mainjs = gulp
            .src([
                DIR_SRC.coreJs + 'bootstrap-3.3.5.js',
                DIR_SRC.coreJs + 'jquery-3.0.0.js',
                DIR_SRC.pages + '*.js',
                DIR_SRC.loginPage + 'main.js'
            ])
            .pipe(plugins.concat('login.js'));

        if (!isdebug) {
            mainjs.pipe(plugins.uglify());
        }

        return mainjs.pipe(gulp.dest(DIR_DEST));
    });

    SUB_PAGES.forEach(function (name, task) {
        task = '_subpage_' + name;
        INDEXJS_DEPENDENCIES.push(task);

        gulp.task(task, ['cleanJs'], function () {
            return gulp
                .src(DIR_SRC.indexPage + name + '/main.js')
                .pipe(plugins.inject(
                    // inject the compiled templates.
                    gulp.src(DIR_SRC.indexPage + name + '/jqtmpl.html')
                        .pipe(plugins.jqtmpl({
                            map: function (tmpl) {
                                return 'var jqtmpl =' + tmpl.template + ';';
                            }
                        })),
                    // inject options.
                    {
                        starttag: '/*inject:jqtmpl:{{ext}}*/',
                        endtag: '/*endinject*/',
                        removeTags: true,
                        transform: function (path, file) {
                            return file.contents.toString('utf8');
                        }
                    }
                ))
                .pipe(plugins.concat('_subpage_' + name + '.js'))
                .pipe(gulp.dest(DIR_DEST));
        });
    });

    gulp.task('buildIndexJs', INDEXJS_DEPENDENCIES, function () {
        var mainjs = gulp
            .src([
                DIR_SRC.coreJs + '*.js',
                DIR_SRC.pages + 'page.js',
                DIR_DEST + '_subpage_*.js',
                DIR_SRC.pages + '**/routes.js'
            ])
            .pipe(plugins.concat('main.js'));

        if (!isdebug) {
            mainjs.pipe(plugins.uglify());
        }

        return mainjs.pipe(gulp.dest(DIR_DEST));
    });
};