/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var xlsx = require('xlsx');


var dbpool = require('../../utilities/dbpool');

module.exports = {
    getSocialVoices: getSocialVoices,
    saveSocialVoice: saveSocialVoice
};

function getSocialVoices (uid, priority, callback) {
    var params = {};
    var sql_stmt = "select * from tb_socialvoice ";
    var ps = null;

    if (priority != 1) {
        sql_stmt += ' where createuser = @uid ';
        params['uid'] = uid;
    }

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, []);
            }

            ps.execute(params, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function saveSocialVoice (objParams, callback) {
    var sql_stmt = 'INSERT INTO tb_socialvoice ([title], [origin_content], [report_content], [reportuser], [department], [state], [createuser], [createtime]) ' +
        'VALUES (@title, @origin_content, @report_content, @reportuser, @department, @state, @createuser, @createtime);';

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("state", sql.Int)
        .input("title", sql.NVarChar)
        .input("origin_content", sql.NVarChar)
        .input("report_content", sql.NVarChar)
        .input("reportuser", sql.NVarChar)
        .input("department", sql.NVarChar)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

