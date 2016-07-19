/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// set it as false before publishing.
var IS_DEBUG = false;
var tasks = [
    'buildCss',
    'buildLoginJs', 'buildModulsJs',
    'copyPics', 'copyFonts',
    'windUp'
];

require('./gulp_tasks/css')(gulp, plugins);
require('./gulp_tasks/scripts')(gulp, plugins, IS_DEBUG);
require('./gulp_tasks/files')(gulp, plugins);
require('./gulp_tasks/clean')(gulp, plugins);
require('./gulp_tasks/watch')(gulp);

IS_DEBUG && tasks.push('watch');

gulp.task('default', tasks);