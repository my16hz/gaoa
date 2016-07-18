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
    },
    // config for your database
    db: {
        user: 'gaoa1',
        password: '1qazXSW@',
        server: '182.150.22.119',
        port:20492,
        //server: '172.16.12.204',
        //port:9200,
        database: 'demo'
    }
};