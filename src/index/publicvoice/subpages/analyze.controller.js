/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 7;
module.exports = {
    getPVItemAnalyze: getPVItemAnalyze,
    getPVTypeAnalyze: getPVTypeAnalyze,
    getPVDutyAnalyze: getPVDutyAnalyze,
    getPVReviewAnalyze: getPVReviewAnalyze,
    getPVFellowAnalyze: getPVFellowAnalyze,

    getPVMissReportAnalyze: getPVMissReportAnalyze,
    getGroupMissAnalyze: getGroupMissAnalyze,

    getFeedbackTypeAnalyze: getFeedbackTypeAnalyze,
    getCommentAnalyze: getCommentAnalyze

};
function getPVItemAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
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
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
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

function getPVDutyAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getPVDutyAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}


function getPVReviewAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getPVReviewAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}


function getPVFellowAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getPVFellowAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getPVMissReportAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getPVMissReportAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getGroupMissAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getGroupMissAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getFeedbackTypeAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getFeedbackTypeAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}


function getCommentAnalyze (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.getCommentAnalyze(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}