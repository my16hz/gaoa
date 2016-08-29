/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;
var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pageBadInfo: pageBadInfo,
    listBadInfo: listBadInfo,
    saveBadInfo: saveBadInfo,
    deleteBadInfo: deleteBadInfo,

    listRTX: listRTX,
    saveRTX: saveRTX,
    deleteRTX: deleteRTX
};

function pageBadInfo (req, res) {
    res.render('index/badinfo');
}

function listBadInfo (req, res) {
    service.listBadInfo("createtime", "asc", function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveBadInfo (req, res) {
    var uid = req.session[userkey].id;
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
    service.saveBadInfo( objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteBadInfo (req, res) {
    var bdids = req.body.ids;
    service.deleteBadInfo( bdids, function (err) {
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
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        "rtx_time": obj['rtx_time'],
        "website": obj['website'],
        "url": obj['url'],
        "department": obj['department'],
        "type": obj['type'],
        "content": obj['content'],
        "result": obj['result'],
        "duty_user": obj['duty_user'],
        "remark": obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveRTX( objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function deleteRTX (req, res) {
    var bdids = req.body.ids;
    service.deleteRTX( bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}