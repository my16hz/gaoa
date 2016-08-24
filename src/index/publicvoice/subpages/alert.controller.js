/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');
module.exports = {
    getAlertList: getAlertList,
    saveAlert: saveAlert,
    clearAlert: clearAlert
};

function getAlertList (req, res) {
    var flag = req.query.flag;
    service.getAlertList(flag, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveAlert (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var alert = {
        "title": obj["title"],
        "starttime": obj["starttime"],
        "department": obj["department"],
        "sender": obj["sender"],
        "receiver": obj["receiver"],
        "type": obj["type"],
        "content": obj["content"],
        "endtime": obj["endtime"],
        "state": 0,
        "createuser": uid,
        "createtime": new Date()
    };

    service.addAlert(alert, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function clearAlert (req, res) {
    var obj = req.body;
    var ids = obj['ids'];

    service.updateAlertState(ids, 1, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}