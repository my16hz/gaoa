/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;
var HtmlDocx = require('html-docx-js');
var extend = require('extend');

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');

module.exports = {
    savePVDispose: savePVDispose,
    getDisposeDetail: getDisposeDetail,
    getDisposeTemplate: getDisposeTemplate,
    exportPVDispose: exportPVDispose,

    /** 处置审批 **/
    getDisposeList: getDisposeList,

    /** 获取舆情批示 **/
    getPVComment: getPVComment,
    getPVCommentDocNO: getPVCommentDocNO,
    savePVComment: savePVComment,
    commitComment: commitComment,

    approveComment: approveComment,

    /* 查询待审批的批示 */
    getUnapprovedComment: getUnapprovedComment
};


function savePVDispose (req, res) {
    var uid = req.session[userkey].id;

    service.addPVDispose(uid, extend({
        state: '0',
        createuser: uid,
        createtime: new Date()
    }, req.body), function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getDisposeDetail (req, res) {
    var pvid = req.query.id;
    var comment_id = req.query.comment_id || 0;
    service.getPVDispose(pvid, comment_id, function (err, rs) {
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

function exportPVDispose (req, res) {
    var key = (req.params.id).split("-");
    var id = key[0];
    var comment_id = key[1] || 0;
    var filename = encodeURIComponent('广安市重要网络舆情处置通知书');
    var content = '';

    service.getPVDispose(id, comment_id, function (err, dispose) {
        content = dispose[0].content || '';

        if (err) {
            errhandler.internalException(res, err)
        } else {
            try {
                res.set({
                    'content-type': 'application/msword',
                    'content-disposition': 'attachment;filename="' + filename + '.doc"'
                }).send(HtmlDocx.asBlob(content));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
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

function getPVCommentDocNO (req, res) {
    service.getPVCommentDocNO(function (err, rs) {
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

    service.addPVComment(uid, extend({
        state: '2',
        createuser: uid,
        createtime: new Date()
    }, req.body), function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
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
        "comment_id" : obj["comment_id"],
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