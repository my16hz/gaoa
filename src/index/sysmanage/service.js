/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    updateUser: updateUser,
    findUsers: findUsers,

    addGroup: addGroup,
    removeGroup: removeGroup,
    updateGroup: updateGroup,
    findGroups: findGroups,

    addUserToGroup: addUser2Group,
    removeUserFromGroup: removeUserFromGroup
};

/**
 * 创建用户
 * @param uid {Number}
 * @param userInfo {Object} 用户信息
 * {
 *      username {String} 用户名
 *      loginname {String} 登录名
 *      password {String} 密码(SHA1加密)
 *      description {String}	描述
 *      createtime {Date}	创建时间
 *      createuser {String}	创建者
 *      group {Number} 组ID
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
function addUser (uid, userInfo, callback) {

}

/**
 * 创建组
 * @param uid {Number} 用户ID
 * @param groupInfo {Object} 组信息
 * {
 *      name	组名
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 *      createtime	创建时间
 *      createuser	创建者
 * }
 *
 * @param callback
 */
function addGroup (uid, groupInfo, callback) {

}

/**
 * 删除用户
 * @param uid
 * @param removeduid
 * @param callback
 */
function removeUser (uid, removeduid, callback) {

}

/**
 * 删除用户组
 * @param uid
 * @param removedgid
 * @param callback
 */
function removeGroup (uid, removedgid, callback) {

}

/**
 * 修改用户信息（不含密码和用户组）
 * @param uid {Number}
 * @param userInfo {Object} 用户信息
 * {
 *      username {String} 用户名
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

}

/**
 * 创建组
 * @param uid {Number} 用户ID
 * @param groupInfo {Object} 组信息
 * {
 *      name	组名
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 * }
 *
 * @param callback
 */
function updateGroup (uid, groupInfo, callback) {
}

/**
 * 查找用户, 返回所有用户信息
 * @param uid
 * @param callback
 */
function findUsers (uid, callback) {

}

/**
 * 查找组, 返回所有组信息
 * @param uid
 * @param callback
 */
function findGroups (uid, callback) {

}

/**
 * 向指定组内添加用户
 * @param uid
 * @param gid 组ID
 * @param users {Array} 用户ID列表
 * @param callback
 */
function addUser2Group (uid, gid, users, callback) {

}

/**
 * 删除组内用户
 * @param uid
 * @param gid 组ID
 * @param users {Array} 用户ID列表
 * @param callback
 */
function removeUserFromGroup (uid, gid, users, callback) {

}