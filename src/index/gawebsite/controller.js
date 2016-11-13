/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

var errhandler = require('../../utils/errhandler');
var service = require('./service');

var menukey = config.session.menukey;
var userkey = config.session.userkey;

module.exports = {
    pageGAWebsite: pageGAWebsite
};

function pageGAWebsite (req, res) {
    res.render('index/gawebsite', {
        menus: req.session[menukey],
        user: req.session[userkey].name || '匿名用户',
        uid: req.session[userkey].id || ''
    });
}