/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var HtmlDocx = require('html-docx-js');
var userkey = require('config').session.userkey;
var uuid = require('node-uuid');

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 7;

module.exports = {
    getDailyReports: getDailyReports,
    getDailyDetail: getDailyDetail,
    getDailyPVList: getDailyPVList,
    getUnappliedPubVoices: getUnappliedPubVoices,
    generateDailyReport: generateDailyReport,
    getDailyTemplate: getDailyTemplate,
    saveDailyReport: saveDailyReport,
    exportDailyReport: exportDailyReport,
    deleteDailyReport: deleteDailyReport
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

function getUnappliedPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );
    service.getUnappliedPubVoices(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function generateDailyReport (req, res) {
    return "";
}

function getDailyTemplate (req, res) {
    service.getCurrentDailyID(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: {'template': config['template'].daily, 'issue': rs}
            });
    });
}

function saveDailyReport (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'issue_id': obj['issue_id'],
        'content': obj['content'],
        'pvids': obj['pvids'],
        'type': obj['type'] || 0,
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

function exportDailyReport (req, res) {
    var id = req.params.id;
    var filename = encodeURIComponent('网络舆情日报第' + id + '期');
    var content = '';

    service.findDailyDetail(id, function (err, daily) {
        content = daily[0].content || '';

        if (err) {
            errhandler.internalException(res, err)
        } else {
            try {
                content = content.replace(/(\/sample\/template\/\w+\.jpg)/g, config.root + '$1');
                res.set({
                    'content-type': 'application/msword',
                    'content-disposition': 'attachment;filename="' + filename + '.doc"'
                }).send(HtmlDocx.asBlob(content));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}

function deleteDailyReport (req, res) {
    var uid = req.session[userkey].id;
    if (uid != 'admin') {
        /**
         * 普通用户不能删除日报
         */
        res.send({
            success: false,
            message: "权限不足, 请联系管理员。"
        });
    } else {
        var did = req.body.did;
        var pvids = req.body.pvids;
        var type = req.body.type;

        service.deleteDailyReport(did, type, pvids.split(','), function (err) {
            err ?
                errhandler.internalException(res, err) :
                res.send({
                    success: true
                });
        });
    }
}