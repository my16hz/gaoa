/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_SRC = {
    coreCss: 'static/core/css/',
    pageCss: 'static/pages/'
};
var DIR_DEST = 'public/css';

module.exports = function (gulp, plugins) {
    gulp.task('cleanCss', function () {
        return gulp
            .src(DIR_DEST + 'main.css', {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('buildCss', ['cleanCss'], function () {
        return gulp
            .src([
                DIR_SRC.coreCss + '*.css',
                DIR_SRC.pageCss + '**/style.css'
            ])
            .pipe(plugins.concat('main.css'))
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest(DIR_DEST));
    });
};