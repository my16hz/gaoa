/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');
var pubvoiceRecord = require("./record.service")

module.exports = {
    /*---------- 舆情日报页面 ----------*/
    /* 查询舆情日报列表 */
    findDailyList: findDailyList,
    /* 查询日报详情 */
    findDailyDetail: findDailyDetail,
    /* 创建日报 */
    createDaily: createDaily,
    /* 更新日报 */
    updateDaily: updateDaily,
    /* 获取日报当前期数 */
    getCurrentDailyID: getCurrentDailyID,
    /* 查询日报中舆情列表 */
    getDailyPVList: getDailyPVList,
    getLatestDailyPVList: getLatestDailyPVList,

    /* 获取未入报的舆情，包括审批通过和有回复 */
    getUnappliedPubVoices: getUnappliedPubVoices,

    /**
     * 删除日报，并将对应的舆情状态设置为审批通过(2)
     */
    deleteDailyReport: deleteDailyReport
};


/**
 * 查询日报列表
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList (field, order, callback) {
    var sql_stmt = "SELECT TOP 1000 * FROM tb_daily ";
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
    var sql_stmt = "SELECT TOP 1000 * FROM tb_daily where id = " + daily_ids;
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

function _ArrayUnique(a) {
    return a.concat().sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
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
    var sql_stmt =
        "IF NOT EXISTS (SELECT * FROM tb_daily WHERE id = @id AND type = @type) " +
        "    INSERT INTO tb_daily ([id],[issue_id],[content],[createuser],[createtime],[pvids],[type]) VALUES (@id, @issue_id, @content, @createuser, @createtime, @pvids, @type); " +
        "ELSE " +
        "    UPDATE tb_daily SET [issue_id] = @issue_id, [content] = @content, [createuser] = @createuser, [pvids] = @pvids WHERE [id] = @id AND [type] = @type; ";
    if (daily['type'] == 0) {
        sql_stmt += "UPDATE tb_sys_config SET [value] = @id WHERE [id] = 'daily_id';" +
            "UPDATE tb_sys_config SET [value] = @issue_id WHERE [id] = 'daily_issue_id';";
    } else if (daily['type'] == 1) {
        sql_stmt += "UPDATE tb_sys_config SET [value] = @id WHERE [id] = 'report_id';" +
            "UPDATE tb_sys_config SET [value] = @issue_id WHERE [id] = 'report_issue_id';";
    }

    sql_stmt += "DELETE FROM tb_daily_pv WHERE [did] = @id AND [type] = @type;";
    var pvids = _ArrayUnique(daily["pvids"].split(","));
    var daily_pv = [];
    for(var idx in pvids) {
        daily_pv.push("("+ daily['id'] + "," + pvids[idx] + "," + daily['type'] +")");
    }
    sql_stmt += "INSERT INTO tb_daily_pv ([did], [pvid], [type]) VALUES " + daily_pv.join() + ";";
    sql_stmt += "UPDATE tb_publicvoice SET [state] = 4,[feedback_state] = 2 WHERE [id] in (" + daily["pvids"] + ");";
    console.log(sql_stmt);
    var objParams = {
        "id": daily["id"],
        "issue_id": daily["issue_id"],
        "content": daily["content"],
        "createuser": uid,
        "createtime": new Date(),
        "pvids": daily["pvids"],
        "type": daily["type"]
    };
    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("issue_id", sql.Int)
        .input("type", sql.Int)
        .input("content", sql.NVarChar(sql.MAX))
        .input("createuser", sql.VarChar)
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

function updateDaily (daily, callback) {

}

/**
 * 获取日报当前期号
 * @param callback {Function}  回调函数(err, {issue_id:{Number}舆情期数, id:总期数})
 */
function getCurrentDailyID (callback) {
    var sql_stmt = "SELECT * FROM tb_sys_config WHERE id in ('daily_id', 'daily_issue_id', 'report_id', 'report_issue_id');";
    var objParams = {};
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                var rs = {}
                recordset.forEach(function (val) {
                    rs[val.id] = val.value;
                })

                callback(err, rs)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function getDailyPVList (did, callback) {
    var sql_stmt = "SELECT TOP 1000 tb_publicvoice.*, tb_daily_pv.did AS daily_id " +
        " FROM tb_daily_pv, tb_publicvoice " +
        " WHERE tb_daily_pv.pvid = tb_publicvoice.id AND tb_daily_pv.did = @did;";
    console.log(sql_stmt);
    var objParams = {'did': did};
    var ps = dbpool.preparedStatement()
        .input('did', sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                callback(err, rs);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function getLatestDailyPVList (callback) {
    var sql_stmt = "SELECT TOP 1000 tb_publicvoice.*, tb_daily_pv.did AS daily_id " +
        " FROM tb_daily_pv, tb_publicvoice " +
        " WHERE tb_daily_pv.pvid = tb_publicvoice.id AND tb_daily_pv.did IN ( SELECT TOP 1 id FROM tb_daily ORDER BY createtime DESC);";
    var objParams = {};
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                callback(err, rs);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function getUnappliedPubVoices (start, end, callback) {
    var sql_stmt = " SELECT * FROM tb_publicvoice WHERE state = 2 AND createtime > @start AND createtime < @end ORDER BY createtime DESC; ";
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
            ps.execute(objParams, function (err, rs) {
                callback(err, rs);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}


function deleteDailyReport (did, type, pvids, callback) {
    var sql_stmt = "DELETE FROM tb_daily_pv WHERE [did] = @did AND [type] = @type; " +
        "DELETE FROM tb_daily WHERE [id] = @did AND [type] = @type;" +
        "UPDATE tb_publicvoice SET [state] = 2 WHERE [id] in ( %pvids% );";
    sql_stmt = sql_stmt.replace("%pvids%", "\'" + pvids.join("\',\'") + "\'");
    var objParams = {
        "did": did,
        "type": type
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input('did', sql.Int)
        .input('type', sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, false);
            }

            ps.execute(objParams, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}
