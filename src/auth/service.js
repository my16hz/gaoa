/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var dbpool = require("../utilities/dbpool");

module.exports = {
    auth:auth
};

/**
 * 用户登陆校验
 * @param username {String}
 * @param password {String}
 * @returns object {uid, gid, role:[]}
 */
function auth(username, password , cb) {
    sql_stmt = "select * from tb_user where name = '" + username + "' and password = '" + password + "';";
    dbpool
        .createRequest()
        .query(sql_stmt, function (err, rs) {
            if (err) console.log(err);
            cb(err, rs);
        });
}