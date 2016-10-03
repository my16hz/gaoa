/**
 * Build Date: 07-31-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');

var dbpool = require('../../utils/dbpool');

module.exports = {
    /**
     * 查找组, 返回所有组信息
     * @param done
     */
    findGroups: findGroups,
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
    /**
     * 删除用户组
     * @param gpids {Array}
     * @param done
     */
    removeGroups: removeGroups,
    /**
     * 更新组信息 (可更新组描述和优先级，成员在addUser2Group中修改)
     * @param group {Object} - 组信息
     * {
     *      id: {String}, // 组ID(必须)
     *      name: {String}, // 组名
     *      priority: {Number}, // 优先级(1:市级，2:县级)
     *      description: {String} // 描述
     * }
     *
     * @param done
     */
    updateGroup: updateGroup,
    /**
     * 向指定组内添加用户
     * @param uid {String} - 用户ID
     * @param gpid {String} - 组ID
     * @param done
     */
    addUserToGroup: addUserToGroup,
    /**
     * 删除用户所属组
     * @param uid {String} - 用户 ID
     * @param done
     */
    removeUserFromGroup: removeUserFromGroup,
    /**
     * 查找group下的用户
     * @param gpid {String} - 组 ID
     * @param done
     */
    findGroupUsers: findGroupUsers
};

function findGroups (done) {
    var sql_stmt = 'SELECT * FROM tb_group';

    var ps = dbpool
        .preparedStatement()
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

function addGroup (group, done) {
    var sql_stmt = 'INSERT INTO tb_group (' +
        '[id],[name],[description],[priority],[createtime]' +
        ') VALUES (' +
        '@id, @name, @description, @priority, @createtime' +
        ');';
    var objParams = {
        id: group.id,
        name: group.name,
        description: group.description,
        priority: group.priority,
        createtime: new Date()
    };

    var ps = dbpool
        .preparedStatement()
        .input('id', sql.VarChar)
        .input('name', sql.NVarChar)
        .input('description', sql.NVarChar)
        .input('priority', sql.Int)
        .input('createtime', sql.DateTime2)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, false);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function removeGroups (gpids, done) {
    var sql_stmt = 'DELETE FROM tb_group WHERE id in (%ids%);';

    var ps = dbpool
        .preparedStatement()
        .prepare(sql_stmt.replace('%ids%', '\'' + gpids.join('\',\'') + '\''), function (err) {
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

function updateGroup (group, done) {
    var sql_stmt = 'UPDATE tb_group SET ' +
        '[name] = @name,' +
        '[description] = @description,' +
        '[priority] = @priority ' +
        'WHERE [id] = @id;';
    var objParams = {
        id: group.id,
        name: group.name,
        description: group.description,
        priority: group.priority
    };

    var ps = dbpool
        .preparedStatement()
        .input('name', sql.NVarChar)
        .input('description', sql.NVarChar)
        .input('priority', sql.Int)
        .input('id', sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, false);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function addUserToGroup (uid, gpid, done) {
    var sql_stmt = 'UPDATE tb_user SET [groupid] = @gpid WHERE [id] = @uid;';
    var objParams = {
        uid: uid,
        gpid: gpid
    };

    var ps = dbpool
        .preparedStatement()
        .input('uid', sql.VarChar)
        .input('gpid', sql.VarChar)
        .prepare(sql_stmt, function (err) {
            if (err) {
                return done(err, false);
            }

            ps.execute(objParams, function (err, rs) {
                done(err, rs);

                ps.unprepare(function (err) {
                    err && console.error(err);
                });
            });
        });
}

function removeUserFromGroup (uid, done) {
    addUserToGroup(uid, null, done);
}

function findGroupUsers (gpid, done) {
    var sql_stmt = 'SELECT ' +
        'id, name, description, groupid ' +
        'FROM tb_user ' +
        'WHERE groupid = @gpid';
    var objParams = {gpid: gpid};

    var ps = dbpool
        .preparedStatement()
        .input('gpid', sql.VarChar)
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