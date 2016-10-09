/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');

module.exports = {
    getPubVoices: getPubVoices,
    savePubVoice: savePubVoice,
    removePubVoice: removePubVoice,
    importPubVoice: importPubVoice,
    applyApprobation: applyApprobation
};

function getPubVoices (req, res) {
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority,
        order = req.query["order"];

    service.findPubVoiceList(uid, priority, "createtime", "DESC", function (err, rs) {
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