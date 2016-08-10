/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config').session;

var errhandler = require('../utilities/errhandler');
var service = require('./service');

module.exports = {
    pageLogin: pageLogin,
    doLogin: doLogin,
    doLogout: doLogout,
    // middlerware
    authChecker: authChecker
};

function pageLogin (req, res) {
    res.render('login');
}

function doLogin (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (!username || !password) {
        return errhandler.invalidParams(res);
    }

    service.auth(username, password, function (err, user) {
        if (err) {
            errhandler.internalException(res, err);
        } else if (user) {
            req.session[config.userkey] = user;

            res.send({
                success: true,
                data: user
            });
        } else {
            errhandler.customError(res, '用户名或密码错误。');
        }
    });
}

function doLogout (req, res) {
    req.session[config.userkey] = null;
    return res.redirect('/login')
}

function authChecker (req, res, next) {
    var user = req.session[config.userkey];
    var reqPath = req.path;

    if (!/^\/((login|auth|error(\/400)?)\/?)?$/.test(reqPath) && !user) {
        return res.redirect('/login')
    }

    next();
}