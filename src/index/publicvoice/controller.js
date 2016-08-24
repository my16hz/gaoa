/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var extend = require('extend');

var errhandler = require('../../utilities/errhandler');
var service = require('./service');

var controller = module.exports = {
    pagePubVoice: pagePubVoice
};

extend(
    controller,
    require('./subpages/alert.controller'),
    require('./subpages/analyze.controller'),
    require('./subpages/approve.controller'),
    require('./subpages/dailyreport.controller'),
    require('./subpages/dispose.controller'),
    require('./subpages/feedback.controller'),
    require('./subpages/guide.controller'),
    require('./subpages/notify.controller'),
    require('./subpages/record.controller')
);

function pagePubVoice (req, res) {
    res.render('index/publicvoice');
}



