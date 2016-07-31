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
    /* 查询舆情详情  */
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
    /* 获取日报当前期数 */
    getCurrentDailyID: getCurrentDailyID,
    /* 获取日报模板 */
    getDailyTemplate: getDailyTemplate,
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
                            return callback(err, null);
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
 * @param pvids {Array} 舆情ID数组
 * @param callback {Function} 回调函数(err, object)
 */
function findPubVoiceDetail (uid, pvids, field, order, callback) {
    var findids = "";
    for (var id in pvids) {
        findids += pvids[id] + ","
    }
    findids = findids.substring(0, findids.length - 1);
    var sql_stmt = "select * from tb_publicvoice where id in (" +  findids  + ") ";
    if (field != null && field != "") {
        sql_stmt += " order by " + field + " " + order;
    }
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("field", sql.VarChar)
        .input("order", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute({}, function (err, recordset) {
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
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
 * 删除舆情
 * @param uid {Number}
 * @param pvids {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function removePubVoices (uid, pvids, callback) {
    var objParams = {};
    var removedids = "";
    for (var id in pvids) {
        removedids += pvids[id] + ","
    }
    removedids = removedids.substring(0, removedids.length - 1);
    var sql_stmt = "DELETE FROM tb_publicvoice WHERE id in ("+ removedids +");";
    console.log(sql_stmt);
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
 * 更新舆情状态, 可同时更新多个状态
 * @param pvids {Arrays} 舆情ID列表
 * @param state {Object} 更新后的舆情状态, 可更新的状态类型为{state, approved_state, dispose_stat, feedback_state}
 * {0 - 未提交 1 - 待审核 2 - 审核通过 3 - 审核不通过 4 - 待批示 5 - 已批示 6 - 待回复 7 - 已回复}
 * @param callback
 * @private
 */
function _updatePVState (pvids, state, callback) {
    var objParams = {};
    var updateids = "";
    for (var id in pvids) {
        updateids += pvids[id] + ","
    }
    updateids = updateids.substring(0, updateids.length - 1);
    var sets = ""
    for (var k in state) {
        sets += k + ' = ' + state[k] + ",";
    }
    sets = sets.substring(0, sets.length - 1);
    var sql_stmt = "UPDATE tb_publicvoice SET " + sets + " WHERE id in ("+ updateids +");";
    console.log(sql_stmt);
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
 * 提交审批
 * @param uid {Number}
 * @param pvids  {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function commitApproval (uid, pvids, callback) {
    _updatePVState(pvids, {'state': 1}, callback);
}

/**
 * 查找待审批的舆情
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 舆情数组[])
 */
function findWaitApprovalPV (uid, field, order, callback) {
    var sql_stmt = "SELECT * FROM tb_publicvoice WHERE state = 1 ";
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
        "createuser": obj["createuser"],
        "type": obj["type"],
        "createtime": obj["createtime"],
        "content": obj["content"],
        "result": obj["result"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("pvid", sql.Int)
        .input("createuser", uid)
        .input("type", sql.Int)
        .input("createtime", new Date())
        .input("content", sql.NVarChar)
        .input("result", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                var state = {};
                state['approved_state'] = obj['result']; /* 通过 */
                if (obj['result'] == 1) {
                    state['state'] = 3; /* 不通过 */
                } else if (obj['result'] == 2) {
                    state['state'] = 1; /* 暂缓通过 将状态设为 待审批 */
                } else {
                    state['state'] = 2 /* 通过 */
                }
                _updatePVState([obj["pvid"]], state, callback);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 查询日报列表
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList(uid, field, order, callback) {
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
                callback(err, recordset)
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
function findDailyDetail(daily_ids, callback) {
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
function createDaily(uid, daily, callback) {
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
function getCurrentDailyID(callback) {
    var sql_stmt = "SELECT MAX(id) as 'id', MAX(issue_id) as 'issue_id' FROM tb_daily";
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
 * 获取日报模板
 * @param uid
 * @param callback
 */
function getDailyTemplate (uid, callback) {

}

/**
 * 通报舆情
 * @param uid
 * @param object {Array} 通报对象，用户ID列表
 * @param callback {Function}  回调函数(err)
 */
function notifyPubVoices(uid, object, callback) {

}