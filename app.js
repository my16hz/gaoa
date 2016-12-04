/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var express = require('express');

var dbpool = require('./src/utils/dbpool');

var app = new express();

// system setting.
require('./src/middlewares')(app);
require('./src/routers')(app);

// create a db pool and start server
dbpool.initPool(function (err) {
    if (err) {
        console.error('Fail to create db pool, caused by : %s', err.stack);
    } else {
        app.listen(config.port, function () {
            console.info('server is listening on port : %d', config.port);
        });
    }
});


