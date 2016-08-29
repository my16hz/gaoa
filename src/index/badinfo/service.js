/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../utilities/dbpool');

module.exports = {
    listBadInfo: listBadInfo,
    saveBadInfo: saveBadInfo,
    deleteBadInfo: deleteBadInfo,

    listRTX: listRTX,
    saveRTX: saveRTX,
    deleteRTX: deleteRTX
};

function listBadInfo (field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_badinfo ";
    var ps = null;

    if (field) {
        sql_stmt += " order by " + field + " " + order;
    }

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
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

function saveBadInfo (obj, callback) {
    var sql_stmt = 'DELETE FROM tb_badinfo WHERE id in (@id); INSERT INTO tb_badinfo ([website], [url], [reportdate], [department], [username], [duty_zone], [type], [sn], [remark], [createuser], [createtime]) ' +
        'VALUES (@website, @url, @reportdate, @department, @username, @duty_zone, @type, @sn, @remark, @createuser, @createtime);';
    var objParams = {
        'id': obj['id'] == '' ? 0 : obj['id'],
        'website': obj['website'],
        'url': obj['url'],
        'reportdate': obj['reportdate'],
        'department': obj['department'],
        'username': obj['username'],
        'duty_zone': obj['duty_zone'],
        'type': obj['type'],
        'sn': obj['sn'],
        'remark': obj['remark'],
        'createuser': obj['createuser'],
        'createtime': obj['createtime']
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("reportdate", sql.VarChar)
        .input("department", sql.NVarChar)
        .input("username", sql.NVarChar)
        .input("duty_zone", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("sn", sql.NVarChar)
        .input("remark", sql.NVarChar)
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

function deleteBadInfo (dbids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_badinfo WHERE id in (%dbids%);";
    sql_stmt = sql_stmt.replace("%dbids%", "\'" + dbids.join("\',\'") + "\'");
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

function listRTX (field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_rtx ";
    var ps = null;

    if (field) {
        sql_stmt += " order by " + field + " " + order;
    }

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
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

function saveRTX (obj, callback) {
    var sql_stmt = 'DELETE FROM tb_rtx WHERE id in (@id); ' +
        'INSERT INTO tb_rtx ([rtx_time], [website], [url], [department], [type], [content], [result], [duty_user], [remark], [createuser], [createtime])  ' +
        'VALUES (@rtx_time, @website, @url, @department, @type, @content, @result, @duty_user, @remark, @createuser, @createtime);';
    var objParams = {
        'id': obj['id'] == ''? 0 : obj['id'],
        "rtx_time": obj['rtx_time'],
        "website": obj['website'],
        "url": obj['url'],
        "department": obj['department'],
        "type": obj['type'],
        "content": obj['content'],
        "result": obj['result'],
        "duty_user": obj['duty_user'],
        "remark": obj['remark'],
        "createuser": obj['createuser'],
        "createtime": obj['createtime']
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("rtx_time", sql.Date)
        .input("department", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("content", sql.NVarChar)
        .input("result", sql.NVarChar)
        .input("duty_user", sql.NVarChar)
        .input("remark", sql.NVarChar)
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


function deleteRTX (dbids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_rtx WHERE id in (%dbids%);";
    sql_stmt = sql_stmt.replace("%dbids%", "\'" + dbids.join("\',\'") + "\'");
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