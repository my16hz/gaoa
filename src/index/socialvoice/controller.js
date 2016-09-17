/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var HtmlDocx = require('html-docx-js');
var menukey = require('config').session.menukey;
var userkey = require('config').session.userkey;

var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pageSocialVoice: pageSocialVoice,
    getSocialVoices: getSocialVoices,
    saveSocialVoice: saveSocialVoice,
    acceptSocialVoice: acceptSocialVoice,
    saveSVReport: saveSVReport,
    getSVReport: getSVReport,
    exportSocialReport: exportSocialReport
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
    var group = req.session[userkey].groupid;
    var obj = req.body;
    var socialvoice = {
        "id": obj["id"],
        "createtime": new Date(),
        "report_content": obj['report_content'],
        "origin_content": obj["origin_content"],
        "createuser": uid,
        "reportuser": user,
        "title": obj['title'],
        "department": group,
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

    service.findSocialVoiceDetail(id, function (err, voice) {
        if (err) {
            errhandler.internalException(res, err)
        } else {
            try {
                res
                    .set({
                        'content-type': 'application/msword',
                        'content-disposition': 'attachment;filename="' + encodeURIComponent('网络舆情日报第' + id + '期') + '.doc"'
                    }).send(HtmlDocx.asBlob(voice[0].report_content));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    })
}