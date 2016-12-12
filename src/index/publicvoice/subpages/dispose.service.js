/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require('mssql');
var dbpool = require('../../../utils/dbpool');

module.exports = {
    /*---------- 舆情处置页面 ----------*/
    addPVDispose: addPVDispose,
    getPVDispose: getPVDispose,

    getPVListByDisposeState: getPVListByDisposeState,
    getPVCommentDocNO: getPVCommentDocNO,
    getPVComment: getPVComment,
    addPVComment: addPVComment,
    commitComment: commitComment,
    /* 获取待审批的批示 */
    getUnapprovedComment: getUnapprovedComment,
    approveComment: approveComment,
    getCommentList: getCommentList
};


/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVDispose (pvid, comment_id, callback) {
    var sql_stmt = "IF NOT EXISTS (SELECT * FROM tb_pv_dispose WHERE id = @id AND comment_id = @comment_id) " +
                    "   SELECT tb_pv_comment.*,tb_sys_config.id AS config_id, tb_sys_config.value AS config_value FROM tb_pv_comment,tb_sys_config " +
                    "   WHERE tb_pv_comment.id = @id AND tb_pv_comment.comment_id = @comment_id AND  tb_sys_config.id IN ( 'dispose_doc_no', 'dispose_doc_year'); " +
                    "ELSE " +
                    "   SELECT * FROM tb_pv_dispose WHERE id = @id AND comment_id = @comment_id;";
    var objParams = {
        "id": pvid,
        'comment_id': comment_id
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("comment_id", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                if (recordset.length == 2) {
                    var docID = {'id': pvid, 'comment_id' : comment_id, 'state': -1, 'content': config.template.dispose};
                    recordset.forEach(function (record) {
                        docID[record['config_id']] = record["config_value"];
                        docID['comment_user'] = record["comment_user"];
                        docID['comment_date'] = record["comment_date"];
                        docID['to_department'] = record["to_department"];
                        docID['comment'] = record["comment"];
                        docID['attachment'] = record["attachment"];
                    });

                    recordset = [docID];
                }
                callback(err, recordset);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

/**
 * 创建舆情处置
 * @param uid
 * @param obj
 * @param callback
 */
function addPVDispose (uid, obj, callback) {
    var sql_stmt =
        'IF NOT EXISTS (SELECT * FROM tb_pv_dispose WHERE id = @id AND comment_id = @comment_id) ' +
        'BEGIN ' +
        '   INSERT INTO tb_pv_dispose ([id],[comment_id],[content],[createuser],[createtime],[state], [dispose_doc_no], [dispose_doc_year]) VALUES (@id, @comment_id, @content, @createuser, @createtime, @state, @dispose_doc_no, @dispose_doc_year);' +
        "   UPDATE tb_sys_config SET [value] = @dispose_doc_no WHERE [id] = 'dispose_doc_no';" +
        "END " +
        'ELSE ' +
        '   UPDATE tb_pv_dispose SET [content] = @content, [state] = @state, [dispose_doc_no] = @dispose_doc_no, [dispose_doc_year] = @dispose_doc_year WHERE [id] = @id AND [comment_id] = @comment_id;';
    var objParams = {
        "id": obj["id"],
        "comment_id": obj["comment_id"],
        "state": obj["state"],
        "content": obj["content"],
        "createuser": uid,
        "createtime": new Date(),
        "dispose_doc_no": obj["dispose_doc_no"],
        "dispose_doc_year": obj["dispose_doc_year"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("comment_id", sql.Int)
        .input("state", sql.Int)
        .input("content", sql.NVarChar(sql.MAX))
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("dispose_doc_no", sql.Int)
        .input("dispose_doc_year", sql.Int)
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

function getPVListByDisposeState (state, callback) {
    var sql_stmt = "SELECT tb_publicvoice.*, tb_pv_dispose.state FROM tb_pv_dispose,tb_publicvoice WHERE  tb_publicvoice.id = tb_pv_dispose.id AND tb_pv_dispose.state in (" + state + ");";
    var objParams = {};

    var ps = dbpool.preparedStatement()
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

function getPVCommentDocNO (callback) {
    var sql_stmt = 'SELECT value FROM tb_sys_config WHERE id = \'comment_doc_no\';';

    dbpool.execPreparedStatement(sql_stmt, function (err, rs) {
        callback(err, rs.length ? rs[0].value : 1);
    });
}

function getPVComment (pvid, callback) {
    var sql_stmt = 'IF NOT EXISTS (SELECT * FROM tb_pv_comment WHERE [id] = @id)  ' +
                    '	SELECT value, 2 AS type FROM tb_sys_config WHERE id = @comment_doc_no; ' +
                    'ELSE ' +
                    '	SELECT *, 1 AS type FROM tb_pv_comment WHERE id = @id; ';
    var objParams = {
        "id": pvid,
        "comment_doc_no" : 'comment_doc_no'
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("comment_doc_no", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                callback(err, recordset);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function addPVComment (uid, obj, callback) {
    var isNew = !obj.comment_id;
    var sql_stmt = isNew ?
        'INSERT INTO tb_pv_comment (' +
        '  [id], [comment_user], [comment], [attachment], [state], [comment_date], [recv_date], [message_id],' +
        '  [from_user], [from_department], [createuser], [createtime], [to_department]) ' +
        'VALUES (' +
        '  @id, @comment_user, @comment, @attachment, @state, @comment_date, @recv_date, @message_id, ' +
        '  @from_user, @from_department, @createuser, @createtime, @to_department' +
        '); ' +
        'UPDATE tb_publicvoice SET [dispose_stat] = 2, [feedback_state] = 1 WHERE [id] = @id; ' +
        'UPDATE tb_sys_config SET [value] = @comment_doc_no WHERE [id] = \'comment_doc_no\';' :
        'UPDATE tb_pv_comment SET ' +
        '  [comment_user] = @comment_user, [comment] = @comment, [attachment] = @attachment, [comment_date] = @comment_date, [recv_date] = @recv_date,' +
        '  [message_id] = @message_id, [from_user] = @from_user, [from_department] = @from_department, [to_department] = @to_department ' +
        'WHERE [comment_id] = @comment_id;';
    var inputs = isNew ?
        [sql.Int, sql.NVarChar, sql.NVarChar, sql.NVarChar(sql.MAX), sql.Int, sql.Date, sql.Date, sql.NVarChar,
            sql.NVarChar, sql.NVarChar, sql.VarChar, sql.DateTime2, sql.NVarChar, sql.Int, sql.VarChar] :
        [sql.NVarChar, sql.NVarChar, sql.NVarChar(sql.MAX), sql.Date, sql.Date, sql.NVarChar,
            sql.NVarChar, sql.NVarChar, sql.NVarChar, sql.Int];
    var values = isNew ?
        ['id', 'comment_user', 'comment', 'attachment', 'state', 'comment_date', 'recv_date', 'message_id', 'from_user',
            'from_department', 'createuser', 'createtime', 'to_department', 'id', 'comment_doc_no'] :
        ['comment_user', 'comment', 'attachment', 'comment_date', 'recv_date', 'message_id', 'from_user',
            'from_department', 'to_department', 'comment_id'];

    values.forEach(function (field, index) {
        values[index] = obj[field];
    });
    console.log(sql_stmt);
    dbpool.execPreparedStatement(sql_stmt, inputs, values, callback);
}

/* 舆情批示提交审批 */
function commitComment (pvids, callback) {
    var sql_stmt = 'UPDATE tb_publicvoice SET [content] = @content, [type] = @type WHERE [id] = @id;';
}

function approveComment (obj, callback) {
    var sql_stmt =
        'IF NOT EXISTS (SELECT * FROM tb_pv_dispose_approved WHERE id = @id AND comment_id = @comment_id) ' +
        'BEGIN ' +
        '   INSERT INTO tb_pv_dispose_approved ([id],[comment_id],[content],[createuser],[createtime],[type]) VALUES (@id, @comment_id, @content, @createuser, @createtime, @type); ' +
        '   UPDATE tb_publicvoice SET [dispose_stat] = @type WHERE [id] = @id; ' +
        '   UPDATE tb_pv_comment SET [state] = @type WHERE [id] = @id AND [comment_id] = @comment_id; ' +
        'END ' +
        'ELSE ' +
        'BEGIN ' +
        '   UPDATE tb_pv_dispose_approved SET [content] = @content, [type] = @type WHERE [id] = @id AND [comment_id] = @comment_id;' +
        '   UPDATE tb_publicvoice SET [dispose_stat] = @type WHERE [id] = @id; ' +
        '   UPDATE tb_pv_comment SET [state] = @type WHERE [id] = @id AND [comment_id] = @comment_id; ' +
        'END';

    var objParams = {
        "id": obj["id"],
        "comment_id": obj["comment_id"],
        "type": obj["type"],
        "content": obj["content"],
        "createuser": obj["createuser"],
        "createtime": obj["createtime"]
    };
    console.log(sql_stmt);
    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("comment_id", sql.Int)
        .input("type", sql.Int)
        .input("content", sql.NVarChar)
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

/* tb_pv_comment.state : 1: 待提交 2: 待批示 3: 转 4: 转发 5: 阅存 */
function getUnapprovedComment (callback) {
    var sql_stmt = "SELECT TOP 1000 tb_publicvoice.id, tb_publicvoice.title, tb_publicvoice.url," +
        " tb_pv_comment.comment, tb_pv_comment.comment_id, tb_pv_comment.comment_user, tb_pv_comment.comment_date, " +
        " tb_pv_comment.attachment, tb_pv_comment.to_department, tb_pv_comment.state, tb_daily_pv.did AS daily_id " +
        " FROM tb_publicvoice, tb_pv_comment, tb_daily_pv " +
        " WHERE tb_publicvoice.id = tb_pv_comment.id AND tb_daily_pv.pvid = tb_publicvoice.id AND tb_pv_comment.state = 2 " +
        " ORDER BY tb_pv_comment.comment_date DESC, tb_publicvoice.id DESC;";
    var objParams = {};
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
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

function getCommentList(user, start, end, title, callback) {
    var sql_stmt = "SELECT tb_publicvoice.url, tb_publicvoice.title, tb_pv_comment.* " +
        "FROM tb_pv_comment, tb_publicvoice " +
        "WHERE tb_pv_comment.id = tb_publicvoice.id  " +
        "AND tb_publicvoice.id IN ( SELECT pvid FROM tb_pv_notify WHERE tb_pv_notify.uid = @uid) " +
        "AND tb_pv_comment.createtime < @endTime AND tb_pv_comment.createtime > @startTime ";

    var objParams = {
        'startTime' : start,
        'endTime' : end,
        'uid' : user
    };

    if (title) {
        sql_stmt += " AND (tb_publicvoice.title LIKE @title OR tb_publicvoice.content LIKE @title " +
            " OR tb_pv_comment.comment_user LIKE @title OR tb_pv_comment.comment LIKE @title OR tb_pv_comment.to_department LIKE @title) ";
        objParams["title"] = '%' + title + '%';
    }
    sql_stmt += " ORDER BY tb_pv_comment.createtime DESC";
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .input("title", sql.NVarChar)
        .input("startTime", sql.DateTime)
        .input("endTime", sql.DateTime)
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