/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /*---------- 舆情通报页面 ----------*/
    /* 舆情通报 */
    addPVNotify: addPVNotify,
    /* 查询通报的舆情 */
    getNotifyPVList: getNotifyPVList,
    getWaitNotifyPVList: getWaitNotifyPVList,
    getNotifyPVByUid: getNotifyPVByUid
};


/**
 * 通报舆情
 * @param uid {Number} 通报者用户ID列表
 * @param userids {Arrays} 通报对象列表，用户ID列表
 * @param pvids {Arrays} 舆情ID列表，
 * @param callback {Function}  回调函数(err)
 */
function addPVNotify (uid, userids, pvids, callback) {
    var table = dbpool.table('tb_pv_notify');
    table.columns.add("uid", sql.VarChar, {nullable: false});
    table.columns.add("pvid", sql.Int, {nullable: false});
    table.columns.add("createtime", sql.DateTime, {nullable: true});
    table.columns.add("createuser", sql.VarChar, {nullable: true});
    
    userids.forEach(function (user) {
        pvids.forEach(function (pv) {
            table.rows.add(user, pv, new Date(), uid);
        })
    });
    var request = dbpool.createRequest();

    request.bulk(table, function (err, rowCount) {
        if (err) {
            return callback(err, null);
        }

        callback(err, rowCount);
    });
}

/**
 * 查询用户通报的舆情
 * @param uid 查询的用户ID
 * @param callback {Function}  回调函数(err)*
 */
function getNotifyPVList (uid, callback) {
    var sql_stmt = "SELECT * FROM tb_publicvoice where id in (select pvid from tb_pv_notify where tb_pv_notify.uid = @uid);";
    var objParams = {"uid": uid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
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

function getWaitNotifyPVList (callback) {
    var sql_stmt = "SELECT * FROM tb_publicvoice where state > 3;";
    var objParams = {};
    var ps = dbpool.preparedStatement()
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

function getNotifyPVByUid (uid, callback) {
    var sql_stmt = "SELECT tb_publicvoice.* " +
        "FROM tb_pv_notify left join tb_publicvoice on tb_pv_notify.pvid = tb_publicvoice.id " +
        "WHERE tb_pv_notify.uid = @uid;";
    var objParams = {"uid": uid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
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