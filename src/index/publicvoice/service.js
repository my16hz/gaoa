/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */

var extend = require('extend');
var service = module.exports = {
};

extend(
    service,
    require('./subpages/alert.service'),
    require('./subpages/analyze.service'),
    require('./subpages/approve.service'),
    require('./subpages/dailyreport.service'),
    require('./subpages/dispose.service'),
    require('./subpages/feedback.service'),
    require('./subpages/guide.service'),
    require('./subpages/notify.service'),
    require('./subpages/record.service')
);




