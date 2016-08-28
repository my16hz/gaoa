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

        // examine & approve page
        .get('/application/list', controller.getApplications)
        .post('/application/save', controller.saveApplication)

        // daily report page
        .get('/daily/list', controller.getDailyReports)
        .get('/daily/detail', controller.getDailyDetail)
        // .get('/pubvoice/unapplied', controller.getUnappliedPubVoices)
        // .post('dailyreport/generate', controller.generateDailyReport)

        // daiyly create page
        .get('/daily/unapplied', controller.getUnappliedPubVoices)
        .post('daily/generate', controller.generateDailyReport)
        .get('/daily/template', controller.getDailyTemplate)

        // dispose page
        .get('/dispose/list', controller.getDisposeList)
        .get('/dispose/detail', controller.getDisposeDetail)
        .post('/dispose/save', controller.savePVDispose)

        // noitfy page
        .get('/notify/list', controller.getWaitNotifyPVList)
        .post('/notify/save', controller.saveNotify)

        // feedback page
        .get('/feedback/detail', controller.getFeedbackDetail)
        .post('/feedback/save', controller.saveFeedback)

        // guide page
        .get('/guide/detail', controller.getGuideDetail)
        .post('/guide/save', controller.saveGuide)

        // analyze page

        // alert page
        .get('/alert/list', controller.getAlertList)
        .post('/alert/save', controller.saveAlert)
        .delete('/alert/clear', controller.clearAlert)
};