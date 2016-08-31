/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/badinfo', controller.pageBadInfo)
        .get('/badinfo/list', controller.listBadInfo)
        .post('/badinfo/save', controller.saveBadInfo)
        .delete('/badinfo/delete', controller.deleteBadInfo)

        .get('/rtx/directive/list', controller.listRTX)
        .post('/rtx/directive/save', controller.saveRTX)
        .delete('/rtx/directive/delete', controller.deleteRTX)

        .get('/rtx/report/list', controller.listRTXReport)
        .post('/rtx/report/save', controller.saveRTXReport)
        .delete('/rtx/report/delete', controller.deleteRTXReport)
};