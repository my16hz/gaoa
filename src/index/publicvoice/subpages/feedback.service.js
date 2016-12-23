/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');

module.exports = {
    /*---------- 舆情反馈页面 ----------*/
    addPVFeedback: addPVFeedback,
    updatePVFeedback: updatePVFeedback,
    getPVFeedback: getPVFeedback,
    getFeedbackList: getFeedbackList,
    acceptFeedback: acceptFeedback,
    getFeedbackDailyID: getFeedbackDailyID
};

function getFeedbackList (uid, start, end, state, callback) {
    var sql_stmt = "SELECT tb_publicvoice.*, " +
        " (SELECT daily_id FROM tb_pv_feedback_daily WHERE tb_pv_feedback_daily.id = tb_publicvoice.id) AS daily_id, " +
        " (SELECT count(*) FROM tb_pv_comment WHERE tb_pv_comment.id = tb_publicvoice.id) AS comment_count, " +
        " (SELECT content FROM tb_pv_feedback WHERE tb_pv_feedback.id = tb_publicvoice.id AND tb_pv_feedback.type = 0) AS docFeedback," +
        " (SELECT content FROM tb_pv_feedback WHERE tb_pv_feedback.id = tb_publicvoice.id AND tb_pv_feedback.type = 1) AS webFeedback " +
        " FROM tb_publicvoice " +
        " WHERE tb_publicvoice.id IN ( SELECT pvid FROM tb_pv_notify WHERE tb_pv_notify.uid = @uid) " +
        "   AND tb_publicvoice.createtime < @endTime AND tb_publicvoice.createtime > @startTime ";

    var objParams = {
        'uid' : uid,
        'startTime' : start,
        'endTime' : end
    };
    if (state != -1) {
        objParams["state"] = state;
        sql_stmt += " AND tb_publicvoice.feedback_state = @state ";
    }
    sql_stmt += " ORDER BY tb_publicvoice.createtime DESC ";

    console.log(sql_stmt);
    var ps = dbpool
        .preparedStatement()
        .input("uid", sql.VarChar)
        .input("state", sql.Int)
        .input("startTime", sql.DateTime)
        .input("endTime", sql.DateTime)
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

/**
 * 添加舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function addPVFeedback (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_feedback WHERE id = @id; " +
        "INSERT INTO tb_pv_feedback ([id],[type],[content],[createuser],[createtime]) " +
        "VALUES (@id, 0, @doc, @createuser, @docFeedbackTime);" +
        "INSERT INTO tb_pv_feedback ([id],[type],[content],[createuser],[createtime]) " +
        "VALUES (@id, 1, @web, @createuser, @webFeedbackTime);" +
        "UPDATE tb_publicvoice SET state = 8,feedback_state = 0 WHERE id = @id";
    var objParams = {
        "id": obj["id"],
        "doc": obj["doc"],
        "web": obj["web"],
        "createuser": uid,
        "webFeedbackTime": obj["webFeedbackTime"],
        "docFeedbackTime": obj["docFeedbackTime"]
    };
    console.log(sql_stmt);
    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("doc", sql.NVarChar(sql.MAX))
        .input("web", sql.NVarChar(sql.MAX))
        .input("createuser", sql.VarChar)
        .input("docFeedbackTime", sql.DateTime2)
        .input("webFeedbackTime", sql.DateTime2)
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

/**
 * 更新舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function updatePVFeedback (uid, obj, callback) {
    var sql_stmt = "UPDATE tb_pv_feedback SET content = @content WHERE id = @id AND type = @type;";
    var objParams = {
        "id": obj["id"],
        "type": obj["type"],
        "content": obj["content"]
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("type", sql.Int)
        .input("content", sql.NVarChar(sql.MAX))
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

/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVFeedback (pvid, type, callback) {
    var sql_stmt = "SELECT TOP 1000 * FROM tb_pv_feedback WHERE id = @id ";
    if (type != null) {
        sql_stmt += " AND type = @type ";
    }

    sql_stmt += " ORDER BY createtime DESC;";
    var objParams = {
        "id": pvid,
        "type": type
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("type", sql.Int)
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

function acceptFeedback (obj, callback) {
    var sql_stmt =
        "IF NOT EXISTS (SELECT * FROM tb_pv_feedback_daily WHERE id = @id) " +
        "    INSERT INTO tb_pv_feedback_daily ([id],[daily_id],[createuser],[createtime]) VALUES (@id, @daily_id, @createuser, @createtime); " +
        "ELSE " +
        "    UPDATE tb_pv_feedback_daily SET [daily_id] = @daily_id WHERE [id] = @id; " +
        "UPDATE tb_publicvoice SET feedback_state = 4 WHERE id = @id";
    var objParams = {
        "id": obj["id"],
        "daily_id": obj["daily_id"],
        "createuser": obj["createuser"],
        "createtime": obj["createtime"]
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("daily_id", sql.Int)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
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


function getFeedbackDailyID (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_feedback_daily WHERE id = @id ";

    var objParams = {
        "id": pvid
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
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