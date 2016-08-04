/**
 * Build Date: 07-31-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var sql = require('mssql');

var dbpool = require('../../utilities/dbpool');

module.exports = {
    /**
     * 查找用户, 返回所有用户信息
     * @param done
     */
    findUsers: findUsers,
    /**
     * 创建用户
     * @param user {Object} - 用户信息 {
     *      id: {String}, // 用户ID
     *      name: {String}, // 用户名
     *      password: {String}, // 密码(SHA1加密)
     *      description: {String},	// 描述
     *      role: {String}, //角色列表, 以逗号分隔 (
     *          11 - 舆情录入, 12 - 舆情日报, 13 - 舆情处置, 14 - 舆情通报, 15 - 舆情反馈, 16 - 舆情引导, 17 - 舆情分析, 18 - 舆情审批, 19 - 舆情预警
     *          21 - 社情录入, 22 - 社情编报
     *          31 - 不良信息录入, 32 - 不良信息统计, 33 - RTX指令录入
     *          41 - 发布信息, 42 - 审批信息
     *          51 - 用户管理
     *      )
     *      priority {Number} - 优先级(1:市级，2:县级)
     *      groupid {String} - 用户所在组
     * }
     * @param done
     */
    addUser: addUser,
    /**
     * 删除用户
     * @param uids {Array} 待删除的用户列表
     * @param done
     */
    removeUsers: removeUsers,
    /**
     * 更新用户信息 (不能修改ID)
     * @param user {Object} 用户信息
     * {
     *      id: {String}, // 用户ID (必填)
     *      name: {String}, // 用户名
     *      description: {String},  // 描述
     *      roles: {Array}, // 角色列表 (
     *          11 - 舆情录入, 12 - 舆情日报, 13 - 舆情处置, 14 - 舆情通报, 15 - 舆情反馈, 16 - 舆情引导, 17 - 舆情分析, 18 - 舆情审批, 19 - 舆情预警
     *          21 - 社情录入, 22 - 社情编报
     *          31 - 不良信息录入, 32 - 不良信息统计, 33 - RTX指令录入
     *          41 - 发布信息, 42 - 审批信息
     *          51 - 用户管理
     *      )
     *      priority {Number} - 优先级(1:市级，2:县级)
     *      groupid {String} - 用户所在组ID
     *      groupname {String} - 用户所在组名
     * }
     * @param done
     */
    updateUser: updateUser
};

function findUsers (done) {
    var sql_stmt = 'SELECT ' +
        'tb_user.id, tb_user.name, tb_user.description, tb_user.role, tb_user.priority, tb_user.createtime, tb_user.groupid, ' +
        'tb_group.name as groupname ' +
        'FROM tb_user,tb_group ' +
        'WHERE tb_user.groupid = tb_group.id ' +
        'ORDER BY tb_user.createtime DESC';
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

function addUser (user, done) {
    var sql_stmt = 'INSERT INTO tb_user (' +
        '[id],[name],[password],[description],[role],[priority],[createtime],[groupid]' +
        ') VALUES (' +
        '@id, @name, @password, @description, @role, @priority, @createtime, @groupid' +
        ');';
    var objParams = {
        id: user.id,
        name: user.name,
        password: user.password,
        description: user.description,
        role: user.role,
        priority: user.priority,
        createtime: new Date(),
        groupid: user.groupid
    };

    var ps = dbpool
        .preparedStatement()
        .input('id', sql.VarChar)
        .input('name', sql.NVarChar)
        .input('password', sql.VarChar)
        .input('description', sql.NVarChar)
        .input('role', sql.VarChar)
        .input('priority', sql.Int)
        .input('groupid', sql.VarChar)
        .input('createtime', sql.DateTime2)
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

function removeUsers (uids, done) {
    var sql_stmt = 'DELETE FROM tb_user WHERE [id] in (%ids%);';

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

function updateUser (user, done) {
    var sql_stmt = 'UPDATE tb_user SET ' +
        '[name] = @name,' +
        '[description] = @description,' +
        '[role] = @role,' +
        '[priority] = @priority,' +
        '[groupid] = @groupid ' +
        'WHERE [id] = @id;';
    var objParams = {
        id: user.id,
        name: user.name,
        description: user.description,
        role: user.role,
        priority: user.priority,
        groupid: user.groupid
    };

    var ps = dbpool
        .preparedStatement()
        .input('id', sql.VarChar)
        .input('name', sql.NVarChar)
        .input('description', sql.NVarChar)
        .input('role', sql.VarChar)
        .input('priority', sql.Int)
        .input('groupid', sql.VarChar)
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