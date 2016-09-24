/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sesskeys = require('config').session;
var errhandler = require('../../utilities/errhandler');
var service = require('./service');
var defaut_interval = 3600000 * 24 * 7;
module.exports = {
    pageBadInfo: pageBadInfo,
    listBadInfo: listBadInfo,
    saveBadInfo: saveBadInfo,
    deleteBadInfo: deleteBadInfo,

    listRTX: listRTX,
    saveRTX: saveRTX,
    deleteRTX: deleteRTX,

    listRTXReport: listRTXReport,
    saveRTXReport: saveRTXReport,
    deleteRTXReport: deleteRTXReport,

    aggregateWebsite: aggregateWebsite,
    aggregateReporter: aggregateReporter,
    aggregateDepartment: aggregateDepartment,
    aggregateZone: aggregateZone,
    aggregateType: aggregateType,
    aggregateCreater: aggregateCreater
};

function pageBadInfo (req, res) {
    res.render('index/badinfo', {
        menus: req.session[sesskeys.menukey]
    });
}

function listBadInfo (req, res) {
    var uid = req.session[sesskeys.userkey].id;
    var priority = req.session[sesskeys.userkey].priority;
    service.listBadInfo(uid, priority, "createtime", "asc", function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveBadInfo (req, res) {
    var uid = req.session[sesskeys.userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'website': obj['website'],
        'url': obj['url'],
        'reportdate': obj['reportdate'],
        'department': obj['department'],
        'username': obj['username'],
        'duty_zone': obj['duty_zone'],
        'type': obj['type'],
        'sn': obj['sn'],
        'remark': obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveBadInfo(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteBadInfo (req, res) {
    var bdids = req.body.ids;
    service.deleteBadInfo(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function listRTX (req, res) {
    service.listRTX("createtime", "asc", function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveRTX (req, res) {
    var uid = req.session[sesskeys.userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        "rtx_time": obj['rtx_time'],
        "department": obj['department'],
        "type": obj['type'],
        "content": obj['content'],
        "result": obj['result'],
        "duty_user": obj['duty_user'],
        "remark": obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveRTX(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function deleteRTX (req, res) {
    var bdids = req.body.ids;
    service.deleteRTX(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function listRTXReport (req, res) {
    service.listRTXReport("createtime", "desc", function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveRTXReport (req, res) {
    var uid = req.session[sesskeys.userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'report_time': obj['report_time'],
        'website': obj['website'],
        'url': obj['url'],
        'report_user': obj['report_user'],
        'remark': obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveRTXReport(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function deleteRTXReport (req, res) {
    var bdids = req.body.ids;
    service.deleteRTXReport(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function aggregateWebsite (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateWebsite(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateReporter (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateReporter(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateDepartment (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateDepartment(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateZone (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateZone(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateType (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateType(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateCreater (req, res) {
    var now = new Date();
    var start = req.query.sTime || new Date(now.getTime() - defaut_interval);
    var end = req.query.eTime || now;

    service.aggregateCreater(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

