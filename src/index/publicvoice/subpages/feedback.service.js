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
    getFeedbackList: getFeedbackList
};

function getFeedbackList (uid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_"
}

/**
 * 添加舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function addPVFeedback (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_feedback WHERE id = @id AND type = @type; " +
        "INSERT INTO tb_pv_feedback ([id],[type],[content],[createuser],[createtime]) " +
        "VALUES (@id, @type, @content, @createuser, @createtime);" +
        "UPDATE tb_publicvoice SET state = 8,feedback_state = 0 WHERE id = @id";
    var objParams = {
        "id": obj["id"],
        "type": obj["type"],
        "content": obj["content"],
        "createuser": uid,
        "createtime": new Date()
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("type", sql.Int)
        .input("content", sql.NVarChar(sql.MAX))
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
        sql_stmt += " AND type = @type";
    }

    var objParams = {
        "id": pvid,
        "type": type
    };

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