/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../utilities/dbpool');

module.exports = {
    getSendMsg: getSendMsg
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