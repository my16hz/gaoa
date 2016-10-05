/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require("../utils/dbpool");

module.exports = {
    auth: auth
};

/**
 * 用户登陆校验
 * @param username {String}
 * @param password {String}
 * @returns object {uid, gid, role:[], priority,}
 */
function auth (username, password, done) {
    dbpool.execPreparedStatement(
        "SELECT [id],[name],[description],[role],[priority],[createtime],[groupid] " +
        "FROM tb_user WHERE id = @username AND password = @password;",
        [sql.VarChar, sql.VarChar],
        [username, password],
        function (err, rs) {
            done(err, err ? null : rs[0]);
        }
    );
}