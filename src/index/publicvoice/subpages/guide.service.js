/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /*---------- 舆情引导页面 ----------*/
    addPVGuide: addPVGuide,
    updatePVGuide: updatePVGuide,
    getPVGuide: getPVGuide
};


/**
 * 添加舆情引导
 * @param uid 填报者ID
 * @param obj {Object} 引导对象
 * {guide_name : 引导者, guide_type : 引导类型,
 * guide_result : 引导结果, guide_count : 引导次数, content : 引导内容}
 * @param callback
 */
function addPVGuide (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_guide WHERE id = @id; INSERT INTO tb_pv_guide ([id], [guide_name], [guide_type], [guide_result], [guide_count], [content], [createuser], [createtime])  " +
        "VALUES (@id, @guide_name, @guide_type, @guide_result, @guide_count, @content, @createuser, @createtime);";
    var objParams = {
        "id": obj["id"],
        "guide_name": obj["guide_name"],
        "guide_type": obj["guide_type"],
        "guide_result": obj["guide_result"],
        "guide_count": obj["guide_count"],
        "content": obj["content"],
        "createuser": uid,
        "createtime": new Date()
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("guide_name", sql.NVarChar)
        .input("guide_type", sql.NVarChar)
        .input("guide_result", sql.NVarChar)
        .input("guide_count", sql.Int)
        .input("content", sql.NVarChar)
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
 * 更新舆情引导
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function updatePVGuide (uid, obj, callback) {
}

/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVGuide (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_guide WHERE id = @id;";
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
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}
