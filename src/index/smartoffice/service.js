/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../utilities/dbpool');

module.exports = {
    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg,
    updateSendMsg: updateSendMsg,
    removeSendMsg: removeSendMsg,
    commitSendMsg: commitSendMsg,
    getSendMsgTemplate: getSendMsgTemplate
};

function getSendMsg (callback) {
    var params = {};
    var sql_stmt = "select * from tb_so_sendmessage order by createtime desc;";

    console.log(sql_stmt);

    var ps = dbpool.preparedStatement()
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

function saveSendMsg(obj, callback) {
    var sql_stmt = 'INSERT INTO tb_so_sendmessage ([title],[major_department],[cc_department],[message_id],' +
                    '[secret_level],[urgent_level],[dispose_user],[draft_user],[copies],' +
                    '[content],[keyword],[state],[createuser],[createtime]) ' +
                    'VALUES (@title, @major_department, @cc_department, @message_id, ' +
                    '@secret_level, @urgent_level, @dispose_user, @draft_user, @copies,' +
                    '@content, @keyword, @state, @createuser, @createtime);' +
                    "UPDATE tb_sys_config SET [value] = @smartoffice_sendmessage_id WHERE [id] = 'smartoffice_sendmessage_id';";
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("title", sql.NVarChar)
        .input("major_department", sql.NVarChar)
        .input("cc_department", sql.NVarChar)
        .input("message_id", sql.NVarChar)
        .input("secret_level", sql.NVarChar)
        .input("urgent_level", sql.NVarChar)
        .input("dispose_user", sql.NVarChar)
        .input("draft_user", sql.NVarChar)
        .input("copies", sql.Int)
        .input("content", sql.NVarChar)
        .input("keyword", sql.NVarChar)
        .input("state", sql.Int)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("smartoffice_sendmessage_id", sql.VarChar)
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

function updateSendMsg(obj, callback) {
    var sql_stmt = "UPDATE tb_so_sendmessage SET [sign] = @sign, [countersign] = @countersign, [state] = 2 " +
                    "WHERE id = @id; ";
    var objParams = {
        "sign" : obj["sign"]

    }
}

function removeSendMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_so_sendmessage WHERE id in (%ids%);";

    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function commitSendMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "UPDATE tb_so_sendmessage SET [state] = 1 WHERE id in ( %ids% ); ";
    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function getSendMsgTemplate(callback) {
    var sql_stmt = "SELECT * FROM tb_sys_config WHERE id in ('smartoffice_sendmessage_id');";
    var objParams = {};
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                var rs = {};
                recordset.forEach(function (val) {
                    rs[val.id] = val.value;
                });

                callback(err, rs);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}