/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');

module.exports = {
    getDailyReports: getDailyReports,
    getDailyDetail: getDailyDetail,
    getDisposeList: getDisposeList
};


function getDailyReports (req, res) {
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority,
        order = req.query["order"];
    service.findDailyList("createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDailyDetail (req, res) {
    var did = req.query.id;
    service.findDailyDetail(did, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDisposeList (req, res) {
    var did = req.query.id;
    service.getDailyPVList(did, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });

}