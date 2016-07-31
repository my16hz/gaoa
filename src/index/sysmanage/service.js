/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');

var dbpool = require('../../utilities/dbpool');

module.exports = {
    /**
     * 创建用户
     * @param user {Object} - 用户信息 {
     *      id: {String}, // 用户ID
     *      name: {String}, // 用户名
     *      password: {String}, // 密码(SHA1加密)
     *      description: {String},	// 描述
     *      roles: {String}, //角色列表, 以逗号分隔 (
     *          0 - 所有权限
     *          11 - 舆情录入
     *          12 - 舆情日报
     *          13 - 舆情处置
     *          14 - 舆情通报
     *          15 - 舆情反馈
     *          16 - 舆情引导
     *          17 - 舆情分析
     *          18 - 舆情审批
     *          19 - 舆情预警
     *          21 - 社情录入
     *          22 - 社情编报
     *          31 - 不良信息录入
     *          32 - 不良信息统计
     *          33 - RTX指令录入
     *          41 - 发布信息
     *          42 - 审批信息
     *          51 - 用户管理
     *      )
     *      priority {Number} - 优先级(1:市级，2:县级)
     *      groupid {String} - 用户所在组
     * }
     * @param done
     */
    addUser: addUser,
    removeUsers: removeUsers,
    updateUser: updateUser,
    /**
     * 查找用户, 返回所有用户信息
     * @param done
     */
    findUsers: findUsers,
    findUserByID: findUserByID,

    /**
     * 创建组
     * @param group {Object} - 组信息 {
     *      id: {String}, // 组ID
     *      name: {String}, // 组名
     *      priority: {Number}, // 优先级(1:市级，2:县级)
     *      description: {String} // 描述
     * }
     * @param done
     */
    addGroup: addGroup,
    removeGroup: removeGroup,
    updateGroup: updateGroup,
    findGroups: findGroups,

    addUserToGroup: addUserToGroup,
    removeUserFromGroup: removeUserFromGroup,
    findUserGroup: findUserGroup,
    findGroupUsers: findGroupUsers,
    findGroupWithUser: findGroupWithUser
};


function addUser (user, done) {
    var sql_stmt = "INSERT INTO tb_user (" +
        "[id],[name],[password],[description],[role],[priority],[createtime],[groupid]" +
        ") VALUES (" +
        "@id, @name, @password, @description, @roles, @priority, @createtime, @groupid" +
        ");";
    var objParams = {
        "id": user["id"],
        "name": user["name"],
        "password": user["password"],
        "description": user["description"],
        "roles": user["roles"],
        "priority": user["priority"],
        "createtime": new Date(),
        "groupid": user["groupid"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.VarChar)
        .input("name", sql.NVarChar)
        .input("password", sql.VarChar)
        .input("description", sql.NVarChar)
        .input("roles", sql.VarChar)
        .input("priority", sql.Int)
        .input("groupid", sql.VarChar)
        .input("createtime", sql.DateTime2)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 创建组
 * @param uid {String} 用户ID
 * @param group {Object} 组信息
 * {
 *      id {String} : 组ID
 *      name	组名
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 * }
 *
 * @param done
 */
function addGroup (group, done) {
    var sql_stmt = "INSERT INTO tb_group (" +
        "[id],[name],[description],[priority],[createtime]" +
        ") VALUES (" +
        "@id, @name, @description, @priority, @createtime" +
        ");";
    var objParams = {
        "id": group["id"],
        "name": group["name"],
        "description": group["description"],
        "priority": group["priority"],
        "createtime": new Date()
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.VarChar)
        .input("name", sql.NVarChar)
        .input("description", sql.NVarChar)
        .input("priority", sql.Int)
        .input("createtime", sql.DateTime2)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }
            ps.execute(objParams, function (err, recordset) {
                done(err, recordset);
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

/**
 * 删除用户
 * @param uids {Array} 待删除的用户列表
 * @param done
 */
function removeUsers (uids, done) {
    var sql_stmt = "DELETE FROM tb_user WHERE id in (%ids%);";

    var ps = dbpool
        .preparedStatement()
        .prepare(sql_stmt.replace('%ids%', '\'' + uids.join('\',\'') + '\''), function (err) {
            if (err) {
                return done(err, false);
            }

            ps.execute({}, function (err, recordset) {
                done(err, recordset);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 删除用户组
 * @param uid
 * @param removedgid
 * @param callback
 */
function removeGroup (uid, removedgid, callback) {
    var sql_stmt = "DELETE FROM tb_group WHERE id = @removedgid;";
    var objParams = {"removedgid": removedgid};
    var ps = dbpool.preparedStatement()
        .input("removedgid", sql.VarChar)
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

/**
 * 更新用户信息 (不能修改ID)
 * @param uid {Number}
 * @param userInfo {Object} 用户信息
 * {
 *      id {String} 用户ID (必填)
 *      name {String} 用户名
 *      password {String} 用户密码
 *      description {String}	描述
 *      roles {Array} 角色列表
 *      ( 0 - 所有权限
 *          0 - 所有权限
 *          11 - 舆情录入 12 - 舆情日报 13 - 舆情处置 14 - 舆情通报 15 - 舆情反馈 16 - 舆情引导 17 - 舆情分析 18 - 舆情审批 19 - 舆情预警
 *          21 - 社情录入 22 - 社情编报
 *          31 - 不良信息录入 32 - 不良信息统计 33 - RTX指令录入
 *          41 - 发布信息 42 - 审批信息
 *          51 - 用户管理
 *      )
 * }
 * @param done
 */
function updateUser (uid, userInfo, done) {
    var ps = dbpool.preparedStatement();
    var sql_stmt = "UPDATE tb_user SET ";
    if (userInfo.hasOwnProperty('name')) {
        sql_stmt += " [name] = @name, ";
        ps.input("name", sql.NVarChar);
    }
    if (userInfo.hasOwnProperty('password')) {
        sql_stmt += " [password] = @password, ";
        ps.input("password", sql.VarChar);
    }
    if (userInfo.hasOwnProperty('description')) {
        sql_stmt += " [description] = @description, ";
        ps.input("description", sql.NVarChar);
    }
    if (userInfo.hasOwnProperty('roles')) {
        sql_stmt += " [role] = @roles ";
        ps.input("roles", sql.VarChar);
    }
    if (userInfo.hasOwnProperty('groupid')) {
        sql_stmt += " [groupid] = @groupid ";
        ps.input("groupid", sql.VarChar);
    }
    sql_stmt += " WHERE id = @id;";
    ps.input("id", sql.VarChar);

    var objParams = {
        "id": userInfo['id'],
        "name": userInfo['name'],
        "password": userInfo['password'],
        "description": userInfo['description'],
        "roles": userInfo['roles'],
        "groupid": userInfo['groupid']
    };

    ps.prepare(sql_stmt, function (err) {
        if (err) {
            return done(err, null);
        }
        ps.execute(objParams, function (err, rs) {
            done(err, rs);
            ps.unprepare(function (err) {
                err && console.error(err);
            });
        });
    });
}

function addGroup (group, done) {
    var sql_stmt = "INSERT INTO tb_group (" +
        "[id],[name],[description],[priority]" +
        ") VALUES (" +
        "@id, @name, @description, @priority" +
        ");";
    var objParams = {
        "id": group["id"],
        "name": group["name"],
        "description": group["description"],
        "priority": group["priority"]
    };

    var ps = dbpool.preparedStatement()
        .input("id", sql.VarChar)
        .input("name", sql.NVarChar)
        .input("description", sql.NVarChar)
        .input("priority", sql.Int)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 删除用户组
 * @param uid
 * @param removedgid
 * @param done
 */
function removeGroup (uid, removedgid, done) {
    var sql_stmt = "DELETE FROM tb_group WHERE id = @removedgid;";
    var objParams = {"removedgid": removedgid};
    var ps = dbpool.preparedStatement()
        .input("removedgid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                done(err, rs);
                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 更新组信息 (可更新组描述和优先级，成员在addUser2Group中修改)
 * @param uid {Number} 用户ID
 * @param groupInfo {Object} 组信息
 * {
 *      id {String} 组ID(必须)
 *      name {String} 组名
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 * }
 *
 * @param done
 */
function updateGroup (uid, groupInfo, done) {
    var ps = dbpool.preparedStatement();
    var sql_stmt = "UPDATE tb_group SET ";
    if (groupInfo.hasOwnProperty('name')) {
        sql_stmt += " [name] = @name, ";
        ps.input("name", sql.NVarChar);
    }
    if (groupInfo.hasOwnProperty('description')) {
        sql_stmt += " [description] = @description, ";
        ps.input("description", sql.NVarChar);
    }
    if (groupInfo.hasOwnProperty('priority')) {
        sql_stmt += " [priority] = @priority ";
        ps.input("priority", sql.Int);
    }
    sql_stmt += " WHERE id = @id;"
    ps.input("id", sql.VarChar);

    var objParams = {
        "id": groupInfo['id'],
        "name": groupInfo['name'],
        "description": groupInfo['description'],
        "priority": groupInfo['priority']
    };

    ps.prepare(sql_stmt, function (err) {
        if (err) {
            return done(err, null);
        }
        ps.execute(objParams, function (err, rs) {
            done(err, rs);
            ps.unprepare(function (err) {
                err && console.error(err);
            });
        });
    });
}


function findUsers (done) {
    var sql_stmt = "SELECT * FROM tb_user ORDER BY createtime DESC";
    var ps = dbpool
        .preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, []);
            }

            ps.execute(null, function (err, rs) {
                done(err, err ? [] : rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function findUserByID (uid, done) {
    var sql_stmt = "select * from tb_user where id = @id";
    var objParams = {"id": uid};
    var ps = dbpool.preparedStatement()
        .input("id", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                done(err, rs);
                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 查找组, 返回所有组信息
 * @param uid
 * @param done
 */
function findGroups (uid, done) {
    var sql_stmt = "select * from tb_group";
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, []);
            }
            ps.execute({}, function (err, rs) {
                done(err, rs);
                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 向指定组内添加用户
 * @param uid 用户ID
 * @param gid 组ID
 * @param done
 */
function addUserToGroup (uid, gid, done) {
    var ps = dbpool.preparedStatement();
    var sql_stmt = "UPDATE tb_user SET [groupid] = @gid WHERE id = @uid;";
    ps.input("gid", sql.VarChar);
    ps.input("uid", sql.VarChar);

    var objParams = {
        "uid": uid,
        "gid": gid
    };

    ps.prepare(sql_stmt, function (err) {
        if (err) {
            return done(err, null);
        }
        ps.execute(objParams, function (err, rs) {
            done(err, rs);
            ps.unprepare(function (err) {
                err && console.error(err);
            });
        });
    });
}

/**
 * 删除组内用户
 * @param uid
 * @param gid 组ID
 * @param done
 */
function removeUserFromGroup (uid, gid, done) {
    addUserToGroup(uid, null, done);
}

/**
 * 查询用户的groupID
 * @param uid
 * @param userid 需要查询的用户ID
 * @param done
 */
function findUserGroup (uid, done) {
    var sql_stmt = "select groupid from tb_user where uid = @uid";
    var objParams = {"uid": uid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                done(err, rs);
                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 * 查找group下的用户
 * @param gid
 * @param done
 */
function findGroupUsers (gid, done) {
    var sql_stmt = "select id from tb_user where groupid = @gid";
    var objParams = {"gid": gid};
    var ps = dbpool.preparedStatement()
        .input("gid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, null);
            }
            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

/**
 *  查找所有user的group
 * @param done
 */
function findGroupWithUser (done) {
    var sql_stmt = "select id, groupid from tb_user group by id, groupid";
    var objParams = {};
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, []);
            }
            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}