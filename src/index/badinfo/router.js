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

        .get('/badinfo/rtxlist', controller.listRTX)
        .post('/badinfo/rtxsave', controller.saveRTX)
        .delete('/badinfo/rtxdelete', controller.deleteRTX)
};