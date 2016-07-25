/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var sysmanage = require('../sysmanage/service');
var dbpool = require('../../utilities/dbpool');
module.exports = {
    /*---------- 舆情导入页面 ----------*/
    /* 查询舆情列表 */
    findPubVoiceList: findPubVoiceList,
    /* 查询舆情详情 (暂时废弃) */
    findPubVoiceDetail: findPubVoiceDetail,
    /* 添加舆情 */
    addPubVoices: addPubVoices,
    /* 删除舆情 */
    removePubVoices: removePubVoices,
    /* 提交审批 */
    commitApproval: commitApproval,
    
    /*---------- 舆情审批页面 ----------*/
    /* 查询待审批的舆情 */
    findWaitApprovalPV: findWaitApprovalPV,
    /* 审批舆情 */
    approvalPubVoice: approvalPubVoice,

    /*---------- 舆情日报页面 ----------*/
    /* 查询舆情日报列表 */
    findDailyList: findDailyList,
    /* 查询日报详情 */
    findDailyDetail: findDailyDetail,
    /* 创建日报 */
    createDaily: createDaily,
    /* 获取日报期数 */
    getDailyItem: getDailyItem,
    /* 舆情通报 */
    notifyPubVoices: notifyPubVoices,

    /*---------- 舆情日报页面 ----------*/

};
/**
 * 查询舆情列表
 * @param uid {String} 用户ID
 * @param field {String} 排序域
 * @param order {String} 排序顺序ASC,DESC
 * @param callback {Function} 回调函数(err, [])
 */
function findPubVoiceList (uid, field, order, callback) {
    sysmanage.findUserByID(uid, function (err, rs) {
        if (err) return callback(err, rs);
        else {
            if (rs.length == 0) return callback(err, rs)
            else {
                console.log(rs)
                var priority = rs[0]['priority'];
                var params = {};
                var sql_stmt = "select * from tb_publicvoice ";
                if (priority != 1) {
                    sql_stmt += ' where createuser = @uid ';
                    params['uid'] = uid;
                }
                if (field != null && field != "") {
                    sql_stmt += " order by " + field + " " + order;
                }
                console.log(sql_stmt);
                var ps = dbpool.preparedStatement()
                    .input("uid", sql.VarChar)
                    .input("field", sql.VarChar)
                    .input("order", sql.VarChar)
                    .prepare(sql_stmt, function (err) {
                        if (err) {
                            return callback(err);
                        }
                        ps.execute(params, function (err, recordset) {
                            callback(err, recordset)
                            ps.unprepare(function (err) {
                                if (err)
                                    console.log(err);
                            });
                        });
                    });
            }
        }
    })
}

/**
 * 查询舆情详情
 * @param uid {String}
 * @param pvid {Number}
 * @param callback {Function} 回调函数(err, object)
 */
function findPubVoiceDetail (uid, pvid, callback) {

}

/**
 * 添加舆情
 * @param uid {String} 用户ID
 * @param obj [Array]  舆情详情数组
 * @param callback {Function}  回调函数(err)
 */
function addPubVoices (uid, obj, callback) {
    var sql_stmt = "INSERT INTO tb_publicvoice ([title],[createtime],[item],[type],[relate_department]," +
        "[duty_department],[fellow_count],[review_count],[content],[from_website],[url],[state]," +
        "[approved_state],[dispose_stat],[feedback_state],[createuser]) " +
        "VALUES (@title,@createtime,@item,@type,@relate_department," +
        "@duty_department,@fellow_count,@review_count,@content,@from_website,@url,@state," +
        "@approved_state,@dispose_stat,@feedback_state,@createuser)";
    var objParams = {
        "title": obj["title"],
        "createtime": obj["createtime"],
        "item": obj["item"],
        "type": obj["type"],
        "relate_department": obj["relate_department"],
        "duty_department": obj["duty_department"],
        "fellow_count": obj["fellow_count"],
        "review_count": obj["review_count"],
        "content": obj["content"],
        "from_website": obj["from_website"],
        "url": obj["url"],
        "state": obj["state"],
        "approved_state": obj["approved_state"],
        "dispose_stat": obj["dispose_stat"],
        "feedback_state": obj["feedback_state"],
        "createuser": obj["createuser"]
    }

    var ps = dbpool.preparedStatement()
        .input("title", sql.NVarChar)
        .input("createtime", sql.DateTime2)
        .input("item", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("relate_department", sql.NVarChar)
        .input("duty_department", sql.NVarChar)
        .input("fellow_count", sql.Int)
        .input("review_count", sql.Int)
        .input("content", sql.NVarChar)
        .input("from_website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("state", sql.Int)
        .input("approved_state", sql.Int)
        .input("dispose_stat", sql.Int)
        .input("feedback_state", sql.Int)
        .input("createuser", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
 * 删除舆情
 * @param uid {Number}
 * @param pvids {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function removePubVoices (uid, pvids, callback) {
    var objParams = {};
    var removedids = "";
    for (var id in pvids) {
        removedids += id + ","
    }
    removedids = removedids.substring(0, removedids.length - 1);
    var sql_stmt = "DELETE FROM tb_publicvoice WHERE id in ("+ removedids +");";
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
 * 提交审批
 * @param uid {Number}
 * @param pids  {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function commitApproval (uid, pids,callback) {

}

/**
 * 查找待审批的舆情
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 舆情数组[])
 */
function findWaitApprovalPV (uid, field, order, callback) {

}

/**
 * 审批舆情
 * @param uid {Number} - 用户ID
 * @param pid {Number} - 舆情id
 * @param obj {Object} - 审批意见{status:}
 * @param callback {Function}  回调函数(err)
 */
function approvalPubVoice (uid, pid, obj, callback) {

}

/**
 * 查询日报列表
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList(uid, field, order, callback) {
}
/**
 * 查询日报详情
 * @param uid
 * @param daily_id {Number} 日报ID
 * @param callback {Function}  回调函数(err, object)
 */
function findDailyDetail(uid, callback) {

}

/**
 * 创建日报
 * @param uid
 * @param daily {Object} 日报详情
 * {
 *      pubVoices:{Array} 舆情ID数组
 *      dailyItem: {Object} 日报期数{prefix:{String}舆情前缀, suffix:{String}舆情后缀, item:{Number}舆情期数}
 *      dailyDetail: {String} 舆情详情(富文本格式)
 * }
 * @param callback
 */
function createDaily(uid, daily, callback) {

}

/**
 * 获取日报
 * @param uid
 * @param callback {Function}  回调函数(err, {prefix:{String}舆情前缀, suffix:{String}舆情后缀, item:{Number}舆情期数})
 */
function getDailyItem(uid, callback) {
    
}

/**
 * 通报舆情
 * @param uid
 * @param object {Array} 通报对象，用户ID列表
 * @param callback {Function}  回调函数(err)
 */
function notifyPubVoices(uid, object, callback) {

}