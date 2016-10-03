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
    createRequest: createRequest,
    preparedStatement: preparedStatement,
    table: table,

    execPreparedStatement: execPreparedStatement
};

function initPool (done) {
    connection = new sql.Connection(config.db, done);
}

function createRequest () {
    return new sql.Request(connection);
}

function preparedStatement () {
    return new sql.PreparedStatement(connection);
}

function table (tbname) {
    return new sql.Table(tbname);
}

function execPreparedStatement (sql, inputs, values, done) {
    var params, ps;

    if (2 == arguments.length) {
        done = inputs;
        inputs = undefined;
        values = undefined;
    }

    ps = preparedStatement();
    params = sql.match(/@\w+/g);

    if (params) {
        if (!inputs || params.length !== inputs.length)
            done(new Error('Invalid SQL parameters types length.'));

        if (!values || params.length !== Object.keys(values).length)
            done(new Error('Invalid SQL parameters values length.'));

        params.forEach(function (field, index) {
            ps.input(inputs[index]);
        });
    }

    ps.prepare(sql, function (err) {
        if (err)  return done(err);

        ps.execute(values, function (err, rs) {
            done(err, rs);

            ps.unprepare(function (err) {
                err && console.error(err);
            });
        });
    });
}