/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    pageError: pageError,
    page404: page404,
    // middleware
    errorHandler: errorHandler,
    err404Handler: err404Handler
};

function pageError (req, res) {
    res.render('error');
}

function page404 (req, res) {
    res.render('404');
}

function errorHandler (err, req, res, next) {
    var status = res.status;

    !status && (res.status(500));

    console.error('Internal Exception: %s', err.stack);
    res.redirect('/error');
}

function err404Handler (req, res) {
    res.redirect('/error/404');
}