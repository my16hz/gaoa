/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
module.exports = {
    getFeedbackDetail: getFeedbackDetail,
    saveFeedback: saveFeedback,
    getFeedbackList: getFeedbackList,

    /**
     * 舆情回复对应的日报ID
     */
    acceptFeedback: acceptFeedback,
    /**
     * 获取日报DailyID
     */
    getFeedbackDailyID: getFeedbackDailyID
};

function getFeedbackList (req, res) {
    var uid = req.session[userkey].id;
    var did = req.query.did;

    service.getFeedbackList(uid, did, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
    
}

function getFeedbackDetail (req, res) {
    var pvid = req.query.id;
    var type = req.query.type;
    service.getPVFeedback(pvid, type, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveFeedback (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var feedback = {
        "id": obj["id"],
        "createtime": new Date(),
        "doc": obj["doc"],
        "web": obj["web"],
        "createuser": uid
    };

    service.addPVFeedback(uid, feedback, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function acceptFeedback (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var feedback = {
        "id": obj["id"],
        "daily_id": obj["daily_id"],
        "createuser": uid,
        "createtime": new Date()
    };

    service.acceptFeedback(feedback, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getFeedbackDailyID (req, res) {
    var pvid = req.query.id;
    service.getFeedbackDailyID(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}