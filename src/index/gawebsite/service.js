/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../utils/dbpool');

module.exports = {
    getWebsite: getWebsite,

    saveWebsite: saveWebsite,
    updateWebsite: updateWebsite
};

function getWebsite (start, end, callback) {
    var sql_stmt = "SELECT * FROM tb_gawebsite WHERE createtime > @start AND createtime < @end ORDER BY createtime DESC;";
    var inputs = [sql.DateTime, sql.DateTime];
    var values = [start, end];

    console.log(sql_stmt);

    dbpool.execPreparedStatement(sql_stmt, inputs, values, callback);
}


function saveWebsite (objParams, callback) {
    var sql_stmt = 'INSERT INTO tb_gawebsite ([website], [url], [type], [zone], [record], [is_interaction], [duty_department], [duty_department_call], [duty_user], [duty_user_call], [duty_user_qq], [server_zone], [server_network], [remark], [createuser], [createtime]) ' +
        'VALUES (@website, @url, @type, @zone, @record, @is_interaction, @duty_department, @duty_department_call, @duty_user, @duty_user_call, @duty_user_qq, @server_zone, @server_network, @remark, @createuser, @createtime);';

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("zone", sql.NVarChar)
        .input("record", sql.NVarChar)
        .input("is_interaction", sql.NVarChar)
        .input("duty_department", sql.NVarChar)
        .input("duty_department_call", sql.NVarChar)
        .input("duty_user", sql.NVarChar)
        .input("duty_user_call", sql.NVarChar)
        .input("duty_user_qq", sql.NVarChar)
        .input("server_zone", sql.NVarChar)
        .input("server_network", sql.NVarChar)
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

function updateWebsite (obj, callback) {
    var sql_stmt = "UPDATE tb_gawebsite SET [type] = @type, [zone] = @zone, [record] = @record, [is_interaction] = @is_interaction, [duty_department] = @duty_department, [duty_department_call] = @duty_department_call, [duty_user] = @duty_user, [duty_user_call] = @duty_user_call, [duty_user_qq] = @duty_user_qq, [server_zone] = @server_zone, [server_network] = @server_network, [remark] = @remark WHERE [id] = @id; ";
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("zone", sql.NVarChar)
        .input("record", sql.NVarChar)
        .input("is_interaction", sql.NVarChar)
        .input("duty_department", sql.NVarChar)
        .input("duty_department_call", sql.NVarChar)
        .input("duty_user", sql.NVarChar)
        .input("duty_user_call", sql.NVarChar)
        .input("duty_user_qq", sql.NVarChar)
        .input("server_zone", sql.NVarChar)
        .input("server_network", sql.NVarChar)
        .input("remark", sql.NVarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(obj, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}