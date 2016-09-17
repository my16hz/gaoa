/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var xlsx = require('xlsx');


var dbpool = require('../../utilities/dbpool');

module.exports = {
    getSocialVoices: getSocialVoices,
    findSocialVoiceDetail: findSocialVoiceDetail,
    saveSocialVoice: saveSocialVoice,
    updateSocialVoice: updateSocialVoice,
    acceptSocialVoice: acceptSocialVoice,
    saveSVReport: saveSVReport,
    getSVReport: getSVReport
};

function getSocialVoices (uid, priority, callback) {
    var params = {};
    var sql_stmt = "select * from tb_socialvoice ";
    var ps = null;

    if (priority != 1) {
        sql_stmt += ' where createuser = @uid ';
        params['uid'] = uid;
    }

    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
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

function findSocialVoiceDetail (voice_id, callback) {
    var sql_stmt = "SELECT * FROM tb_socialvoice where [id] = " + voice_id;
    var objParams = {};
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(objParams, function (err, recordset) {
                callback(err, recordset);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function saveSocialVoice (objParams, callback) {
    var sql_stmt = 'INSERT INTO tb_socialvoice ([title], [origin_content], [report_content], [reportuser], [department], [state], [createuser], [createtime]) ' +
        'VALUES (@title, @origin_content, @report_content, @reportuser, @department, @state, @createuser, @createtime);';

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("state", sql.Int)
        .input("title", sql.NVarChar)
        .input("origin_content", sql.NVarChar)
        .input("report_content", sql.NVarChar)
        .input("reportuser", sql.NVarChar)
        .input("department", sql.NVarChar)
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

function updateSocialVoice (obj, callback) {
    var sql_stmt = "UPDATE tb_socialvoice SET [title] = @title, [origin_content] = @origin_content, [report_content] = @report_content  WHERE [id] = @id; ";
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("title", sql.NVarChar)
        .input("origin_content", sql.NVarChar)
        .input("report_content", sql.NVarChar)
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

function _updateSoialVoiceState (ids, state, callback) {
    var sql_stmt = "UPDATE tb_socialvoice SET [state] = @state WHERE [id] IN (" + ids + ");";
    var params = {
        "state": state
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("state", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(params, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function acceptSocialVoice (ids, callback) {
    _updateSoialVoiceState(ids, 2, callback);
}

function saveSVReport (report, callback) {
    var sql_stmt = 'INSERT INTO tb_sv_report ([title], [content], [svids], [createuser], [createtime]) ' +
        'VALUES (@title, @content, @svids, @createuser, @createtime);' +
        "UPDATE tb_socialvoice SET [state] = 1 WHERE [id] IN (" + report["svids"] + ");";

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("title", sql.NVarChar)
        .input("content", sql.NVarChar)
        .input("svids", sql.VarChar)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(report, function (err, rs) {
                callback(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function getSVReport (callback) {
    var params = {};
    var sql_stmt = "select * from tb_sv_report;";
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

