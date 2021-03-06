/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_SRC = {
    coreJs: 'static/core/js/',
    pages: 'static/pages/',
    editor: 'static/editor/',
    loginPage: 'static/pages/login/',
    indexPage: 'static/pages/index/'
};
var DIR_DEST = 'public/js/';

var SUB_PAGES = {
    badinfo: ['aggregate', 'record', 'RTXDirective', 'RTXReport'],
    publicvoice: [
        'alert', 'analyze', 'dailyreport', 'dailycreate', 'dispose', 'comment',
        'examine&approve', 'dispose&approve', 'feedback', 'guide', 'notify', 'record', 'search'
    ],
    smartoffice: ['allmessages', 'examine&approve', 'sendmessage', 'recvmessage', 'notifymessage'],
    socialvoice: ['dispose', 'record', 'report', 'statistics'],
    sysmanage: ['members', 'password', 'configure'],
    gawebsite: ['record']
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
                DIR_SRC.coreJs + 'jquery-1.12.4.js',
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
            name = '_subpage_' + [module, page].join('.') + '.js';

            TASKS_SUBPAGES.push(name);

            gulp.task(name, ['cleanJs'], function () {
                return gulp
                    .src(path + '/main.js')
                    .pipe(plugins.inject(
                        gulp.src(path + '/jqtmpl.html')
                            .pipe(plugins.jqtmpl({
                                map: function (tmpl) {
                                    return 'var jqtmpl =' + tmpl.template + ';';
                                }
                            })),
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
        var dependencies = [
            DIR_SRC.coreJs + 'es5-shim-4.5.9.js',
            DIR_SRC.coreJs + 'jquery-1.12.4.js',
            DIR_SRC.coreJs + 'bootstrap-3.3.5.js',
            DIR_SRC.coreJs + 'moment-2.14.1.js',
            DIR_SRC.coreJs + 'moment-zh-CN-2.14.1.js',
            DIR_SRC.coreJs + 'bootstrap-table-1.11.0.js',
            DIR_SRC.coreJs + 'bootstrap-table-zh-CN-1.11.0.js',
            DIR_SRC.coreJs + 'bootbox-4.4.0.js'

        ];

        if ('sysmanage' == module) {
            dependencies.push(DIR_SRC.coreJs + 'jshashes-1.0.5.js');
        } else {
            dependencies.push(
                DIR_SRC.coreJs + 'jquery.ajaxfileupload.js',
                DIR_SRC.coreJs + 'jquery.template-1.4.4.js',
                DIR_SRC.coreJs + 'jstree-3.3.2.js',
                DIR_SRC.coreJs + 'bootstrap-datetimepicker-4.17.42.js',
                DIR_SRC.coreJs + 'uuid-1.4.7.js',
                DIR_SRC.editor + 'config.js',
                DIR_SRC.editor + 'main.js',
                DIR_SRC.editor + 'lang/zh-cn.js'
            );
        }

        dependencies.push(
            DIR_SRC.indexPage + module + '/start.js',
            DIR_SRC.pages + 'page.js',
            DIR_DEST + '_subpage_' + module + '*.js',
            DIR_SRC.indexPage + module + '/end.js'
        );

        TASKS_MODULES.push(name = module + '.js');

        gulp.task(name, TASKS_SUBPAGES, function () {
            var mainjs = gulp
                .src(dependencies)
                .pipe(plugins.concat(name));

            if (!isdebug) {
                mainjs.pipe(plugins.uglify());
            }

            return mainjs.pipe(gulp.dest(DIR_DEST));
        });
    });

    gulp.task('buildModulesJs', TASKS_MODULES, function () {
        return gulp;
    });
};