/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/pubvoice', controller.pagePubVoice)
        // record page
        .get('/pubvoice/list', controller.getPubVoices)
        .post('/pubvoice/save', controller.savePubVoice)
        .delete('/pubvoice/delete', controller.removePubVoice)
        .post('/pubvoice/import', controller.importPubVoice)
        .post('/pubvoice/apply', controller.applyApprobation)
        // // examine & approve page
        .get('/application/list', controller.getApplications)
        .post('/application/save', controller.saveApplication)
        // // daily report page
        // .get('/dailyreport/list', controller.getDailyReports)
        // .get('/pubvoice/unapplied', controller.getUnappliedPubVoices)
        // .post('dailyreport/generate', controller.generateDailyReport)
        // dispose page

        // noitfy page

        // feedback page

        // guid page

        // analyze page
};