/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_SRC = {
    imgs: 'static/core/imgs/',
    fonts: 'static/core/css/fonts/',
    editor: 'static/editor/'
};
var DIR_DEST = {
    imgs: 'public/css/imgs/',
    fonts: 'public/css/fonts/',
    editor: 'public/editor/'
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

    gulp.task('cleanEditor', function () {
        return gulp
            .src(DIR_DEST.editor, {read: false})
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

    gulp.task('copyEditorJS', ['cleanEditor'], function () {
        return gulp
            .src(DIR_SRC.editor + 'dialogs/**/*.js')
            .pipe(plugins.uglify())
            .pipe(gulp.dest(DIR_DEST.editor + 'dialogs'));
    });

    gulp.task('copyEditorCss', ['cleanEditor'], function () {
        return gulp
            .src(DIR_SRC.editor + '**/*.css')
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest(DIR_DEST.editor));
    });

    gulp.task('copyEditor', ['copyEditorJS', 'copyEditorCss'], function () {
        return gulp
            .src([
                DIR_SRC.editor + '**/*.png',
                DIR_SRC.editor + '**/*.gif'
            ])
            .pipe(gulp.dest(DIR_DEST.editor));
    });
};