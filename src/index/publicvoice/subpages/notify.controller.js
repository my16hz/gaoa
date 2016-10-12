/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
module.exports = {
    getWaitNotifyPVList: getWaitNotifyPVList,
    saveNotify: saveNotify,
    getNotifyPVByUid: getNotifyPVByUid
};

function getWaitNotifyPVList (req, res) {
    service.getWaitNotifyPVList(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveNotify (req, res) {
    var uid = req.session[userkey].id;
    var userids = req.body.uids.split(',');
    var pvids = req.body.pvids.split(',');

    if (!Array.isArray(userids)) {
        userids = [userids];
    }
    service.addPVNotify(uid, userids, pvids, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
            });
    });
}

function getNotifyPVByUid (req, res) {
    var uid = req.session[userkey].id;
    service.getNotifyPVByUid(uid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}