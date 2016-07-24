/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require("../utilities/dbpool");

module.exports = {
    auth: auth
};

/**
 * 用户登陆校验
 * @param username {String}
 * @param password {String}
 * @returns object {uid, gid, role:[]}
 */
function auth (username, password, done) {
    var sql_stmt = "select * from tb_user where id = @username and password = @password;";
    var objParams = {"username": username, "password": password};

    var ps = dbpool
        .preparedStatement()
        .input("username", sql.VarChar)
        .input("password", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, err ? null : rs[0]);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}