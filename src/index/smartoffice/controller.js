/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var menukey = require('config').session.menukey;
var userkey = require('config').session.userkey;
var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pageSmartOffice: pageSmartOffice,
    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg,
    deleteSendMsg: deleteSendMsg,
    commitSendMsg: commitSendMsg,
    getSendMsgTemplate: getSendMsgTemplate
};

function pageSmartOffice (req, res) {
    res.render('index/smartoffice', {
        menus: req.session[menukey]
    });
}

function getSendMsg (req, res) {
    service.getSendMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveSendMsg (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title' : obj['title'],
        'major_department' : obj['major_department'],
        'cc_department' : obj['cc_department'],
        'message_id' : obj['message_id'],
        'secret_level' : obj['secret_level'],
        'urgent_level' : obj['urgent_level'],
        'dispose_user' : obj['dispose_user'],
        'draft_user' : obj['draft_user'],
        'copies' : obj['copies'],
        'content' : obj['content'],
        'keyword' : obj['keyword'],
        'sign' : obj['sign'],
        'countersign' : obj['countersign'],
        'state' : 0,
        'createuser' : uid,
        'createtime' : new Date(),
        'smartoffice_sendmessage_id' : obj['smartoffice_sendmessage_id']
    }

    service.saveSendMsg(msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteSendMsg(req, res) {
    var id = req.body.id;

    service.removeSendMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function commitSendMsg(req, res) {
    var ids = req.body.ids;

    service.commitSendMsg(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getSendMsgTemplate(req, res) {
    service.getSendMsgTemplate(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}