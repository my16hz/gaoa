/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 1;
module.exports = {
    getPubVoices: getPubVoices,
    savePubVoice: savePubVoice,
    removePubVoice: removePubVoice,
    importPubVoice: importPubVoice,
    applyApprobation: applyApprobation,

    checkPVUrl: checkPVUrl
};

function getPubVoices (req, res) {
    var user = req.session[userkey];
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );
    var level = (req.query.level - 0) || 0;

    service.findPubVoiceList(user, start, end, level, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function savePubVoice (req, res) {
    var uid = req.session[userkey].id;
    var fields = [
        'id', 'title', 'item', 'type', 'relate_department', 'duty_department',
        'fellow_count', 'review_count', 'content', 'from_website', 'url'
    ];
    var pubVoice = {};

    fields.forEach(function (field) {
        pubVoice[field] = req.body[field];
    });

    service[pubVoice.id ? 'updatePubVoice' : 'addPubVoices'](uid, pubVoice, function (err) {
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
    var ids = req.body.ids;

    service.commitApproval(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function checkPVUrl (req, res) {
    var url = req.query.url;
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval * 30));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.checkPVUrl(start, end, url, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}