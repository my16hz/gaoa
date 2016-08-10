/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/', controller.pageLogin)
        .get('/login', controller.pageLogin)
        .post('/auth', controller.doLogin)
        .post('/logout', controller.doLogout);
};