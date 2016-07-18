# gulp-jqtmpl

**Compile jQuery templates with Gulp**

## Installation

<code>npm install -save gulp-jqtmpl</code>

## Usage

```js
    var gulp = require('gulp');
    var compile = require('gulp-jqtmpl');

    gulp.task('CompileTemplates', function () {
        gulp.src('./templates.html')
            .pipe(compile({/* options */}))
            .pipe(gulp.dest('./templates.js'));

    });
```

## Compile separate templates file into one file

Use [gulp-concat](https://github.com/contra/gulp-concat) to combine all of your template files before compiling.


```js
    var gulp = require('gulp');
    var compile = require('gulp-jqtmpl');
    var concat = require('gulp-concat');

    gulp.task('CompileTemplates', function () {
        gulp.src('./templates/*.html')
            .pipe(concat('combinedTemplates.html'))
            .pipe(compile({/* options */}))
            .pipe(gulp.dest('./templates.js'));

    });
```

## Options

* <code>map</code> [function(object): string] - This function takes an object containing the name of the template and the template function and returns the string written to the file. By default this function uses the exports object

```js
        exports['<template_name>'] = <template_function>;
```

* <code>prefix</code> [string] - A string to start the file with. Default is null.

* <code>suffix</code> [string] - A string to end the file with. Default is null.

## License

**gulp-jqtmpl** is Copyright (c) 2015 Ryan Turnquist and licensed under the [MIT license](http://opensource.org/licenses/MIT). All rights not explicitly granted in the MIT license are reserved.
