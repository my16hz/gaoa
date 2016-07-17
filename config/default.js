/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var path = require('path');

module.exports = {
    root: path.normalize(__dirname + '/..'),
    port: 8009,
    session: {
        userkey: 'LHS_USER_INFO',
        timeout: 3600000 // 1hour,
    }
};