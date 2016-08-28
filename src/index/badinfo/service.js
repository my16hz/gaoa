/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    listBadInfo: listBadInfo
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