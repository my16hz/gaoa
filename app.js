/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var express = require('express');
var app = new express();

// system setting.
require('./src/middlewares')(app);
require('./src/routers')(app);

// start server
app.listen(config.port, function () {
    console.info('server is listeniing on port : %d', config.port);
});
