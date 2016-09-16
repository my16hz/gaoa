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
        .post('/smartoffice/sendmsg/save', controller.saveSendMsg)
        .delete('/smartoffice/sendmsg/delete', controller.deleteSendMsg)
        .post('/smartoffice/sendmsg/commit', controller.commitSendMsg)
        .get('/smartoffice/sendmsg/template', controller.getSendMsgTemplate)
};