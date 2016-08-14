/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pagePubVoice: pagePubVoice,

    getPubVoices: getPubVoices,
    savePubVoice: savePubVoice,
    removePubVoice: removePubVoice,
    importPubVoice: importPubVoice,
    applyApprobation: applyApprobation
};

function pagePubVoice (req, res) {
    res.render('index/publicvoice');
}

function getPubVoices (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority,
        order = req.query["order"];
    service.findPubVoiceList(uid, priority, "createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function savePubVoice (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id;
    var obj = req.body;
    var pubVoice = {
        "title": obj["title"],
        "createtime": new Date(),
        "item": obj["item"],
        "type": obj["type"],
        "relate_department": obj["relate_department"],
        "duty_department": obj["duty_department"],
        "fellow_count": obj["fellow_count"],
        "review_count": obj["review_count"],
        "content": obj["content"],
        "from_website": obj["from_website"],
        "url": obj["url"],
        "state": 0,
        "approved_state": 0,
        "dispose_stat": 0,
        "feedback_state": 0,
        "createuser": uid
    };
    service.addPubVoices(uid, pubVoice, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function removePubVoice (req, res) {
    var ids = req.body.ids;

    service.removePubVoices(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function importPubVoice (req, res) {
}

function applyApprobation (req, res) {
}