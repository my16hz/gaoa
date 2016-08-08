/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
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
    service.findPubVoiceList();
}

function savePubVoice (req, res) {
}

function removePubVoice (req, res) {
}

function importPubVoice (req, res) {
}

function applyApprobation (req, res) {
}