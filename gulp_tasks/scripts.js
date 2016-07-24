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

var SUB_PAGES = {
    badinfo: ['aggregate', 'record', 'RTXDirective'],
    publicvoice: ['dailyreport', 'dispose', 'examine&approve', 'feedback', 'guide', 'notify', 'record'],
    smartoffice: ['allmessages', 'examine&approve', 'sendmessage'],
    socialvoice: ['dispose', 'record'],
    sysmanage: ['members', 'password']
};

var TASKS_SUBPAGES = [];
var TASKS_MODULES = [];

module.exports = function (gulp, plugins, isdebug) {
    gulp.task('cleanJs', function () {
        return gulp.src(DIR_DEST + '*.js', {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('buildLoginJs', ['cleanJs'], function () {
        var mainjs = gulp
            .src([
                DIR_SRC.coreJs + 'jquery-2.2.4.js',
                DIR_SRC.coreJs + 'bootstrap-3.3.5.js',
                DIR_SRC.coreJs + 'jshashes-1.0.5.js',
                DIR_SRC.pages + 'page.js',
                DIR_SRC.loginPage + 'main.js'
            ])
            .pipe(plugins.concat('login.js'));

        if (!isdebug) {
            mainjs.pipe(plugins.uglify());
        }

        return mainjs.pipe(gulp.dest(DIR_DEST));
    });

    Object.keys(SUB_PAGES).forEach(function (module) {
        SUB_PAGES[module].forEach(function (page, name, path) {
            path = DIR_SRC.indexPage + [module, page].join('/');
            name = '_subpage_' + [module, page].join('.') + '.js'
            TASKS_SUBPAGES.push(name);

            gulp.task(name, ['cleanJs'], function () {
                return gulp
                    .src(path + '/main.js')
                    .pipe(plugins.inject(
                        // inject the compiled templates.
                        gulp.src(path + '/jqtmpl.html')
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
                    .pipe(plugins.concat(name))
                    .pipe(gulp.dest(DIR_DEST));
            });
        });
    });

    Object.keys(SUB_PAGES).forEach(function (module, name) {
        TASKS_MODULES.push(name = module + '.js');

        gulp.task(name, TASKS_SUBPAGES, function () {
            var mainjs = gulp
                .src([
                    DIR_SRC.coreJs + 'jquery-2.2.4.js',
                    DIR_SRC.coreJs + 'bootstrap-3.3.5.js',
                    DIR_SRC.indexPage + module + '/start.js',
                    DIR_SRC.pages + 'page.js',
                    DIR_DEST + '_subpage_' + module + '*.js',
                    DIR_SRC.indexPage + module + '/end.js'
                ])
                .pipe(plugins.concat(name));

            if (!isdebug) {
                mainjs.pipe(plugins.uglify());
            }

            return mainjs.pipe(gulp.dest(DIR_DEST));
        });
    });

    gulp.task('buildModulsJs', TASKS_MODULES);
};