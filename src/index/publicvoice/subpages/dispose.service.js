/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /*---------- 舆情处置页面 ----------*/
    addPVDispose: addPVDispose,
    getPVDispose: getPVDispose
};


/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVDispose (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_dispose WHERE id = @id;";
    var objParams = {
        "id": pvid
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                if (recordset.length == 0) {
                    recordset = [{'id': pvid, 'state': -1, 'template': config.template.dispose}]
                }
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

/**
 * 创建舆情处置
 * @param uid
 * @param obj
 * @param callback
 */
function addPVDispose (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_dispose WHERE [id] = @id;" +
        "INSERT INTO tb_pv_dispose ([id],[content],[createuser],[createtime],[state]) " +
        "VALUES (@id, @content, @createuer, @createtime, @state);"
    var objParams = {
        "id": obj["id"],
        "state": obj["state"],
        "content": obj["content"],
        "createuer": uid,
        "createtime": new Date()
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("state", sql.Int)
        .input("content", sql.NVarChar)
        .input("createuer", sql.VarChar)
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