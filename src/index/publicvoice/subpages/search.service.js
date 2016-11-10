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
    var sql_stmt = "SELECT tb_publicvoice.*, tb_daily_pv.did FROM tb_publicvoice LEFT JOIN tb_daily_pv ON tb_publicvoice.id = tb_daily_pv.pvid " +
        "WHERE tb_publicvoice.createtime > @start AND tb_publicvoice.createtime < @end ";
    var objParams = {
        "start": start,
        "end": end
    };
    if (state) {
        sql_stmt += " AND tb_publicvoice.state = @state ";
        objParams["state"] = state;
    }
    if (type) {
        sql_stmt += " AND tb_publicvoice.type = @type ";
        objParams["type"] = type;
    }
    if (feedback) {
        sql_stmt += " AND tb_publicvoice.feedback_state = @feedback ";
        objParams["feedback"] = feedback;
    }
    if (dispose) {
        sql_stmt += " AND tb_publicvoice.dispose_stat = @dispose ";
        objParams["dispose"] = dispose;
    }
    if (title) {
        sql_stmt += " AND (tb_publicvoice.title LIKE @title OR tb_publicvoice.content LIKE @title) ";
        objParams["title"] = '%' + title + '%';
    }
    sql_stmt += " ORDER BY tb_publicvoice.createtime DESC ";
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
