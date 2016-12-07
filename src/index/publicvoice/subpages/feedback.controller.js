/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 30;
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
    var state = req.query.state || -1;
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0) || now );

    service.getFeedbackList(uid, start, end, state, function (err, rs) {
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
        "webFeedbackTime": obj["webFeedbackTime"] || new Date(),
        "docFeedbackTime": obj["docFeedbackTime"] || new Date(),
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