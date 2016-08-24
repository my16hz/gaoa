/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /*---------- 舆情预警页面 ----------*/
    getAlertList: getAlertList,
    addAlert: addAlert
};

/**
 * 获取预警列表
 * @param bShowAll 是否显示所有预警，默认为false，即只显示有效舆情
 * @param callback
 */
function getAlertList (bShowAll, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_alerted WHERE endtime > @endtime ORDER BY state";
    var endtime = new Date();
    if (bShowAll == true) {
        endtime = new Date(0);
    }
    var objParams = {
        "endtime": endtime
    };

    var ps = dbpool.preparedStatement()
        .input("endtime", sql.DateTime2)
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
 * 添加预警
 * @param obj
 * @param callback
 */
function addAlert (obj, callback) {
    var sql_stmt = "INSERT INTO tb_pv_alerted ([title], [date], [department], [sender], [receiver], [type], [content], [endtime], [state]) " +
        "VALUES (@title, @date, @department, @sender, @receiver, @type, @content, @endtime, @state);";
    var objParams = {
        "title": obj["title"],
        "date": obj["date"],
        "department": obj["department"],
        "sender": obj["sender"],
        "receiver": obj["receiver"],
        "type": obj["type"],
        "content": obj["content"],
        "endtime": obj["endtime"],
        "state": obj["state"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("title", sql.NVarChar)
        .input("date", sql.DateTime2)
        .input("department", sql.NVarChar)
        .input("sender", sql.NVarChar)
        .input("receiver", sql.NVarChar)
        .input("type", sql.Int)
        .input("content", sql.NVarChar)
        .input("endtime", sql.DateTime2)
        .input("state", sql.Int)
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