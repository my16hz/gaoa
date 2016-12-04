/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');

module.exports = {
    /*---------- 舆情检索页面 ----------*/
    searchPubVoices: searchPubVoices,

    exportMatchedPubVoices: exportMatchedPubVoices
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

function exportMatchedPubVoices (start, end, state, type, feedback, dispose, title, done) {
    var sql_stmt = "SELECT tb_publicvoice.*, tb_daily_pv.did, " +
        "tb_pv_comment.commnet_user AS commnet_user,tb_pv_comment.comment AS pv_comment,tb_pv_comment.comment_date AS comment_date, " +
        "tb_pv_comment.recv_date AS commnet_recv_date,tb_pv_comment.from_user AS commnet_from_user," +
        "tb_pv_comment.from_department AS comment_from_department," +
        "tb_pv_feedback.content AS feedback_content,tb_pv_feedback.type AS feedback_type, tb_pv_feedback.createtime AS feedback_date " +
        "FROM tb_publicvoice  " +
        "LEFT JOIN tb_daily_pv ON tb_publicvoice.id = tb_daily_pv.pvid " +
        "LEFT JOIN tb_pv_comment ON tb_publicvoice.id = tb_pv_comment.id " +
        "LEFT JOIN tb_pv_feedback ON tb_publicvoice.id = tb_pv_feedback.id " +
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
