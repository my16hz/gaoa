/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var HtmlDocx = require('html-docx-js');
var menukey = require('config').session.menukey;
var userkey = require('config').session.userkey;

var errhandler = require('../../utils/errhandler');
var service = require('./service');
var defaut_interval = 3600000 * 24 * 7;
module.exports = {
    pageSocialVoice: pageSocialVoice,
    getSocialVoices: getSocialVoices,
    saveSocialVoice: saveSocialVoice,
    acceptSocialVoice: acceptSocialVoice,
    importSocialVoice: importSocialVoice,
    deleteSocialVoice: deleteSocialVoice,

    saveSVReport: saveSVReport,
    getSVReport: getSVReport,
    exportSocialReport: exportSocialReport,

    statisticUser: statisticUser,
    statisticGroup: statisticGroup
};

function pageSocialVoice (req, res) {
    res.render('index/socialvoice', {
        menus: req.session[menukey]
    });
}

function getSocialVoices (req, res) {
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority;
    service.getSocialVoices(uid, priority, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveSocialVoice (req, res) {
    var uid = req.session[userkey].id;
    var user = req.session[userkey].name;
    var obj = req.body;
    var socialvoice = {
        "id": obj["id"],
        "createtime": new Date(),
        "report_content": obj['report_content'],
        "origin_content": obj["origin_content"],
        "createuser": uid,
        "reportuser": user,
        "title": obj['title'],
        "department": obj["department"],
        "state": 0
    };

    service[obj.id ? 'updateSocialVoice' : 'saveSocialVoice'](socialvoice, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function acceptSocialVoice (req, res) {
    var obj = req.body;

    service.acceptSocialVoice(obj["ids"], function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function saveSVReport (req, res) {
    var uid = req.session[userkey].id;
    var user = req.session[userkey].name;
    var group = req.session[userkey].groupid;
    var obj = req.body;
    var report = {
        "id": obj["id"],
        "createtime": new Date(),
        "content": obj['content'],
        "createuser": uid,
        "title": obj['title'],
        "svids": obj['svids']
    };

    service.saveSVReport(report, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getSVReport (req, res) {
    service.getSVReport(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function exportSocialReport (req, res) {
    var id = req.params.id;

    service.getSVReportDetail(id, function (err, report) {
        if (err) {
            errhandler.internalException(res, err)
        } else {
            try {
                report = report[0];
                res.set({
                    'content-type': 'application/msword',
                    'content-disposition': 'attachment;filename="' + encodeURIComponent(report.title) + '.doc"'
                }).send(HtmlDocx.asBlob(report.content));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    })
}

function statisticUser (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);

    service.statisticUser(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function statisticGroup (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);

    service.statisticGroup(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function importSocialVoice (req, res) {

}

function deleteSocialVoice (req, res) {
    var ids = req.body.ids;

    service.deleteSocialVoice(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}
