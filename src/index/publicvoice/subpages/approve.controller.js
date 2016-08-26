/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');

module.exports = {
    getApplications: getApplications,
    saveApplication: saveApplication
};

function getApplications (req, res) {
    var order = req.query["order"];
    service.findWaitApprovalPV("createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveApplication (req, res) {
    var uid = req.session[userkey].id;
    var pvid = req.body.id;
    var content = req.body.approveContent;
    var result = req.body.approveResult;
    service.approvalPubVoice(uid, {'pvid': pvid, 'content': content, 'result': result}, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}