/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */

var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');
var pubvoice = require('./record.service');

module.exports = {
    /*---------- 舆情审批页面 ----------*/
    /* 查询待审批的舆情 */
    findWaitApprovalPV: findWaitApprovalPV,
    /* 审批舆情 */
    approvalPubVoice: approvalPubVoice
};

/**
 * 查找待审批的舆情
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 舆情数组[])
 */
function findWaitApprovalPV (start, end, callback) {
    var sql_stmt = "SELECT TOP 1000 * FROM tb_publicvoice WHERE state >= 1 AND createtime > @start AND createtime < @end ORDER BY state ASC, createtime DESC;";

    console.log(sql_stmt);

    var objParams = {
        "start": start,
        "end": end
    };
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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
 * 审批舆情
 * @param uid {Number} - 用户ID
 * @param obj {Object} - 审批意见{
 * pvid {Number} 舆情ID
 * createuser {String} 审批者ID
 * type {Number} 审批类型 0 - 舆情 1 - 处置通知书
 * createtime {Date} 创建时间
 * content {String} 审批内容
 * result {Number} 审批结果 舆情： 0 - 通过， 1 - 不通过 2 -暂缓通过 批示处理签： 3 - 转 ， 4 - 转发 ， 5 - 阅存}
 * @param callback {Function}  回调函数(err)
 */
function approvalPubVoice (uid, obj, callback) {
    var sql_stmt = "INSERT INTO tb_pv_approved ([pvid],[createuser],[type],[createtime],[content],[result]) " +
        "VALUES (@pvid,@createuser,@type,@createtime,@content,@result)";
    var objParams = {
        "pvid": obj["pvid"],
        "createuser": uid,
        "type": 0,
        "createtime": new Date(),
        "content": obj["content"],
        "result": obj["result"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("pvid", sql.Int)
        .input("createuser", sql.VarChar)
        .input("type", sql.Int)
        .input("createtime", sql.DateTime2)
        .input("content", sql.NVarChar)
        .input("result", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                var state = {};
                state['approved_state'] = objParams['result'];
                /* 通过 */
                if (objParams['result'] == 1) {
                    state['state'] = 3;
                    /* 不通过 */
                } else if (objParams['result'] == 2) {
                    state['state'] = 1;
                    /* 暂缓通过 将状态设为 待审批 */
                } else {
                    state['state'] = 2
                    /* 通过 */
                }
                pubvoice.updatePVState([objParams["pvid"]], state, callback);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}
