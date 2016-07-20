/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var express = require('express');
var sql = require("mssql");
var app = new express();
var cp = new sql.Connection(config.db);

// system setting.
require('./src/middlewares')(app);
require('./src/routers')(app);

//connect the pool and start the web server when done

// start server
app.listen(config.port, function () {
    console.info('server is listeniing on port : %d', config.port);
});

