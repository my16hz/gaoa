/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 2;
module.exports = {
    getApplications: getApplications,
    saveApplication: saveApplication
};

function getApplications (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );
    service.findWaitApprovalPV(start, end, function (err, rs) {
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