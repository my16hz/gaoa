/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var extend = require('extend');
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
module.exports = {
    getGuideDetail: getGuideDetail,
    saveGuide: saveGuide
};

function getGuideDetail (req, res) {
    var pvid = req.query.id;
    service.getPVGuide(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveGuide(req, res) {
    var guides = req.body.guides;

    service.addPVGuide(req.session[userkey].id, guides, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}
