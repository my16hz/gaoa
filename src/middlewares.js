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
var package = require(config.root + '/package.json');
var session = require('express-session');

module.exports = function (app) {
    // Compression middleware (must be placed before express.static)
    app.use(compression({threshold: 512}));

    // static source
    app.use(express.static(config.root + '/public'));
    app.use(express.static(config.root + '/upload/ueditor'));

    // view engine setup
    app.set('views', config.root + '/views');
    app.set('view engine', 'ejs');

    // json request body parser
    app.use(bodyParser.json());
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
