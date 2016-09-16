/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/smartoffice', controller.pageSmartOffice)
        .get('/smartoffice/sendmsg/list', controller.getSendMsg)
        .get('/smartoffice/sendmsg/save', controller.saveSendMsg)
};