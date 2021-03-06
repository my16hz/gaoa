/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/gawebsite', controller.pageGAWebsite)

        // record page
        .get('/gawebsite/list', controller.getWebsite)
        .post('/gawebsite/save', controller.saveWebsite)
        .delete('/gawebsite/delete', controller.deleteWebsite)
};