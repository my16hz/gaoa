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

function searchPubVoices (user, start, end, state, type, feedback, dispose, item, title, callback) {
    var sql_stmt = "SELECT tb_publicvoice.*, tb_daily_pv.did FROM tb_publicvoice LEFT JOIN tb_daily_pv ON tb_publicvoice.id = tb_daily_pv.pvid " +
        "WHERE tb_publicvoice.createtime > @start AND tb_publicvoice.createtime < @end ";
    var objParams = {
        "start": start,
        "end": end
    };
    if (user.priority != 1) {
        sql_stmt += ' AND tb_publicvoice.createuser = @uid ';
        objParams['uid'] = user.id;
    }
    if (state) {
        sql_stmt += " AND tb_publicvoice.state = @state ";
        objParams["state"] = state;
    }
    if (type) {
        sql_stmt += " AND tb_publicvoice.type = @type ";
        objParams["type"] = type;
    }
    if (feedback) {
        if (feedback == 0) {
            sql_stmt += " AND (tb_publicvoice.feedback_state = @feedback OR tb_publicvoice.feedback_state = 4 ) ";
        } else {
            sql_stmt += " AND tb_publicvoice.feedback_state = @feedback ";
        }
        objParams["feedback"] = feedback;
    }
    if (item) {
        sql_stmt += " AND tb_publicvoice.item = @item ";
        objParams["item"] = item;
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
        .input("uid", sql.VarChar)
        .input("state", sql.Int)
        .input("feedback", sql.Int)
        .input("dispose", sql.Int)
        .input("type", sql.NVarChar)
        .input("item", sql.NVarChar)
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

function exportMatchedPubVoices (user, start, end, state, type, feedback, dispose, title, callback) {
    var sql_stmt = "SELECT tb_publicvoice.*, tb_daily_pv.did, " +
        "tb_pv_comment.comment_user AS comment_user,tb_pv_comment.comment AS pv_comment,tb_pv_comment.comment_date AS comment_date, " +
        "tb_pv_comment.recv_date AS comment_recv_date,tb_pv_comment.from_user AS comment_from_user," +
        "tb_pv_comment.from_department AS comment_from_department," +
        "(SELECT tb_pv_feedback.content FROM tb_pv_feedback WHERE tb_publicvoice.id = tb_pv_feedback.id AND tb_pv_feedback.type = 1) AS web_feedback," +
        "(SELECT tb_pv_feedback.createtime FROM tb_pv_feedback WHERE tb_publicvoice.id = tb_pv_feedback.id AND tb_pv_feedback.type = 1) AS web_date_feedback," +
        "(SELECT tb_pv_feedback.content FROM tb_pv_feedback WHERE tb_publicvoice.id = tb_pv_feedback.id AND tb_pv_feedback.type = 0) AS doc_feedback, " +
        "(SELECT tb_pv_feedback.createtime FROM tb_pv_feedback WHERE tb_publicvoice.id = tb_pv_feedback.id AND tb_pv_feedback.type = 0) AS doc_date_feedback " +
        "FROM tb_publicvoice  " +
        "LEFT JOIN tb_daily_pv ON tb_publicvoice.id = tb_daily_pv.pvid " +
        "LEFT JOIN tb_pv_comment ON tb_publicvoice.id = tb_pv_comment.id " +
        "WHERE tb_publicvoice.createtime > @start AND tb_publicvoice.createtime < @end ";
    var objParams = {
        "start": start,
        "end": end
    };
    if (user.priority != 1) {
        sql_stmt += ' AND tb_publicvoice.createuser = @uid ';
        objParams['uid'] = user.id;
    }
    if (state) {
        sql_stmt += " AND tb_publicvoice.state = @state ";
        objParams["state"] = state;
    }
    if (type) {
        sql_stmt += " AND tb_publicvoice.type = @type ";
        objParams["type"] = type;
    }
    if (feedback) {
        if (feedback == 0) {
            sql_stmt += " AND (tb_publicvoice.feedback_state = @feedback OR tb_publicvoice.feedback_state = 4 ) ";
        } else {
            sql_stmt += " AND tb_publicvoice.feedback_state = @feedback ";
        }
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
        .input("uid", sql.VarChar)
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
                callback(err, recordset);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}
