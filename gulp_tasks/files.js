/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_SRC = {
    imgs: 'static/core/imgs/',
    fonts: 'static/core/css/fonts/',
    config: 'static/core/cfg/'
};
var DIR_DEST = {
    imgs: 'public/css/imgs/',
    fonts: 'public/css/fonts',
    config: 'public/cfg'
};

module.exports = function (gulp, plugins) {
    gulp.task('cleanPics', function () {
        return gulp
            .src(DIR_DEST.imgs, {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('cleanFonts', function () {
        return gulp
            .src(DIR_DEST.fonts, {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('cleanConfig', function () {
        return gulp
            .src(DIR_DEST.config, {read: false})
            .pipe(plugins.clean({force: true}));
    });

    gulp.task('copyPics', ['cleanPics'], function () {
        return gulp
            .src(DIR_SRC.imgs + '*')
            .pipe(gulp.dest(DIR_DEST.imgs));
    });

    gulp.task('copyFonts', ['cleanFonts'], function () {
        return gulp
            .src(DIR_SRC.fonts + '*')
            .pipe(gulp.dest(DIR_DEST.fonts));
    });

    gulp.task('copyConfig', ['cleanConfig'], function () {
        return gulp
            .src(DIR_SRC.config + '*')
            .pipe(gulp.dest(DIR_DEST.config));
    });
};