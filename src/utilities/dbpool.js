/**
 * Build Date: 07-20-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require("mssql");

var connection;

module.exports = {
    initPool: initPool,
    createRequest: createRequest
};

function initPool (done) {
    connection = new sql.Connection(config.db, done);
}

function createRequest () {
    return new sql.Request(connection);
}