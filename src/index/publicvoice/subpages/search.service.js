/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');

module.exports = {
    /*---------- 舆情检索页面 ----------*/
    searchPubVoices: searchPubVoices
};

function searchPubVoices (start, end, state, type, feedback, dispose, title, callback) {
    var sql_stmt = "SELECT TOP 1000 * FROM tb_publicvoice " +
        "WHERE createtime > @start AND createtime < @end ";
    var objParams = {
        "start": start,
        "end": end
    };
    if (state) {
        sql_stmt += " AND state = @state ";
        objParams["state"] = state;
    }
    if (type) {
        sql_stmt += " AND type = @type ";
        objParams["type"] = type;
    }
    if (feedback) {
        sql_stmt += " AND feedback_state = @feedback ";
        objParams["feedback"] = feedback;
    }
    if (dispose) {
        sql_stmt += " AND dispose_stat = @dispose ";
        objParams["dispose"] = dispose;
    }
    if (title) {
        sql_stmt += " AND title LIKE @title "
        objParams["title"] = '%' + title + '%';
    }

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
        .input("state", sql.Int)
        .input("feedback", sql.Int)
        .input("dispose", sql.Int)
        .input("type", sql.NVarChar)
        .input("title", sql.NVarChar)
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
