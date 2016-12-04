/**
 * Build Date: 04-21-2016
 * Copyright (c): Naver China Co.,LTD
 * Author: shiv
 */
var DIR_SRC = {
    coreCss: 'static/core/css/',
    coreImgs: 'static/core/imgs/',
    coreJs: 'static/core/js/',
    coreCfg: 'static/core/cfg/',
    pages: 'static/pages/'
};

module.exports = function (gulp) {
    gulp.task('watch', function () {
        gulp.watch([
            DIR_SRC.coreCss + '*.css',
            DIR_SRC.pages + '**/*.css'
        ], ['buildCss']);

        gulp.watch([
            DIR_SRC.coreImgs + '*'
        ], ['copyPics']);

        gulp.watch([
            DIR_SRC.coreCfg + '*'
        ], ['copyConfig']);

        gulp.watch([
            DIR_SRC.coreCss + '*.js',
            DIR_SRC.pages + '**/*.js',
            DIR_SRC.pages + '**/*.html'
        ], [
            'buildLoginJs',
            'buildModulesJs'
        ]);
    });
};