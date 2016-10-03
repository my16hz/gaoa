/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var menukey = require('config').session.menukey;
var userkey = require('config').session.userkey;
var HtmlDocx = require('html-docx-js');
var errhandler = require('../../utils/errhandler');
var service = require('./service');

module.exports = {
    pageSmartOffice: pageSmartOffice,

    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg,
    deleteSendMsg: deleteSendMsg,
    commitSendMsg: commitSendMsg,
    exportSendMsg: exportSendMsg,

    getRecvMsg: getRecvMsg,
    saveRecvMsg: saveRecvMsg,
    deleteRecvMsg: deleteRecvMsg,
    commitRecvMsg: commitRecvMsg,
    exportRecvMsg: exportRecvMsg,

    sendNotify: sendNotify,

    getTemplate: getTemplate,
    getNotifyList: getNotifyList,
    saveMessage: saveMessage,
    getMessageList: getMessageList,
    deleteMessage: deleteMessage,

    getUnapprovedSendMsg: getUnapprovedSendMsg,
    getUnapprovedRecvMsg: getUnapprovedRecvMsg,
    commentSendMsg: commentSendMsg,
    commentRecvMsg: commentRecvMsg

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

function getRecvMsg (req, res) {
    service.getRecvMsg(function (err, rs) {
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
        'title': obj['title'],
        'major_department': obj['major_department'],
        'cc_department': obj['cc_department'],
        'message_id': obj['message_id'],
        'secret_level': obj['secret_level'],
        'urgent_level': obj['urgent_level'],
        'dispose_user': obj['dispose_user'],
        'draft_user': obj['draft_user'],
        'copies': obj['copies'],
        'content': obj['content'],
        'keyword': obj['keyword'],
        'sign': obj['sign'],
        'countersign': obj['countersign'],
        'state': 0,
        'createuser': uid,
        'createtime': new Date(),
        'smartoffice_sendmessage_id': obj['smartoffice_sendmessage_id']
    }

    service[obj['id'] ? 'updateSendMsg' : 'saveSendMsg'](msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function saveRecvMsg (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title': obj['title'],
        'recv_date': obj['recv_date'],
        'message_id': obj['message_id'],
        'origin_department': obj['origin_department'],
        'origin_id': obj['origin_id'],
        'secret_level': obj['secret_level'],
        'approved_user': obj['approved_user'],
        'from_department': obj['from_department'],
        'origin_date': obj['origin_date'],
        'copies': obj['copies'],
        'from_user': obj['from_user'],
        'content': obj['content'],
        'comment': obj['comment'],
        'result': obj['result'],
        'state': 0,
        'createuser': uid,
        'createtime': new Date(),
        'smartoffice_recvmessage_id': obj['smartoffice_recvmessage_id']
    }

    service.saveRecvMsg(msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteSendMsg (req, res) {
    var id = req.body.id;

    service.removeSendMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteRecvMsg (req, res) {
    var id = req.body.id;

    service.removeRecvMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteRecvMsg (req, res) {
    var id = req.body.id;

    service.removeRecvMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function commitSendMsg (req, res) {
    var ids = req.body.ids;

    service.commitSendMsg(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportSendMsg (req, res) {
    var content = req.body.content;
    var filename = encodeURIComponent('广安市网络舆情中心定稿纸');

    try {
        res.set({
            'content-type': 'application/msword',
            'content-disposition': 'attachment;filename="' + filename + '.doc"'
        }).send(HtmlDocx.asBlob(content));
    } catch (e) {
        errhandler.internalException(res, e);
    }
}

function commitRecvMsg (req, res) {
    var ids = req.body.ids;

    service.commitRecvMsg(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportRecvMsg (req, res) {
    var content = req.body.content;
    var filename = encodeURIComponent('广安市网络舆情中心收文处理笺');

    try {
        res.set({
            'content-type': 'application/msword',
            'content-disposition': 'attachment;filename="' + filename + '.doc"'
        }).send(HtmlDocx.asBlob(content));
    } catch (e) {
        errhandler.internalException(res, e);
    }
}

function getTemplate (req, res) {
    service.getTemplate(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getNotifyList (req, res) {
    var uid = req.session[userkey].id;
    service.getNotifyList(uid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveMessage (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title': obj['title'],
        'message_id': obj['message_id'],
        'type': obj['type'],
        'content': obj['content'],
        'state': 0,
        'createuser': uid,
        'createtime': new Date(),

    };

    service[obj.id ? 'updateMessage' : 'saveMessage'](msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getMessageList (req, res) {
    var uid = req.session[userkey].id;
    service.getMessageList(uid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function deleteMessage (req, res) {
    var id = req.body.id;

    service.deleteMessage(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function sendNotify (req, res) {
    var uid = req.session[userkey].id;
    var userids = req.body.uids;
    var mids = req.body.mids.split(',');

    if (!Array.isArray(userids)) {
        userids = [userids];
    }
    service.sendNotify(uid, userids, mids, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
            });
    });
}

function getUnapprovedSendMsg (req, res) {
    service.getUnapprovedSendMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getUnapprovedRecvMsg (req, res) {
    service.getUnapprovedRecvMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function commentSendMsg (req, res) {
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'sign': obj['sign'],
        'countersign': obj['countersign']
    };

    service.commentSendMsg(msg, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
            });
    });
}

function commentRecvMsg (req, res) {
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'comment': obj['comment']
    };

    service.commentRecvMsg(msg, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}