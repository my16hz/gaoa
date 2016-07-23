/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var dbpool = require('../../utilities/dbpool');

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
    removeUserFromGroup: removeUserFromGroup,
    findUserGroup : findUserGroup
};

/**
 * 创建用户
 * @param uid {Number}
 * @param userInfo {Object} 用户信息
 * {
 *      username {String} 用户名
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
 * }
 * @param callback
 */
function addUser (uid, userInfo, callback) {
    var sql_stmt = "INSERT INTO tb_user([name],[password],[description],[role]) VALUES(@name, @password, @description, @roles);";
    var objParams = {"name" : userInfo["name"], "password" : userInfo["password"], "description" : userInfo["description"], "roles" : userInfo["roles"] };
    var ps = dbpool.preparedStatement();
    ps.input("name", dbpool.getTypes('string'));
    ps.input("password", dbpool.getTypes('string'));
    ps.input("description", dbpool.getTypes('string'));
    ps.input("roles", dbpool.getTypes('string'));
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
            if (err)
                console.log(err);           
        });                                     
      });
    });        
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
function addGroup (uid, groupInfo, callback) {
    var sql_stmt = "INSERT INTO tb_group([name],[description],[priority]) VALUES(@name, @description, @priority);";
    var objParams = {"name" : groupInfo["name"], "description" : groupInfo["description"], "priority" : groupInfo["priority"] };
    var ps = dbpool.preparedStatement();
    ps.input("name", dbpool.getTypes('string'));
    ps.input("description", dbpool.getTypes('string'));
    ps.input("priority", dbpool.getTypes('int'));
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
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
    sql_stmt = "DELETE FROM tb_user WHERE id = " + removeduid;
    dbpool
        .createRequest()
        .query(sql_stmt, function (err, rs) {
            callback(err,rs);
        });
    var sql_stmt = "DELETE FROM tb_user WHERE id = @removeduid;";
    var objParams = {"removeduid" : removeduid };
    var ps = dbpool.preparedStatement();
    ps.input("removeduid", dbpool.getTypes('int'));
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
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
    sql_stmt = "DELETE FROM tb_group WHERE id = " + removedgid;
    dbpool
        .createRequest()
        .query(sql_stmt, function (err, rs) {
            callback(err,rs);
        });
    var sql_stmt = "DELETE FROM tb_user WHERE id = @removedgid;";
    var objParams = {"removedgid" : removedgid };
    var ps = dbpool.preparedStatement();
    ps.input("removedgid", dbpool.getTypes('int'));
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
            if (err)
                console.log(err);           
        });                                     
      });
    });  
}

/**
 * 修改用户信息 (不能修改用户名和ID)
 * @param uid {Number}
  * @param userInfo {Object} 用户信息
 * {
 *      id {Number} 用户ID (必填)
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
    if (userInfo.hasOwnProperty('password')) {
        sql_stmt += " [password] = @password, ";
        ps.input("password", dbpool.getTypes('string'));
    }
    if (userInfo.hasOwnProperty('description')) {
        sql_stmt += " [description] = @description, ";
        ps.input("description", dbpool.getTypes('string'));
    }
    if (userInfo.hasOwnProperty('roles')) {
        sql_stmt += " [role] = @roles ";
        ps.input("roles", dbpool.getTypes('string'));
    }
    sql_stmt += " WHERE id = @id;"
    ps.input("id", dbpool.getTypes('int'));

    console.log(sql_stmt);
    var objParams = {"id" : userInfo['id'], "password" : userInfo['password'], "description" : userInfo['description'], "roles" : userInfo['roles']};

    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
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
 *      id {Number} 组ID(必须)
 *      priority	优先级 1 - 市级 2 - 县级
 *      description	描述
 * }
 *
 * @param callback
 */
function updateGroup (uid, groupInfo, callback) {
    var ps = dbpool.preparedStatement();
    var sql_stmt = "UPDATE tb_group SET ";
    if (groupInfo.hasOwnProperty('description')) {
        sql_stmt += " [description] = @description, ";
        ps.input("description", dbpool.getTypes('string'));
    }
    if (groupInfo.hasOwnProperty('priority')) {
        sql_stmt += " [priority] = @priority ";
        ps.input("priority", dbpool.getTypes('int'));
    }
    sql_stmt += " WHERE id = @id;"
    ps.input("id", dbpool.getTypes('int'));

    console.log(sql_stmt);
    var objParams = {"id" : groupInfo['id'],  "description" : groupInfo['description'], "priority" : groupInfo['priority']};

    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute(objParams, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
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
    var ps = dbpool.preparedStatement();
    var sql_stmt = "select * from tb_user";
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute( {}, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
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
    var ps = dbpool.preparedStatement();
    var sql_stmt = "select * from tb_group";
    ps.prepare(sql_stmt, function(err) {
      if ( err ) {
        return new Error('fail to prepare sql stmt.');
      }
      ps.execute( {}, function(err, recordset)     {                                               
        callback(err, recordset)
        ps.unprepare(function(err) {
            if (err)
                console.log(err);           
        });                                     
      });
    });  
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

/**
 * 查询用户的groupID
 * @param uid
 * @param userid 需要查询的用户ID
 * @param callback
 */
function findUserGroup(uid, userid, callback) {

}
