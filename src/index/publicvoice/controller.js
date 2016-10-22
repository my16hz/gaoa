/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

var service = require('./service');

var menukey = config.session.menukey;
var userkey = config.session.userkey;

var controller = module.exports = {
    pagePubVoice: pagePubVoice
};

require('extend')(
    controller,
    require('./subpages/alert.controller'),
    require('./subpages/analyze.controller'),
    require('./subpages/approve.controller'),
    require('./subpages/dailyreport.controller'),
    require('./subpages/dispose.controller'),
    require('./subpages/feedback.controller'),
    require('./subpages/guide.controller'),
    require('./subpages/notify.controller'),
    require('./subpages/record.controller'),
    require('./subpages/search.controller')
);

function pagePubVoice (req, res) {
    res.render('index/publicvoice', {
        menus: req.session[menukey],
        user: req.session[userkey].name || '匿名用户'
    });
}



