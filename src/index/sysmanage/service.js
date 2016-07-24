/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');

var dbpool = require('../../utilities/dbpool');

module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    updateUser: updateUser,
    findUsers: findUsers,
    findUserByID: findUserByID,

    addGroup: addGroup,
    removeGroup: removeGroup,
    updateGroup: updateGroup,
    findGroups: findGroups,

    addUserToGroup: addUserToGroup,
    removeUserFromGroup: removeUserFromGroup,
    findUserGroup: findUserGroup,
    findGroupUsers: findGroupUsers
};

/**
 * 创建用户
 * @param uid {String}
 * @param user {Object} 用户信息
 * {
 *      id {String} 用户ID
 *      name {String} 用户名
 *      password {String} 密码(SHA1加密)
 *      description {String}	描述
 *      roles {String} 角色列表, 以逗号分隔
 *      ( 0 - 所有权限
 *      1 - 舆情录入 2 - 舆情日报 3 - 舆情处置 4 - 舆情通报 5 - 舆情反馈 6 - 舆情引导 7 - 舆情分析 8 - 舆情审批
 *      101 - 社情录入 102 - 社情编报
 *      201 - 不良信息录入 202 - 不良信息统计 203 - RTX指令录入
 *      301 - 发布信息 302 - 审批信息
 *      401 - 用户管理
 *      )
 *      priority {Number} 优先级(1 - 市级，2 - 县级)
 * }
 * @param done
 */
function addUser (user, done) {
    var sql_stmt = "INSERT INTO tb_user (" +
        "[id],[name],[password],[description],[role],[priority]" +
        ") VALUES (" +
        "@id, @name, @password, @description, @roles, @priority" +
        ");";
    var objParams = {
        "id": user["id"],
        "name": user["name"],
        "password": user["password"],
        "description": user["description"],
        "roles": user["roles"],
        "priority": user["priority"]
    };

    var ps = dbpool
        .preparedStatement()
        .input("id", sql.VarChar)
        .input("name", sql.NVarChar)
        .input("password", sql.VarChar)
        .input("description", sql.NVarChar)
        .input("roles", sql.VarChar)
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
                return new Error('fail to prepare sql stmt.');
            }
            ps.execute(objParams, function (err, recordset) {
                done(err, recordset)
                ps.unprepare(function (err) {
                    if (err)
                        console.log(err);
                });
            });
        });
}

/**
 * 删除用户
 * @param uid
 * @param removeduid
 * @param callback
 */
function removeUser (uid, removeduid, callback) {
    var sql_stmt = "DELETE FROM tb_user WHERE id = @removeduid;";
    var objParams = {"removeduid": removeduid};
    var ps = dbpool.preparedStatement()
        .input("removeduid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
                return new Error('fail to prepare sql stmt.');
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
 * 修改用户信息 (不能修改ID)
 * @param uid {Number}
 * @param userInfo {Object} 用户信息
 * {
 *      id {String} 用户ID (必填)
 *      name {String} 用户名
 *      password {String} 用户密码
 *      description {String}	描述
 *      roles {Array} 角色列表
 *      ( 0 - 所有权限
 *      1 - 舆情录入 2 - 舆情日报 3 - 舆情处置 4 - 舆情通报 5 - 舆情反馈 6 - 舆情引导 7 - 舆情分析 8 - 舆情审批
 *      101 - 社情录入 102 - 社情编报
 *      201 - 不良信息录入 202 - 不良信息统计 203 - RTX指令录入
 *      301 - 发布信息 302 - 审批信息
 *      401 - 用户管理
 *      )
 * }
 * @param callback
 */
function updateUser (uid, userInfo, callback) {
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
    sql_stmt += " WHERE id = @id;"
    ps.input("id", sql.VarChar);

    var objParams = {
        "id": userInfo['id'],
        "name": userInfo['name'],
        "password": userInfo['password'],
        "description": userInfo['description'],
        "roles": userInfo['roles']
    };

    ps.prepare(sql_stmt, function (err) {
        if (err) {
            return new Error('fail to prepare sql stmt.');
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
 * 更新组 (可更新组描述和优先级，成员在addUser2Group中修改)
 * @param uid {Number} 用户ID
 * @param groupInfo {Object} 组信息
 * {
 *      id {String} 组ID(必须)
 *      name {String} 组名
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 * }
 *
 * @param callback
 */
function updateGroup (uid, groupInfo, callback) {
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
            return new Error('fail to prepare sql stmt.');
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
 * 查找用户, 返回所有用户信息
 * @param uid
 * @param callback
 */
function findUsers (uid, callback) {

    var sql_stmt = "select * from tb_user";
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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

function findUserByID(uid, callback) {
    var sql_stmt = "select * from tb_user where id = @id";
    var objParams = {"id": uid};
    var ps = dbpool.preparedStatement()
        .input("id", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
 * 查找组, 返回所有组信息
 * @param uid
 * @param callback
 */
function findGroups (uid, callback) {
    var sql_stmt = "select * from tb_group";
    var ps = dbpool.preparedStatement()
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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

/**
 * 向指定组内添加用户
 * @param uid 用户ID
 * @param gid 组ID
 * @param callback
 */
function addUserToGroup (uid, gid, callback) {
    var sql_stmt = "INSERT INTO tb_user_group (" +
        "[uid],[gid]) VALUES (@uid, @gid);";
    var objParams = {
        "uid": uid,
        "gid": gid
    };

    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .input("gid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
 * 删除组内用户
 * @param uid
 * @param gid 组ID
 * @param callback
 */
function removeUserFromGroup (uid, gid, callback) {
    var sql_stmt = "DELETE FROM tb_user_group WHERE uid = @uid AND gid = @gid;";
    var objParams = {"uid" : uid, "gid": gid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .input("gid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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
 * 查询用户的groupID
 * @param uid
 * @param userid 需要查询的用户ID
 * @param callback
 */
function findUserGroup (uid, callback) {
    var sql_stmt = "select * from tb_user_group where uid = @uid";
    var objParams = {"uid" : uid};
    var ps = dbpool.preparedStatement()
        .input("uid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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

function findGroupUsers(gid, callback) {
    var sql_stmt = "select * from tb_user_group where gid = @gid";
    var objParams = {"gid" : gid};
    var ps = dbpool.preparedStatement()
        .input("gid", sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return new Error('fail to prepare sql stmt.');
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