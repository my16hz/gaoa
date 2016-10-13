/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');
var xlsx = require('xlsx');
var dbpool = require('../../utils/dbpool');

module.exports = {
    listBadInfo: listBadInfo,
    saveBadInfo: saveBadInfo,
    deleteBadInfo: deleteBadInfo,
    importBadInfo: importBadInfo,

    listRTX: listRTX,
    saveRTX: saveRTX,
    deleteRTX: deleteRTX,

    listRTXReport: listRTXReport,
    saveRTXReport: saveRTXReport,
    deleteRTXReport: deleteRTXReport,

    aggregateWebsite: aggregateWebsite,
    aggregateReporter: aggregateReporter,
    aggregateDepartment: aggregateDepartment,
    aggregateZone: aggregateZone,
    aggregateType: aggregateType,
    aggregateCreater: aggregateCreater
};

function listBadInfo (uid, priority, field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_badinfo ";
    if (priority != 1) {
        sql_stmt += ' where createuser = @uid ';
        params['uid'] = uid;
    }
    if (field) {
        sql_stmt += " order by " + field + " " + order;
    }

    console.log(sql_stmt);

    var ps = dbpool.preparedStatement()
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

function saveBadInfo (obj, callback) {
    var sql_stmt = 'IF NOT EXISTS (SELECT * FROM tb_badinfo WHERE id = @id) ' +
        '    INSERT INTO tb_badinfo ([website], [url], [reportdate], [department], [username], [duty_zone], [type], [sn], [remark], [createuser], [createtime]) ' +
        '    VALUES (@website, @url, @reportdate, @department, @username, @duty_zone, @type, @sn, @remark, @createuser, @createtime);' +
        'ELSE ' +
        '   UPDATE tb_badinfo SET [website] = @website, [url] = @url, [reportdate] = @reportdate, ' +
        '   [department] = @department, [username] = @username, [duty_zone] = @duty_zone, ' +
        '   [type] = @type, [sn] = @sn, [remark] = @remark ' +
        '   WHERE id = @id;';
    var objParams = {
        'id': obj['id']?obj['id']:0,
        'website': obj['website'],
        'url': obj['url'],
        'reportdate': obj['reportdate'],
        'department': obj['department'],
        'username': obj['username'],
        'duty_zone': obj['duty_zone'],
        'type': obj['type'],
        'sn': obj['sn'],
        'remark': obj['remark'],
        'createuser': obj['createuser'],
        'createtime': obj['createtime']
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("reportdate", sql.VarChar)
        .input("department", sql.NVarChar)
        .input("username", sql.NVarChar)
        .input("duty_zone", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("sn", sql.NVarChar)
        .input("remark", sql.NVarChar(sql.MAX))
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


function importBadInfo (user, path, callback) {
    var workbook = xlsx.readFile(path); //当前excel名字
    var worksheet = workbook.Sheets["Sheet1"];
    var socvoices = xlsx.utils.sheet_to_json(worksheet, {});
    var svList = [];

    socvoices.forEach(function (pv) {
        var obj = {};
        obj['website'] = pv['网站名称'];
        obj['url'] = pv['网址'];
        obj['reportdate'] = pv['时间'];
        obj['department'] = pv['单位'];
        obj['username'] = user.name;
        obj['duty_zone'] = pv['所属地域'];
        obj['type'] = pv['危害类型'];
        obj['sn'] = pv['举报查询码'];
        obj['remark'] = pv['备注'];
        obj['createuser'] = user.id;
        obj['createtime'] = new Date();

        svList.push(obj);
    });

    _addBulkBadInfo(svList, callback);
}

function _addBulkBadInfo (objs, callback) {
    var table = dbpool.table('tb_badinfo');

    table.columns.add("website", sql.NVarChar, {nullable: true});
    table.columns.add("url", sql.NVarChar, {nullable: true});
    table.columns.add("reportdate", sql.VarChar, {nullable: true});
    table.columns.add("department", sql.NVarChar, {nullable: true});
    table.columns.add("username", sql.NVarChar, {nullable: true});
    table.columns.add("duty_zone", sql.NVarChar, {nullable: true});
    table.columns.add("type", sql.NVarChar, {nullable: true});
    table.columns.add("sn", sql.NVarChar, {nullable: true});
    table.columns.add("remark", sql.NVarChar(sql.MAX), {nullable: true});
    table.columns.add("createuser", sql.VarChar, {nullable: true});
    table.columns.add("createtime", sql.DateTime, {nullable: true});

    objs.forEach(function (value) {
        table.rows.add(value["website"],
            value["url"],
            value["reportdate"],
            value["department"],
            value["username"],
            value["duty_zone"],
            value["type"],
            value["sn"],
            value["remark"],
            value["createuser"],
            value["createtime"])
    });

    dbpool.createRequest()
        .bulk(table, function (err, count) {
            callback(err, err ? false : count);
        });
}

function deleteBadInfo (dbids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_badinfo WHERE id in (%dbids%);";
    sql_stmt = sql_stmt.replace("%dbids%", dbids);
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

function listRTX (field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_rtx ";
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

function saveRTX (obj, callback) {
    var sql_stmt = 'DELETE FROM tb_rtx WHERE id in (@id); ' +
        'INSERT INTO tb_rtx ([rtx_time], [department], [type], [content], [result], [duty_user], [remark], [createuser], [createtime])  ' +
        'VALUES (@rtx_time, @department, @type, @content, @result, @duty_user, @remark, @createuser, @createtime);';
    var objParams = {
        'id': obj['id'] == ''? 0 : obj['id'],
        "rtx_time": obj['rtx_time'],
        "department": obj['department'],
        "type": obj['type'],
        "content": obj['content'],
        "result": obj['result'],
        "duty_user": obj['duty_user'],
        "remark": obj['remark'],
        "createuser": obj['createuser'],
        "createtime": obj['createtime']
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("rtx_time", sql.Date)
        .input("department", sql.NVarChar)
        .input("type", sql.NVarChar)
        .input("content", sql.NVarChar)
        .input("result", sql.NVarChar)
        .input("duty_user", sql.NVarChar)
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


function deleteRTX (dbids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_rtx WHERE id in (%dbids%);";
    sql_stmt = sql_stmt.replace("%dbids%", "\'" + dbids.join("\',\'") + "\'");
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


function listRTXReport (field, order, callback) {
    var params = {};
    var sql_stmt = "select * from tb_rtx_report ";
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

function saveRTXReport (obj, callback) {
    var sql_stmt = 'DELETE FROM tb_rtx_report WHERE id in (@id); ' +
        'INSERT INTO tb_rtx_report ([report_time], [website], [url], [report_user], [remark], [createuser], [createtime])  ' +
        'VALUES (@report_time, @website, @url, @report_user, @remark, @createuser, @createtime);';
    var objParams = {
        'id': obj['id'] == ''? 0 : obj['id'],
        'report_time' : obj['report_time'],
        'website' : obj['website'],
        'url' : obj['url'],
        'report_user' : obj['report_user'],
        'remark' : obj['remark'],
        'createuser' : obj['createuser'],
        'createtime' : obj['createtime']
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("report_time", sql.Date)
        .input("website", sql.NVarChar)
        .input("url", sql.NVarChar)
        .input("report_user", sql.NVarChar)
        .input("remark", sql.NVarChar(sql.MAX))
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

function deleteRTXReport (dbids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_rtx_report WHERE id in (%dbids%);";
    sql_stmt = sql_stmt.replace("%dbids%", "\'" + dbids.join("\',\'") + "\'");
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

function aggregateWebsite (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 website, COUNT(*) AS count FROM tb_badinfo " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY website;";
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


function aggregateReporter (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 username, COUNT(*) AS count FROM tb_badinfo " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY username;";
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

function aggregateDepartment (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 department, COUNT(*) AS count FROM tb_badinfo " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY department;";
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

function aggregateZone (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 duty_zone, COUNT(*) AS count FROM tb_badinfo " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY duty_zone;";
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

function aggregateType (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 type, COUNT(*) AS count FROM tb_badinfo " +
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

function aggregateCreater (start, end, callback) {
    var sql_stmt = "SELECT TOP 100 createuser, COUNT(*) AS count FROM tb_badinfo " +
        "WHERE createtime > @start AND createtime < @end " +
        "GROUP BY createuser;";
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