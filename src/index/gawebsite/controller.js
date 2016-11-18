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
var defaut_interval = 3600000 * 24 * 360;

module.exports = {
    pageGAWebsite: pageGAWebsite,

    getWebsite: getWebsite,
    saveWebsite: saveWebsite
};

function pageGAWebsite (req, res) {
    res.render('index/gawebsite', {
        menus: req.session[menukey],
        user: req.session[userkey].name || '匿名用户',
        uid: req.session[userkey].id || ''
    });
}

function getWebsite (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.getWebsite(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveWebsite (req, res) {
    var uid = req.session[userkey].id;
    var user = req.session[userkey].name;
    var obj = req.body;
    var socialvoice = {
        "id": obj["id"],
        "website": obj['website'],
        "url": obj["url"],
        "type": obj["type"],
        "zone": obj["zone"],
        "record": obj["record"],
        "is_interaction": obj["is_interaction"],
        "duty_user_qq": obj["duty_user_qq"],
        "duty_department": obj["duty_department"],
        "duty_department_call": obj["duty_department_call"],
        "duty_user": obj["duty_user"],
        "duty_user_call": obj["duty_user_call"],
        "server_zone": obj["server_zone"],
        "server_network": obj["server_network"],
        "remark": obj["remark"],
        "createtime": new Date(),
        "createuser": uid
    };

    service[obj.id ? 'updateWebsite' : 'saveWebsite'](socialvoice, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}