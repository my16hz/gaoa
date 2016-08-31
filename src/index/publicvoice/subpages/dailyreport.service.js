/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');
var pubvoiceRecord = require("./record.service")

module.exports = {
    /*---------- 舆情日报页面 ----------*/
    /* 查询舆情日报列表 */
    findDailyList: findDailyList,
    /* 查询日报详情 */
    findDailyDetail: findDailyDetail,
    /* 创建日报 */
    createDaily: createDaily,
    /* 获取日报当前期数 */
    getCurrentDailyID: getCurrentDailyID,
    /* 查询日报中舆情列表 */
    getDailyPVList: getDailyPVList
};


/**
 * 查询日报列表
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList (field, order, callback) {
    var sql_stmt = "SELECT id,issue_id,createuser,createtime,pvids FROM tb_daily ";
    if (field != null && field != "") {
        sql_stmt += " order by " + field + " " + order;
    }
    console.log(sql_stmt);

    var objParams = {};
    var ps = dbpool.preparedStatement()
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

/**
 * 查询日报详情
 * @param daily_ids {Number} 日报ID数组
 * @param callback {Function}  回调函数(err, object)
 */
function findDailyDetail (daily_ids, callback) {
    var sql_stmt = "SELECT * FROM tb_daily where id = " + daily_ids;
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

/**
 * 创建日报
 * @param uid
 * @param daily {Object} 日报详情
 * {
 *      pvids: {String} 日报包含的舆情ID，以逗号分隔
 *      issue_id: {Number} 日报期数
 *      issue_total_id : {Number} 日报总期数
 *      content: {String} 舆情详情(富文本格式)
 * }
 * @param callback
 */
function createDaily (uid, daily, callback) {
    var sql_stmt = "INSERT INTO tb_daily ([id],[issue_id],[content],[createuser],[createtime],[pvids]) " +
        "VALUES (@id, @issue_id, @content, @createuer, @createtime, @pvids)";
    var objParams = {
        "id": daily["id"],
        "issue_id": daily["issue_id"],
        "content": daily["content"],
        "createuer": uid,
        "createtime": new Date(),
        "pvids": daily["pvids"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("issue_id", sql.Int)
        .input("content", sql.NVarChar)
        .input("createuer", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("pvids", sql.VarChar)
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
 * 获取日报当前期号
 * @param callback {Function}  回调函数(err, {issue_id:{Number}舆情期数, id:总期数})
 */
function getCurrentDailyID (callback) {
    var sql_stmt = "SELECT daily_id as 'id', daily_issue_id as 'issue_id' FROM tb_sys_config";
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

function getDailyPVList (did, callback) {
    var sql_stmt = "SELECT pvids FROM tb_daily WHERE id = @did";
    var objParams = {'did': did};
    var ps = dbpool.preparedStatement()
        .input('did', sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                console.log(recordset);
                pubvoiceRecord.findPubVoiceDetail(recordset[0]['pvids'], callback);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

