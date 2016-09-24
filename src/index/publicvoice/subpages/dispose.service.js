/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require('mssql');
var dbpool = require('../../../utilities/dbpool');

module.exports = {
    /*---------- 舆情处置页面 ----------*/
    addPVDispose: addPVDispose,
    getPVDispose: getPVDispose,

    getPVListByDisposeState: getPVListByDisposeState,
    getPVComment: getPVComment,
    addPVComment: addPVComment,
    commitComment: commitComment,
    /* 获取待审批的批示 */
    getUnapprovedComment: getUnapprovedComment,
    approveComment: approveComment
};


/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVDispose (pvid, callback) {
    var sql_stmt = "IF NOT EXISTS (SELECT * FROM tb_pv_dispose WHERE id = @id) " +
                    "   SELECT id,value FROM tb_sys_config WHERE id IN ('dispose_doc_no', 'dispose_doc_year');" +
                    "ELSE " +
                    "   SELECT * FROM tb_pv_dispose WHERE id = @id;";
    var objParams = {
        "id": pvid
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                if (recordset.length == 2) {
                    var docID = {'id': pvid, 'state': -1, 'content': config.template.dispose};
                    recordset.forEach(function (record) {
                        docID[record['id']] = record["value"];
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
        'IF NOT EXISTS (SELECT * FROM tb_pv_dispose WHERE id = @id) ' +
        '   INSERT INTO tb_pv_dispose ([id],[content],[createuser],[createtime],[state], [dispose_doc_no], [dispose_doc_year]) VALUES (@id, @content, @createuser, @createtime, @state, @dispose_doc_no, @dispose_doc_year); ' +
        'ELSE ' +
        '   UPDATE tb_pv_dispose SET [content] = @content, [state] = @state, [dispose_doc_no] = @dispose_doc_no, [dispose_doc_year] = @dispose_doc_year WHERE [id] = @id;';
    var objParams = {
        "id": obj["id"],
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
        .input("state", sql.Int)
        .input("content", sql.NVarChar)
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

function getPVComment (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_comment WHERE id = @id;";
    var objParams = {
        "id": pvid
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
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

function addPVComment (uid, obj, callback) {
    var sql_stmt =
        'IF NOT EXISTS (SELECT * FROM tb_pv_comment WHERE [id] = @id) ' +
        'BEGIN ' +
        '   INSERT INTO tb_pv_comment ([id], [comment_user], [comment], [attachment], [state], [comment_date], [recv_date], [message_id], [from_user], [from_department], [createuser], [createtime]) ' +
        '   VALUES (@id, @comment_user, @comment, @attachment, @state, @comment_date, @recv_date, @message_id, @from_user, @from_department, @createuser, @createtime); ' +
        '   UPDATE tb_publicvoice SET [dispose_stat] = 1, [feedback_state] = 1 WHERE [id] = @id; ' +
        'END ' +
        'ELSE ' +
        '   UPDATE tb_pv_comment SET [comment] = @comment, [attachment] = @attachment WHERE [id] = @id;';

    var objParams = {
        'id' : obj['id'],
        'comment_user' : obj['comment_user'],
        'comment' : obj['comment'],
        'attachment' : obj['attachment'],
        'state' : obj['state'],
        'comment_date' : obj['comment_date'],
        'recv_date' : obj['recv_date'],
        'message_id' : obj['message_id'],
        'from_user' : obj['from_user'],
        'from_department' : obj['from_department'],
        "createuser": uid,
        "createtime": new Date()
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input('id', sql.Int)
        .input('comment_user', sql.NVarChar)
        .input('comment', sql.NVarChar)
        .input('attachment', sql.NVarChar)
        .input('state', sql.Int)
        .input('comment_date', sql.Date)
        .input('recv_date', sql.Date)
        .input('message_id', sql.NVarChar)
        .input('from_user', sql.NVarChar)
        .input('from_department', sql.NVarChar)
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

/* 舆情批示提交审批 */
function commitComment (pvids, callback) {
    var sql_stmt = 'UPDATE tb_publicvoice SET [content] = @content, [type] = @type WHERE [id] = @id;';
}

function approveComment (obj, callback) {
    var sql_stmt =
        'IF NOT EXISTS (SELECT * FROM tb_pv_dispose_approved WHERE id = @id) ' +
        'BEGIN ' +
        '   INSERT INTO tb_pv_dispose_approved ([id],[content],[createuser],[createtime],[type]) VALUES (@id, @content, @createuser, @createtime, @type); ' +
        '   UPDATE tb_publicvoice SET [dispose_stat] = @type WHERE [id] = @id; ' +
        'END ' +
        'ELSE ' +
        '   UPDATE tb_pv_dispose_approved SET [content] = @content, [type] = @type WHERE [id] = @id;';

    var objParams = {
        "id": obj["id"],
        "type": obj["type"],
        "content": obj["content"],
        "createuser": obj["createuser"],
        "createtime": obj["createtime"]
    };
    console.log(sql_stmt);
    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
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

function getUnapprovedComment (callback) {
    var sql_stmt = "SELECT TOP 1000 tb_publicvoice.id, tb_publicvoice.title, tb_publicvoice.from_website, " +
        " tb_publicvoice.url, tb_publicvoice.createtime, tb_publicvoice.content AS pv_content, " +
        " tb_pv_comment.comment, tb_pv_comment.comment_user, tb_pv_comment.comment_date, tb_pv_comment.attachment, tb_publicvoice.dispose_stat, tb_daily_pv.did AS daily_id " +
        " FROM tb_publicvoice, tb_pv_comment, tb_daily_pv " +
        " WHERE tb_publicvoice.id = tb_pv_comment.id AND tb_daily_pv.pvid = tb_publicvoice.id AND tb_publicvoice.dispose_stat = 2;";
    var objParams = {};
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