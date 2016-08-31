/**
 * Build Date: 07-31-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');

var dbpool = require('../../utilities/dbpool');

module.exports = {

    getConfigure: getConfigure,
    updateConfigure: updateConfigure
};

function getConfigure (done) {
    var sql_stmt = 'SELECT * from tb_sys_config';
    var ps = dbpool
        .preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, []);
            }

            ps.execute(null, function (err, rs) {
                done(err, err ? [] : rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function updateConfigure (config, done) {
    var sql_stmt = 'UPDATE tb_sys_config SET ' +
        '[name] = @name,' +
        '[value] = @value ' +
        'WHERE [id] = @id;';
    var objParams = {
        id: config.id,
        name: config.name,
        value: config.value
    };

    var ps = dbpool
        .preparedStatement()
        .input('id', sql.NVarChar)
        .input('name', sql.NVarChar)
        .input('value', sql.NVarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, false);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

