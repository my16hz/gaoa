/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var extend = require('extend');
var sql = require('mssql');
var xlsx = require('xlsx');
var xss = require('xss');

var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /**
     * 查询舆情列表
     * @param uid {String} 用户ID
     * @param priority {Number} 用户priority  1 - 市级 2 - 县级
     * @param field {String} 排序域
     * @param order {String} 排序顺序ASC,DESC
     * @param callback {Function} 回调函数(err, [])
     */
    findPubVoiceList: findPubVoiceList,
    /**
     * 查询舆情详情
     * @param uid {String}
     * @param pvids {Array} 舆情ID数组
     * @param callback {Function} 回调函数(err, object)
     */
    findPubVoiceDetail: findPubVoiceDetail,
    /**
     * 添加舆情
     * @param uid {String} 用户ID
     * @param obj [Object]  舆情详情数组
     * @param callback {Function}  回调函数(err)
     */
    addPubVoices: addPubVoices,
    /**
     * 导入舆情
     * @param uid 用户ID
     * @param path 舆情文件路径
     * @param callback
     */
    importPubVoices: importPubVoices,
    /**
     * 删除舆情
     * @param uid {Number}
     * @param pvids {Array} 舆情ID数组
     * @param callback {Function}  回调函数(err)
     */
    removePubVoices: removePubVoices,

    updatePubVoice: updatePubVoice,
    /**
     * 提交审批
     * @param pvids  {Array} 舆情ID数组
     * @param callback {Function}  回调函数(err)
     */
    commitApproval: commitApproval
};

function findPubVoiceList (uid, priority, field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_publicvoice ";
    var ps = null;

    if (priority != 1) {
        sql_stmt += ' where createuser = @uid ';
        params['uid'] = uid;
    }

    if (field) {
        sql_stmt += " order by " + field + " " + order;
    }

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .input("field", sql.VarChar)
        .input("order", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, []);
            }

            ps.execute(params, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function findPubVoiceDetail (pvids, callback) {
    var sql_stmt = "select * from tb_publicvoice where id in (" + pvids + ")";
    var ps = null;

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute({}, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function addPubVoices (uid, obj, callback) {
    var sql_stmt = "INSERT INTO tb_publicvoice (" +
        "[title],[createtime],[item],[type],[relate_department]," +
        "[duty_department],[fellow_count],[review_count],[content],[from_website],[url],[state]," +
        "[approved_state],[dispose_stat],[feedback_state],[createuser]" +
        ") VALUES (" +
        "@title,@createtime,@item,@type,@relate_department," +
        "@duty_department,@fellow_count,@review_count,@content,@from_website,@url,@state," +
        "@approved_state,@dispose_stat,@feedback_state,@createuser)";
    var objParams = extend({}, obj, {
        createtime: new Date(),
        createuser: uid
    });
    var ps = null;

    objParams.content = xss(objParams.content);

    ps = dbpool.preparedStatement()
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

function importPubVoices (uid, gid, path, callback) {
    var workbook = xlsx.readFile(path); //当前excel名字
    var worksheet = workbook.Sheets["Sheet1"];
    var pubvoices = xlsx.utils.sheet_to_json(worksheet, {});
    var pvList = [];

    pubvoices.forEach(function (pv) {
        var obj = {};

        obj["title"] = pv["标题"];
        obj["createtime"] = new Date();
        obj["item"] = pv["所属栏目"];
        obj["type"] = pv["舆情类别"];
        obj["relate_department"] = pv["涉及部门"];
        obj["duty_department"] = gid;
        obj["fellow_count"] = pv["回帖数量"];
        obj["review_count"] = pv["关注人数"];
        obj["content"] = xss(pv["帖文内容"]);
        obj["from_website"] = pv["载体"];
        obj["url"] = pv["网址"];
        obj["state"] = 0;
        obj["approved_state"] = 0;
        obj["dispose_stat"] = 0;
        obj["feedback_state"] = 0;
        obj["createuser"] = uid;

        pvList.push(obj);
    });

    _addBulkPubVoices(pvList, callback);
}

function removePubVoices (pvids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_publicvoice WHERE id in (%pvids%);";
    var ps = null;

    sql_stmt = sql_stmt.replace("%pvids%", "\'" + pvids.join("\',\'") + "\'");

    ps = dbpool.preparedStatement()
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

function updatePubVoice (pvid, obj, callback) {
    _updatePVState([pvid], obj, callback);
}

function commitApproval (pvids, callback) {
    _updatePVState(pvids, {'state': 1}, callback);
}

/**
 * 批量添加舆情
 * @param uid {String} 用户ID
 * @param obj [Arrays]  舆情详情数组
 * @param callback {Function}  回调函数(err)
 */
function _addBulkPubVoices (objs, callback) {
    var table = dbpool.table('tb_publicvoice');

    table.columns.add("title", sql.NVarChar, {nullable: true});
    table.columns.add("createtime", sql.DateTime2, {nullable: true});
    table.columns.add("item", sql.NVarChar, {nullable: true});
    table.columns.add("type", sql.NVarChar, {nullable: true});
    table.columns.add("relate_department", sql.NVarChar, {nullable: true});
    table.columns.add("duty_department", sql.NVarChar, {nullable: true});
    table.columns.add("fellow_count", sql.Int, {nullable: true});
    table.columns.add("review_count", sql.Int, {nullable: true});
    table.columns.add("content", sql.NVarChar, {nullable: true});
    table.columns.add("from_website", sql.NVarChar, {nullable: true});
    table.columns.add("url", sql.NVarChar, {nullable: true});
    table.columns.add("state", sql.Int, {nullable: true});
    table.columns.add("approved_state", sql.Int, {nullable: true});
    table.columns.add("dispose_stat", sql.Int, {nullable: true});
    table.columns.add("feedback_state", sql.Int, {nullable: true});
    table.columns.add("createuser", sql.VarChar, {nullable: true});

    objs.forEach(function (value) {
        table.rows.add(value["title"],
            value["createtime"],
            value["item"],
            value["type"],
            value["relate_department"],
            value["duty_department"],
            value["fellow_count"],
            value["review_count"],
            value["content"],
            value["from_website"],
            value["url"],
            value["state"],
            value["approved_state"],
            value["dispose_stat"],
            value["feedback_state"],
            value["createuser"]);
    });

    dbpool.createRequest()
        .bulk(table, function (err, count) {
            callback(err, err ? false : count);
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
    var sql_stmt = "UPDATE tb_publicvoice SET %sets% WHERE id in (%pvids%);";
    var objParams = {};
    var sets = [];

    for (var k in state) {
        sets.push(k + " = '" + state[k] + "'");
    }

    sql_stmt = sql_stmt.replace('%sets%', sets.join(','));
    sql_stmt = sql_stmt.replace('%pvids%', '\'' + pvids.join('\',\'') + '\'');

    console.log(sql_stmt);

    var ps = dbpool.preparedStatement()
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