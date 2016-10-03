/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var uploader = require('./uploader');

module.exports = function () {
    return express.Router()
        .post('/ueditor', uploader.ueditor)
        .post('/datafile', uploader.datafile)
        .post('/msgfile/:uuid', uploader.msgfile);
};