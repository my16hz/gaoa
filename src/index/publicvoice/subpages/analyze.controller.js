/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');
module.exports = {
    getPVItemAnalyze: getPVItemAnalyze,
    getPVTypeAnalyze: getPVTypeAnalyze
};
function getPVItemAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - 3600000 * 24 * 30);
    var end = req.query.eTime || now;

    service.getPVItemAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getPVTypeAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - 3600000 * 24 * 30);
    var end = req.query.eTime || now;

    service.getPVTypeAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}