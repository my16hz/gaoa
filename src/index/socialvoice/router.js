/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/socialvoice', controller.pageSocialVoice)
        .get('/socialvoice/list', controller.getSocialVoices)
        .post('/socialvoice/save', controller.saveSocialVoice)
        .post('/socialvoice/accept', controller.acceptSocialVoice)
        .post('/socialvoice/import', controller.importSocialVoice)
        .delete('/socialvoice/delete', controller.deleteSocialVoice)
        .post('/socialvoice/report/save', controller.saveSVReport)
        .get('/socialvoice/report/list', controller.getSVReport)
        .get('/socialvoice/export/:id', controller.exportSocialReport)

        .get('/socialvoice/statistics/user', controller.statisticUser)
        .get('/socialvoice/statistics/group', controller.statisticGroup)
        .get('/socialvoice/statistics/acceptuser', controller.statisticAcceptUser)
        .get('/socialvoice/statistics/acceptgroup', controller.statisticAcceptGroup)
};