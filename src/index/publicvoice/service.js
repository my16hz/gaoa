/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var extend = require('extend');
var sql = require('mssql');
var xlsx = require('xlsx');

var sysmanage = require('../sysmanage/member.service');
var dbpool = require('../../utilities/dbpool');
var pubvoiceRecord = require('./subpages/record.service')


var service = module.exports = {
    /*---------- 舆情审批页面 ----------*/
    /* 查询待审批的舆情 */
    findWaitApprovalPV: findWaitApprovalPV,
    /* 审批舆情 */
    approvalPubVoice: approvalPubVoice,

    /*---------- 舆情日报页面 ----------*/
    /* 查询舆情日报列表 */
    findDailyList: findDailyList,
    /* 查询日报详情 */
    findDailyDetail: findDailyDetail,
    /* 创建日报 */
    createDaily: createDaily,
    /* 获取日报当前期数 */
    getCurrentDailyID: getCurrentDailyID,
    /* 获取日报模板 */
    getDailyTemplate: getDailyTemplate,
    /* 查询日报中舆情列表 */
    getDailyPVList: getDailyPVList,

    /*---------- 舆情通报页面 ----------*/
    /* 舆情通报 */
    addPVNotify: addPVNotify,
    /* 查询通报的舆情 */
    getNotifyPVList: getNotifyPVList,

    /*---------- 舆情反馈页面 ----------*/
    addPVFeedback: addPVFeedback,
    updatePVFeedback: updatePVFeedback,
    getPVFeedback: getPVFeedback,

    /*---------- 舆情引导页面 ----------*/
    addPVGuide: addPVGuide,
    updatePVGuide: updatePVGuide,
    getPVGuide: getPVGuide,

    /*---------- 舆情处置页面 ----------*/
    addPVDispose: addPVDispose,
    getPVDispose: getPVDispose,

    /*---------- 舆情预警页面 ----------*/
    getAlertList: getAlertList

};

extend(
    service,
    require('./subpages/analyze.service'),
    require('./subpages/approve.service'),
    require('./subpages/dailyreport.service'),
    require('./subpages/dispose.service'),
    require('./subpages/feedback.service'),
    require('./subpages/guide.service'),
    require('./subpages/notify.service'),
    require('./subpages/record.service')
);


/**
 * 查找待审批的舆情
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 舆情数组[])
 */
function findWaitApprovalPV (field, order, callback) {
    var sql_stmt = "SELECT * FROM tb_publicvoice WHERE state = 1 ";
    if (field != null && field != "") {
        sql_stmt += " order by " + field + " " + order;
    }
    console.log(sql_stmt);

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

/**
 * 审批舆情
 * @param uid {Number} - 用户ID
 * @param obj {Object} - 审批意见{
 * pvid {Number} 舆情ID
 * createuser {String} 审批者ID
 * type {Number} 审批类型 0 - 舆情 1 - 处置通知书
 * createtime {Date} 创建时间
 * content {String} 审批内容
 * result {Number} 审批结果 舆情： 0 - 通过， 1 - 不通过 2 -暂缓通过 批示处理签： 3 - 转 ， 4 - 转发 ， 5 - 阅存}
 * @param callback {Function}  回调函数(err)
 */
function approvalPubVoice (uid, obj, callback) {
    var sql_stmt = "INSERT INTO tb_pv_approved ([pvid],[createuser],[type],[createtime],[content],[result]) " +
        "VALUES (@pvid,@createuser,@type,@createtime,@content,@result)";
    var objParams = {
        "pvid": obj["pvid"],
        "createuser": uid,
        "type": 0,
        "createtime": new Date(),
        "content": obj["content"],
        "result": obj["result"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("pvid", sql.Int)
        .input("createuser", sql.VarChar)
        .input("type", sql.Int)
        .input("createtime", sql.DateTime2)
        .input("content", sql.NVarChar)
        .input("result", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                var state = {};
                state['approved_state'] = objParams['result'];
                /* 通过 */
                if (objParams['result'] == 1) {
                    state['state'] = 3;
                    /* 不通过 */
                } else if (objParams['result'] == 2) {
                    state['state'] = 1;
                    /* 暂缓通过 将状态设为 待审批 */
                } else {
                    state['state'] = 2
                    /* 通过 */
                }
                _updatePVState([objParams["pvid"]], state, callback);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 查询日报列表
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList (field, order, callback) {
    var sql_stmt = "SELECT id,issue_id,createuser,createtime,pvids FROM tb_daily ";
    if (field != null && field != "") {
        sql_stmt += " order by " + field + " " + order;
    }
    console.log(sql_stmt);

    var objParams = {};
    var ps = dbpool.preparedStatement()
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

/**
 * 查询日报详情
 * @param daily_ids {Number} 日报ID数组
 * @param callback {Function}  回调函数(err, object)
 */
function findDailyDetail (daily_ids, callback) {
    var sql_stmt = "SELECT * FROM tb_daily where id = " + daily_ids;
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

/**
 * 创建日报
 * @param uid
 * @param daily {Object} 日报详情
 * {
 *      pvids: {String} 日报包含的舆情ID，以逗号分隔
 *      issue_id: {Number} 日报期数
 *      issue_total_id : {Number} 日报总期数
 *      content: {String} 舆情详情(富文本格式)
 * }
 * @param callback
 */
function createDaily (uid, daily, callback) {
    var sql_stmt = "INSERT INTO tb_daily ([id],[issue_id],[content],[createuser],[createtime],[pvids]) " +
        "VALUES (@id, @issue_id, @content, @createuer, @createtime, @pvids)";
    var objParams = {
        "id": daily["id"],
        "issue_id": daily["issue_id"],
        "content": daily["content"],
        "createuer": uid,
        "createtime": new Date(),
        "pvids": daily["pvids"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("issue_id", sql.Int)
        .input("content", sql.NVarChar)
        .input("createuer", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .input("pvids", sql.VarChar)
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

/**
 * 获取日报当前期号
 * @param callback {Function}  回调函数(err, {issue_id:{Number}舆情期数, id:总期数})
 */
function getCurrentDailyID (callback) {
    var sql_stmt = "SELECT MAX(id) as 'id', MAX(issue_id) as 'issue_id' FROM tb_daily";
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

function getDailyPVList (did, callback) {
    var sql_stmt = "SELECT pvids FROM tb_daily WHERE id = @did";
    var objParams = {'did': did};
    var ps = dbpool.preparedStatement()
        .input('did', sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return callback(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                console.log(recordset);
                pubvoiceRecord.findPubVoiceDetail(recordset[0]['pvids'], callback);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

/**
 * 获取日报模板
 * @param uid
 * @param callback
 */
function getDailyTemplate (uid, callback) {

}

/**
 * 通报舆情
 * @param uid {Number} 通报者用户ID列表
 * @param userids {Arrays} 通报对象列表，用户ID列表
 * @param pvids {Arrays} 舆情ID列表，
 * @param callback {Function}  回调函数(err)
 */
function addPVNotify (uid, userids, pvids, callback) {
    var table = dbpool.table('tb_pv_notify');
    table.columns.add("uid", sql.VarChar, {nullable: false});
    table.columns.add("pvid", sql.Int, {nullable: false});
    table.columns.add("createtime", sql.DateTime2, {nullable: true});
    table.columns.add("createuser", sql.VarChar, {nullable: true});

    userids.forEach(function (user) {
        pvids.forEach(function (pv) {
            table.rows.add(user, pv, uid, new Date());
        })
    });
    var request = dbpool.createRequest();

    request.bulk(table, function (err, rowCount) {
        if (err) {
            return callback(err, null);
        }

        callback(err, rowCount);
    });
}

/**
 * 查询用户通报的舆情
 * @param uid 查询的用户ID
 * @param callback {Function}  回调函数(err)*
 */
function getNotifyPVList (uid, callback) {
    var sql_stmt = "SELECT * FROM tb_publicvoice where id in (select pvid from tb_pv_notify where tb_pv_notify.uid = @uid);";
    var objParams = {"uid": uid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
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

/**
 * 添加舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function addPVFeedback (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_feedback WHERE id = @id AND type = @type; " +
        "INSERT INTO tb_pv_feedback ([id],[type],[content],[createuser],[createtime]) " +
        "VALUES (@id, @type, @content, @createuser, @createtime);" +
        "UPDATE tb_publicvoice SET state = 7 WHERE id = @id";
    var objParams = {
        "id": obj["id"],
        "type": obj["type"],
        "content": obj["content"],
        "createuser": uid,
        "createtime": new Date()
    };

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

/**
 * 更新舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function updatePVFeedback (uid, obj, callback) {
    var sql_stmt = "UPDATE tb_pv_feedback SET content = @content WHERE id = @id AND type = @type;";
    var objParams = {
        "id": obj["id"],
        "type": obj["type"],
        "content": obj["content"]
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("type", sql.Int)
        .input("content", sql.NVarChar)
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

/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVFeedback (pvid, type, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_feedback WHERE id = @id ";
    if (type != null) {
        sql_stmt += " AND type = @type";
    }

    var objParams = {
        "id": pvid,
        "type": type
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("type", sql.Int)
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

/**
 * 添加舆情引导
 * @param uid 填报者ID
 * @param obj {Object} 引导对象
 * {guide_name : 引导者, guide_type : 引导类型,
 * guide_result : 引导结果, guide_count : 引导次数, content : 引导内容}
 * @param callback
 */
function addPVGuide (uid, obj, callback) {
    var sql_stmt = "DELETE FROM tb_pv_guide WHERE id = @id; INSERT INTO tb_pv_guide ([id], [guide_name], [guide_type], [guide_result], [guide_count], [content], [createuser], [createtime])  " +
        "VALUES (@id, @guide_name, @guide_type, @guide_result, @guide_count, @content, @createuser, @createtime);";
    var objParams = {
        "id": obj["id"],
        "guide_name": obj["guide_name"],
        "guide_type": obj["guide_type"],
        "guide_result": obj["guide_result"],
        "guide_count": obj["guide_count"],
        "content": obj["content"],
        "createuser": uid,
        "createtime": new Date()
    };
    console.log(sql_stmt);
    var ps = dbpool.preparedStatement()
        .input("id", sql.Int)
        .input("guide_name", sql.NVarChar)
        .input("guide_type", sql.NVarChar)
        .input("guide_result", sql.NVarChar)
        .input("guide_count", sql.Int)
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


/**
 * 更新舆情引导
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function updatePVGuide (uid, obj, callback) {
}

/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVGuide (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_guide WHERE id = @id;";
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

/**
 * 查看舆情反馈
 * @param uid {Number} 反馈者ID
 * @param obj {Object} 反馈内容 {id: 舆情ID，type: 0 - 书面回复， 1 - 网上回复, content: 回复内容}
 * @param callback
 */
function getPVDispose (pvid, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_dispose WHERE id = @id;";
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
                if (recordset.length == 0) {
                    recordset = [{'id': pvid, 'state': -1, 'content': config.templete.dispose}]
                }
                callback(err, recordset)
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
    var sql_stmt = "DELETE FROM tb_pv_dispose WHERE [id] = @id;" +
        "INSERT INTO tb_pv_dispose ([id],[content],[createuser],[createtime],[state]) " +
        "VALUES (@id, @content, @createuer, @createtime, @state);"
    var objParams = {
        "id": obj["id"],
        "state": obj["state"],
        "content": obj["content"],
        "createuer": uid,
        "createtime": new Date()
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.Int)
        .input("state", sql.Int)
        .input("content", sql.NVarChar)
        .input("createuer", sql.VarChar)
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

/**
 * 获取预警列表
 * @param bShowAll 是否显示所有预警，默认为false，即只显示有效舆情
 * @param callback
 */
function getAlertList (bShowAll, callback) {
    var sql_stmt = "SELECT * FROM tb_pv_alerted WHERE endtime > @endtime ORDER BY state";
    var endtime = new Date();
    if (bShowAll == true) {
        endtime = new Date(0);
    }
    var objParams = {
        "endtime": endtime
    };

    var ps = dbpool.preparedStatement()
        .input("endtime", sql.DateTime2)
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

/**
 * 添加预警
 * @param obj
 * @param callback
 */
function addAlert (obj, callback) {
    var sql_stmt = "INSERT INTO tb_pv_alerted ([title], [date], [department], [sender], [receiver], [type], [content], [endtime], [state]) " +
        "VALUES (@title, @date, @department, @sender, @receiver, @type, @content, @endtime, @state);";
    var objParams = {
        "title": obj["title"],
        "date": obj["date"],
        "department": obj["department"],
        "sender": obj["sender"],
        "receiver": obj["receiver"],
        "type": obj["type"],
        "content": obj["content"],
        "endtime": obj["endtime"],
        "state": obj["state"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("title", sql.NVarChar)
        .input("date", sql.DateTime2)
        .input("department", sql.NVarChar)
        .input("sender", sql.NVarChar)
        .input("receiver", sql.NVarChar)
        .input("type", sql.Int)
        .input("content", sql.NVarChar)
        .input("endtime", sql.DateTime2)
        .input("state", sql.Int)
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