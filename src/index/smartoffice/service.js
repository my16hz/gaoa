/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require('mssql');
var dbpool = require('../../utils/dbpool');

module.exports = {
    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg,
    updateSendMsg: updateSendMsg,
    removeSendMsg: removeSendMsg,
    commitSendMsg: commitSendMsg,

    getRecvMsg: getRecvMsg,
    saveRecvMsg: saveRecvMsg,
    updateRecvMsg: updateRecvMsg,
    removeRecvMsg: removeRecvMsg,
    commitRecvMsg: commitRecvMsg,

    sendNotify: sendNotify,

    getTemplate: getTemplate,
    getNotifyList: getNotifyList,
    saveMessage: saveMessage,
    updateMessage: updateMessage,
    getMessageList: getMessageList,
    deleteMessage: deleteMessage,

    getUnapprovedSendMsg: getUnapprovedSendMsg,
    getUnapprovedRecvMsg: getUnapprovedRecvMsg,
    commentSendMsg: commentSendMsg,
    commentRecvMsg: commentRecvMsg
};

function getSendMsg (callback) {
    var params = {};
    var sql_stmt = "SELECT TOP 1000 * FROM tb_so_sendmessage ORDER BY createtime desc;";

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

function getRecvMsg (callback) {
    var params = {};
    var sql_stmt = "SELECT TOP 1000 * FROM tb_so_recvmessage ORDER BY createtime desc;";

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

function saveSendMsg(obj, callback) {
    var sql_stmt = 'INSERT INTO tb_so_sendmessage ([title], [major_department], [cc_department],' +
                    ' [message_id], [secret_level], [urgent_level], [dispose_user], [draft_user], ' +
                    ' [copies], [content], [keyword], [sign], [countersign], [state], [createuser],' +
                    ' [createtime]) VALUES (@title, @major_department, @cc_department, @message_id, ' +
                    ' @secret_level, @urgent_level, @dispose_user, @draft_user, @copies, @content,' +
                    ' @keyword, @sign, @countersign, @state, @createuser, @createtime);' +
                    "UPDATE tb_sys_config SET [value] = [value] + 1 WHERE [id] = @sendmessage_key;";
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("title", sql.NVarChar)
        .input("major_department", sql.NVarChar)
        .input("cc_department", sql.NVarChar)
        .input("message_id", sql.NVarChar)
        .input("secret_level", sql.NVarChar)
        .input("urgent_level", sql.NVarChar)
        .input("dispose_user", sql.NVarChar)
        .input("draft_user", sql.NVarChar)
        .input("copies", sql.Int)
        .input("content", sql.NVarChar)
        .input("keyword", sql.NVarChar)
        .input("sign", sql.NVarChar)
        .input("countersign", sql.NVarChar)
        .input("state", sql.Int)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("sendmessage_key", sql.VarChar)
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

function saveRecvMsg(obj, callback) {
    var sql_stmt = 'INSERT INTO tb_so_recvmessage ([title], [recv_date], [message_id], [origin_department], [origin_id], [secret_level], [approved_user], [from_department], [origin_date], [copies], [from_user], [content], [comment], [result], [state], [createuser], [createtime]) ' +
        'VALUES (@title, @recv_date, @message_id, @origin_department, @origin_id, @secret_level, @approved_user, @from_department, @origin_date, @copies, @from_user, @content, @comment, @result, @state, @createuser, @createtime);' +
        "UPDATE tb_sys_config SET [value] = @smartoffice_recvmessage_id WHERE [id] = 'smartoffice_recvmessage_id';";
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input('title', sql.NVarChar)
        .input('recv_date', sql.Date)
        .input('message_id', sql.NVarChar)
        .input('origin_department', sql.NVarChar)
        .input('origin_id', sql.NVarChar)
        .input('secret_level', sql.NVarChar)
        .input('approved_user', sql.NVarChar)
        .input('from_department', sql.NVarChar)
        .input('origin_date', sql.Date)
        .input('copies', sql.Int)
        .input('from_user', sql.NVarChar)
        .input('content', sql.NVarChar)
        .input('comment', sql.NVarChar)
        .input('result', sql.NVarChar)
        .input('state', sql.Int)
        .input("createuser", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("smartoffice_recvmessage_id", sql.VarChar)
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

function updateSendMsg(obj, callback) {
    var sql_stmt = "UPDATE tb_so_sendmessage SET [title] = @title, [major_department] = @major_department, " +
                    "[cc_department] = @cc_department, [message_id] = @message_id, [secret_level] = @secret_level, " +
                    "[urgent_level] = @urgent_level, [dispose_user] = @dispose_user, [copies] = @copies, " +
                    "[content] = @content, [keyword] = @keyword, [sign] = @sign, [countersign] = @countersign, [draft_user] = @draft_user " +
                    "WHERE id = @id; ";
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("title", sql.NVarChar)
        .input("major_department", sql.NVarChar)
        .input("cc_department", sql.NVarChar)
        .input("message_id", sql.NVarChar)
        .input("secret_level", sql.NVarChar)
        .input("urgent_level", sql.NVarChar)
        .input("dispose_user", sql.NVarChar)
        .input("draft_user", sql.NVarChar)
        .input("copies", sql.Int)
        .input("content", sql.NVarChar)
        .input("keyword", sql.NVarChar)
        .input("sign", sql.NVarChar)
        .input("countersign", sql.NVarChar)
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

function updateRecvMsg(obj, callback) {
    var sql_stmt = "UPDATE tb_so_sendmessage SET [sign] = @sign, [countersign] = @countersign, [state] = 2 " +
        "WHERE id = @id; ";
    var objParams = {
        "sign" : obj["sign"]

    }
}

function removeSendMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_so_sendmessage WHERE id in (%ids%);";

    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function removeRecvMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_so_recvmessage WHERE id in (%ids%);";

    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function commitSendMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "UPDATE tb_so_sendmessage SET [state] = 1 WHERE id in ( %ids% ); ";
    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function commitRecvMsg(ids, callback) {
    var objParams = {};
    var sql_stmt = "UPDATE tb_so_recvmessage SET [state] = 1 WHERE id in ( %ids% ); ";
    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function getTemplate (callback) {
    dbpool.execPreparedStatement(
        "SELECT * FROM tb_sys_config;",
        function (err, recordset) {
            var rs = {};

            if (err) return callback(err);

            recordset.forEach(function (val) {
                rs[val.id] = val.value;
            });

            rs['template'] = {
                'sendmessage' : config.template.sendmessage,
                'recvmessage' : config.template.recvmessage,
                'notify' : config.template.notify
            };

            callback(null, rs);
        }
    );
}

function getNotifyList (uid, callback) {
    var sql_stmt = "SELECT TOP 1000 tb_so_message.* FROM tb_so_message, tb_so_message_notify " +
        " WHERE tb_so_message.id = tb_so_message_notify.mid AND tb_so_message_notify.uid = @uid " +
        " ORDER BY createtime desc;";
    var params = {uid : uid};
    console.log(sql_stmt);

    var ps = dbpool.preparedStatement()
        .input('uid', sql.VarChar)
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

function saveMessage (obj, callback) {
    var sql_stmt = 'INSERT INTO tb_so_message ([title] ,[type] ,[content] , [state] , [attachment], [createtime] ,[createuser]) ' +
        'VALUES (@title, @type, @content, @state, @attachment, @createtime, @createuser);';
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("title", sql.NVarChar)
        .input('type', sql.Int)
        .input('content', sql.NVarChar)
        .input('state', sql.Int)
        .input('attachment', sql.NVarChar)
        .input('createtime', sql.DateTime)
        .input('createuser', sql.NVarChar)
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

function updateMessage (obj, callback) {
    var sql_stmt = 'UPDATE tb_so_message SET [title] = @title, [content] = @content, [attachment] = @attachment WHERE [id] = @id;';
    var objParams = obj;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input('id', sql.Int)
        .input("title", sql.NVarChar)
        .input('content', sql.NVarChar)
        .input('attachment', sql.NVarChar)
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

function getMessageList (uid, callback) {
    var sql_stmt = "select top 1000 * from tb_so_message where createuser = @uid order by createtime desc;";
    var params = {'uid': uid};
    console.log(sql_stmt);

    var ps = dbpool.preparedStatement()
        .input('uid', sql.VarChar)
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


function deleteMessage(ids, callback) {
    var objParams = {};
    var sql_stmt = "DELETE FROM tb_so_message_notify WHERE mid in (%mids%);" +
                "DELETE FROM tb_so_message WHERE id in (%ids%);";

    sql_stmt = sql_stmt.replace("%mids%",  ids);
    sql_stmt = sql_stmt.replace("%ids%",  ids);
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

function sendNotify (uid, userids, mids, callback) {
    var sql_stmt = "";
    userids.forEach(function (user) {
        mids.forEach(function (mid) {
            sql_stmt += "IF NOT EXISTS (SELECT * FROM tb_so_message_notify WHERE uid = '" + user + "' AND mid = '" + mid + "') " +
                "BEGIN " +
                "INSERT INTO tb_so_message_notify ([uid],[mid],[createuser]) VALUES ('" + user + "','" + mid + "','" + uid + "'); " +
                "UPDATE tb_so_message SET state = 3 WHERE id = " + mid + ";" +
                "END ";
        })
    });
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute({}, function (err, recordset) {
                callback(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

function getUnapprovedSendMsg (callback) {
    var params = {};
    var sql_stmt = "SELECT TOP 1000 * FROM tb_so_sendmessage WHERE state = 1 ORDER BY createtime desc;";

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

function getUnapprovedRecvMsg (callback) {
    var params = {};
    var sql_stmt = "SELECT TOP 1000 * FROM tb_so_recvmessage WHERE state = 1 ORDER BY createtime desc;";

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

function commentSendMsg (msg, callback) {
    var sql_stmt = "UPDATE tb_so_sendmessage SET  [sign] = @sign, [countersign] = @countersign, [state] = 2 WHERE id = @id; ";
    var objParams = msg;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("sign", sql.NVarChar)
        .input("countersign", sql.NVarChar)
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

function commentRecvMsg (msg, callback) {
    var sql_stmt = "UPDATE tb_so_recvmessage SET  [comment] = @comment, [state] = 2 WHERE id = @id; ";
    var objParams = msg;
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("comment", sql.NVarChar)
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