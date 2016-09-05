/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');

module.exports = {
    getDailyReports: getDailyReports,
    getDailyDetail: getDailyDetail,
    getDailyPVList: getDailyPVList,
    getUnappliedPubVoices: getUnappliedPubVoices,
    generateDailyReport: generateDailyReport,
    getDailyTemplate: getDailyTemplate,
    saveDailyReport: saveDailyReport
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

function getDailyPVList (req, res) {
    var did = req.query.id;
    if (did) {
        service.getDailyPVList(did, function (err, rs) {
            err ?
                errhandler.internalException(res, err) :
                res.send({
                    success: true,
                    data: rs
                });
        });
    } else {
        service.getLatestDailyPVList(function (err, rs) {
            err ?
                errhandler.internalException(res, err) :
                res.send({
                    success: true,
                    data: rs
                });
        });
    }
}

function getUnappliedPubVoices(req, res) {
    service.findPubVoicesByState(2, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function generateDailyReport(req, res) {
    return "";
}

function getDailyTemplate(req, res) {
    service.getCurrentDailyID(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: {'template': config['template'].daily, 'issue': rs}
            });
    });
}

function saveDailyReport(req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'issue_id': obj['issue_id'],
        'content': obj['content'],
        'pvids': obj['pvids'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.createDaily(uid, objParams, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}