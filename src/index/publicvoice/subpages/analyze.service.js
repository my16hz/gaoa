/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');
module.exports = {
    getPVItemAnalyze: getPVItemAnalyze,
    getPVTypeAnalyze: getPVTypeAnalyze,
    getPVDutyAnalyze: getPVDutyAnalyze,
    getPVReviewAnalyze: getPVReviewAnalyze,
    getPVFellowAnalyze: getPVFellowAnalyze,

    getPVMissReportAnalyze: getPVMissReportAnalyze,
    getGroupMissAnalyze: getGroupMissAnalyze,

    getFeedbackTypeAnalyze: getFeedbackTypeAnalyze,
    getCommentAnalyze: getCommentAnalyze
};

function getPVItemAnalyze (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 item, COUNT(*) AS count FROM tb_publicvoice " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY item;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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

function getPVTypeAnalyze (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 type, COUNT(*) AS count FROM tb_publicvoice " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY type;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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


function getPVDutyAnalyze (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 tb_group.name,COUNT(tb_publicvoice.duty_department) AS count " +
    " FROM tb_group,tb_publicvoice " +
    " WHERE tb_publicvoice.duty_department=tb_group.id " +
    "   AND tb_publicvoice.createtime > @start " +
    "   AND tb_publicvoice.createtime < @end " +
    " GROUP BY tb_group.name;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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


function getPVReviewAnalyze (start, end, callback) {
    var sql_stmt = "SELECT TOP 10 title, review_count AS count FROM tb_publicvoice " +
        " WHERE createtime > @start AND createtime < @end " +
        " ORDER BY review_count DESC";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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


function getPVFellowAnalyze (start, end, callback) {
    var sql_stmt = "SELECT TOP 10 title, fellow_count AS count FROM tb_publicvoice " +
        " WHERE createtime > @start AND createtime < @end " +
        " ORDER BY fellow_count DESC";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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

function getPVMissReportAnalyze (start, end, callback) {
    var sql_stmt = 'SELECT tb_publicvoice.*, tb_group.name  ' +
        'FROM tb_publicvoice, tb_group ' +
        'WHERE tb_publicvoice.duty_department = tb_group.id ' +
        'AND tb_publicvoice.duty_department IN (SELECT groupid FROM tb_user WHERE priority = 2) ' +
        'AND tb_publicvoice.createuser IN (SELECT id FROM tb_user WHERE priority = 1) ' +
        'AND tb_publicvoice.createtime > @start AND tb_publicvoice.createtime < @end ';
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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

function getGroupMissAnalyze (start, end, callback) {
    var sql_stmt = 'SELECT COUNT(tb_publicvoice.id) AS count, tb_group.name  ' +
        'FROM tb_publicvoice, tb_group ' +
        'WHERE tb_publicvoice.duty_department = tb_group.id ' +
        'AND tb_publicvoice.duty_department IN (SELECT groupid FROM tb_user WHERE priority = 2) ' +
        'AND tb_publicvoice.createuser IN (SELECT id FROM tb_user WHERE priority = 1) ' +
        'AND tb_publicvoice.createtime > @start AND tb_publicvoice.createtime < @end ' +
        'GROUP BY tb_group.name ';
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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

function getFeedbackTypeAnalyze (start, end, callback) {
    var sql_stmt = "SELECT type, COUNT(*) AS count FROM tb_pv_feedback " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY type;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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



function getCommentAnalyze (start, end, callback) {
    var sql_stmt = "SELECT dispose_stat, COUNT(*) AS count FROM tb_publicvoice " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY dispose_stat;";
    var objParams = {
        "start": start,
        "end": end
    };

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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