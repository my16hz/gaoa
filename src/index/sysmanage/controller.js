/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('./service');
module.exports = {
    pageSysManage: pageSysManage
};

function pageSysManage (req, res) {
    _testAddUser();
    _testUserGroup()
    res.render('index/sysmanage');
}

function _testAddUser() {
    var userInfo = {};
    userInfo['id'] = 'lilong';
    userInfo['name'] = 'lilong';
    userInfo['password'] = '123456';
    userInfo['description'] = '李龙';
    userInfo['roles'] = '0';
    userInfo['priority'] = 2;

    service.addUser(userInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testAddGroup() {
    var groupInfo = {};
    groupInfo['name'] = 'lilong1';
    groupInfo['description'] = '李龙';
    groupInfo['priority'] = 0;

    service.addGroup(groupInfo, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveUser() {
    service.removeUser('1', 10, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveGroup() {
    service.removeGroup('admin', 'lilong', function(err, rs) {
        if (err) console.log(err);
    })
}

function _testUpdateUser() {
    var userInfo = {};
    userInfo['id'] = "lilong";
    userInfo['password'] = '123456';
    service.updateUser('1', userInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })

    userInfo['description'] = '李龙';
    service.updateUser('1', userInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })

    userInfo['roles'] = '0,1';
    service.updateUser('1', userInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testUpdateGroup() {
    var groupInfo = {};
    groupInfo['id'] = "lilong";
    groupInfo['description'] = '李龙';
    groupInfo['priority'] = 1;

    service.updateGroup('1', groupInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })
}

function _testFindUser() {
    service.findUsers('admin', function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })    
}

function _testFindGroup() {
    service.findGroups('admin', function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })    
}

function _testAddUser2Group() {
    service.addUserToGroup("admin", "admin", function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testRemoveUserFromGroup() {
    service.removeUserFromGroup("admin", "admin", function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testUserGroup() {
    _testAddUser2Group();
    service.findUserGroup("admin", function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
    service.findGroupUsers("admin", function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}