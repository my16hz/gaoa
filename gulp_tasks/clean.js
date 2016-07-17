/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var DIR_DEST = 'public/';

module.exports = function (gulp, plugins) {
    gulp.task('windUp', ['buildModulsJs'], function () {
        return gulp
            .src(DIR_DEST + '**/_*', {read: false})
            .pipe(plugins.clean({force: true}));
    })
};