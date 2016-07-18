/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

module.exports = {
    pageLogin: pageLogin,
    doLogin: doLogin,
    // middlerware
    authChecker: authChecker
};

function pageLogin (req, res) {
    res.render('login');
}

function doLogin (req, res, next) {
    next(new Error('Sample Error Message'));
}

function authChecker (req, res, next) {
    var user = req.session[config.session.userkey];
    var reqPath = req.path;

    // if (!/^\/((login|auth)\/?)?$/.test(reqPath) && !user) {
    //     return res.redirect('/login')
    // }

    next();
}