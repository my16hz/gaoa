/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var menukey = require('config').session.menukey;
var sesskeys = require('config').session;
var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pageSmartOffice: pageSmartOffice,
    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg
};

function pageSmartOffice (req, res) {
    res.render('index/smartoffice', {
        menus: req.session[menukey]
    });
}

function getSendMsg (req, res) {
    service.getSendMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveSendMsg (req, res) {
    
}

