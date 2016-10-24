/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var xlsx = require('xlsx');

var dbpool = require('../../utils/dbpool');

module.exports = {
    getSocialVoices: getSocialVoices,
    saveSocialVoice: saveSocialVoice,
    updateSocialVoice: updateSocialVoice,
    acceptSocialVoice: acceptSocialVoice,
    importSocialVoice: importSocialVoice,
    deleteSocialVoice: deleteSocialVoice,

    saveSVReport: saveSVReport,
    getSVReport: getSVReport,
    getSVReportDetail: getSVReportDetail,


    statisticUser: statisticUser,
    statisticGroup: statisticGroup,
    statisticAcceptUser: statisticAcceptUser,
    statisticAcceptGroup: statisticAcceptGroup
};

function getSocialVoices (user, start, end, callback) {
    var params = {
        "start": start,
        "end": end
    };
    var sql_stmt = "SELECT * FROM tb_socialvoice WHERE createtime > @start AND createtime < @end ";
    var ps = null;

    if (user.priority != 1) {
        sql_stmt += ' AND createuser = @uid ';
        params['uid'] = user.uid;
    }

    sql_stmt += " ORDER BY createtime DESC;";
    console.log(sql_stmt);

    ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .input("start", sql.DateTime)
        .input("end", sql.DateTime)
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

function saveSocialVoice (objParams, callback) {
    var sql_stmt = 'INSERT INTO tb_socialvoice ([title], [origin_content], [report_content], [reportuser], [department], [state], [createuser], [createtime]) ' +
        'VALUES (@title, @origin_content, @report_content, @reportuser, @department, @state, @createuser, @createtime);';

    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("state", sql.Int)
        .input("title", sql.NVarChar)
        .input("origin_content", sql.NVarChar(sql.MAX))
        .input("report_content", sql.NVarChar(sql.MAX))
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
        .input("origin_content", sql.NVarChar(sql.MAX))
        .input("report_content", sql.NVarChar(sql.MAX))
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
        .input("content", sql.NVarChar(sql.MAX))
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
    var sql_stmt = "select top 1000 * from tb_sv_report order by createtime desc;";
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

function getSVReportDetail (voice_id, callback) {
    var sql_stmt = "SELECT TOP 1000 * FROM tb_sv_report where [id] = " + voice_id;
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

function statisticUser (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 reportuser AS name, COUNT(*) AS count " +
        "FROM tb_socialvoice " +
        "WHERE tb_socialvoice.createtime > @start AND tb_socialvoice.createtime < @end " +
        "GROUP BY tb_socialvoice.reportuser;";
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

function statisticGroup (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 tb_group.name, COUNT(*) AS count " +
        " FROM tb_socialvoice,tb_user,tb_group " +
        " WHERE tb_socialvoice.createuser = tb_user.id AND tb_user.groupid = tb_group.id " +
        "       AND tb_socialvoice.createtime > @start AND tb_socialvoice.createtime < @end " +
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


function statisticAcceptUser (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 reportuser AS name, COUNT(*) AS count " +
        "FROM tb_socialvoice " +
        "WHERE tb_socialvoice.createtime > @start AND tb_socialvoice.createtime < @end " +
        "       AND state = 2 " +
        "GROUP BY tb_socialvoice.reportuser;";
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

function statisticAcceptGroup (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 tb_group.name, COUNT(*) AS count " +
        " FROM tb_socialvoice,tb_user,tb_group " +
        " WHERE tb_socialvoice.createuser = tb_user.id AND tb_user.groupid = tb_group.id " +
        "       AND tb_socialvoice.createtime > @start AND tb_socialvoice.createtime < @end " +
        "       AND state = 2 " +
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

function importSocialVoice (user, path, callback) {
        var workbook = xlsx.readFile(path); //当前excel名字
        var worksheet = workbook.Sheets["Sheet1"];
        var socvoices = xlsx.utils.sheet_to_json(worksheet, {});
        var svList = [];

        socvoices.forEach(function (pv) {
            var obj = {};
            obj["title"] = pv["社情标题"];
            obj["origin_content"] = pv["社情内容"];
            obj['report_content'] = '';
            obj["reportuser"] = user.name;
            obj['department'] = pv["单位"];
            obj['state'] = 0;
            obj['createuser'] = user.id;
            obj['createtime'] = new Date();

            svList.push(obj);
        });

        _addBulkSocialVoices(svList, callback);
    }

function _addBulkSocialVoices (objs, callback) {
    var table = dbpool.table('tb_socialvoice');

    table.columns.add("title", sql.NVarChar, {nullable: true});
    table.columns.add("origin_content", sql.NVarChar(sql.MAX), {nullable: true});
    table.columns.add("report_content", sql.NVarChar(sql.MAX), {nullable: true});
    table.columns.add("reportuser", sql.NVarChar, {nullable: true});
    table.columns.add("department", sql.NVarChar, {nullable: true});
    table.columns.add("state", sql.Int, {nullable: true});
    table.columns.add("createuser", sql.VarChar, {nullable: true});
    table.columns.add("createtime", sql.DateTime, {nullable: true});
    objs.forEach(function (value) {
        table.rows.add(value["title"],
            value["origin_content"],
            value["report_content"],
            value["reportuser"],
            value["department"],
            value["state"],
            value["createuser"],
            value["createtime"])
    });

    dbpool.createRequest()
        .bulk(table, function (err, count) {
            callback(err, err ? false : count);
        });
}

function deleteSocialVoice(ids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_socialvoice WHERE id in (%ids%);";
    var ps = null;

    sql_stmt = sql_stmt.replace("%ids%", "\'" + ids.join("\',\'") + "\'");

    console.log(sql_stmt);
    ps = dbpool.preparedStatement()
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