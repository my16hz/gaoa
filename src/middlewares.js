/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var bodyParser = require('body-parser');
var compression = require('compression');
var config = require('config');
var cookieParser = require('cookie-parser');
var express = require('express');
var session = require('express-session');

var PATH_ROOT = config.root;
var package = require(PATH_ROOT + '/package.json');

module.exports = function (app) {
    // Compression middleware (must be placed before express.static)
    app.use(compression({threshold: 512}));

    // static source
    app.use(express.static(PATH_ROOT + '/public'));
    app.use('/editor', express.static(PATH_ROOT + '/upload/ueditor'));
    app.use('/msgfile', express.static(PATH_ROOT + '/upload/msgfile'));
    app.use('/sample', express.static(PATH_ROOT + '/sample'));

    // view engine setup
    app.set('views', PATH_ROOT + '/views');
    app.set('view engine', 'ejs');

    // json request body parser
    app.use(bodyParser.json({limit: '20mb'}));
    app.use(bodyParser.urlencoded({extended: true}));

    // cookie parser
    app.use(cookieParser());

    // session support
    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: package.name,
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: config.session.timeout
        }
    }));
};
