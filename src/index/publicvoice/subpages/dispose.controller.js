/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');
module.exports = {
    savePVDispose: savePVDispose,
    getDisposeDetail: getDisposeDetail,
    getDisposeTemplate: getDisposeTemplate,

    /** 处置审批 **/
    getDisposeList: getDisposeList,

    /** 获取舆情批示 **/
    getPVComment: getPVComment,
    savePVComment: savePVComment,
    commitComment: commitComment,

    approveComment: approveComment,

    /* 查询待审批的批示 */
    getUnapprovedComment: getUnapprovedComment
};


function savePVDispose (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var dispose = {
        "id": obj["id"],
        "createtime": new Date(),
        "state": "0",
        "content": obj["content"],
        "createuser": uid
    };

    service.addPVDispose(uid, dispose, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getDisposeDetail (req, res) {
    var pvid = req.query.id;
    service.getPVDispose(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDisposeTemplate(req, res) {
    
}

function getDisposeList (req, res) {

}

function getPVComment (req, res) {
    var pvid = req.query.id;
    service.getPVComment(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function savePVComment (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var comment = {
        "id": obj["id"],
        "createtime": new Date(),
        "state": "1",
        "comment": obj["comment"],
        "attachment": obj["attachment"],
        "createuser": uid
    };

    service.addPVComment(uid, comment, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

/**
 * 批示提交审批
 * @param req
 * @param res
 */
function commitComment (req, res) {
    var ids = req.body.ids;
    service.updatePVState([ids], {'dispose_stat': 2}, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function approveComment (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var comment = {
        "id" : obj["id"],
        "type" : obj["type"],
        "createuser" : uid,
        "createtime" : new Date(),
        "content" : obj["content"]
    };
    service.approveComment( obj, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getUnapprovedComment (req, res) {
    service.getUnapprovedComment(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}