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
    getFeedbackList: getFeedbackList
};

function getFeedbackList (req, res) {
    var uid = req.session[userkey].id;
    
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
        "type": obj['type'],
        "content": obj["content"],
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
