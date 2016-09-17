/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');
module.exports = {
    getPVItemAnalyze: getPVItemAnalyze,
    getPVTypeAnalyze: getPVTypeAnalyze
};

function getPVItemAnalyze (start, end, callback) {
    var sql_stmt = "SELECT item, COUNT(*) AS count FROM tb_publicvoice WHERE createtime > @start AND createtime < @end GROUP BY item;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function getPVTypeAnalyze (start, end, callback) {
    var sql_stmt = "SELECT type, COUNT(*) AS count FROM tb_publicvoice WHERE createtime > @start AND createtime < @end GROUP BY type;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}