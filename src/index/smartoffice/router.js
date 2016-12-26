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
        .post('/smartoffice/sendmsg/export', controller.exportSendMsg)
        .get('/smartoffice/sendmsg/exportlist', controller.exportSendMsgList)

        .get('/smartoffice/recvmsg/list', controller.getRecvMsg)
        .post('/smartoffice/recvmsg/save', controller.saveRecvMsg)
        .delete('/smartoffice/recvmsg/delete', controller.deleteRecvMsg)
        .post('/smartoffice/recvmsg/commit', controller.commitRecvMsg)
        .post('/smartoffice/recvmsg/export', controller.exportRecvMsg)
        .get('/smartoffice/recvmsg/exportlist', controller.exportRecvMsglist)

        .post('/smartoffice/notify/send', controller.sendNotify)

        .get('/smartoffice/template', controller.getTemplate)
        .get('/smartoffice/notify/list', controller.getNotifyList)
        .get('/smartoffice/message/list', controller.getMessageList)
        .post('/smartoffice/message/save', controller.saveMessage)
        .delete('/smartoffice/message/delete', controller.deleteMessage)
        .get('/smartoffice/message/exportlist', controller.exportMessagelist)

        .get('/smartoffice/sendmsg/unapproved', controller.getUnapprovedSendMsg)
        .get('/smartoffice/recvmsg/unapproved', controller.getUnapprovedRecvMsg)
        .post('/smartoffice/sendmsg/comment', controller.commentSendMsg)
        .post('/smartoffice/recvmsg/comment', controller.commentRecvMsg)
};