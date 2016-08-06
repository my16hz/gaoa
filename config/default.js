/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var path = require('path');
var filePath = __dirname + '/../upload/';

module.exports = {
    root: path.normalize(__dirname + '/..'),
    port: 8009,
    session: {
        userkey: 'LHS_USER_INFO',
        timeout: 3600000 // 1hour,
    },
    db: {
        server: '182.150.22.119',
        port: 20492,
        //server: '172.16.12.204',
        //port:9200,
        database: 'gaoa',
        user: 'gaoa',
        password: '1qazXSW@'
    },
    upload: {
        dest: path.normalize(filePath + 'files'),
        fileFilter: /\.xl(sx|sm|tx|tm|sb|am)$/i
    },
    // https://github.com/netpi/ueditor
    ueditor: {
        uploadDir: path.normalize(filePath + 'ueditor'),
        configPath: '/cfg/ue.json',
        imgUrl: '/ue/imgs/'
    }
};