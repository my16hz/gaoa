/**
 * Build Date: 07-26-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('../../src/index/sysmanage/member.service')
var groupservice = require('../../src/index/sysmanage/group.service')
module.exports = {
    _testAddUser: _testAddUser,
    _testAddGroup:_testAddGroup,
    _testRemoveUsers:_testRemoveUsers,
    _testUpdateUser:_testUpdateUser,
    _testRemoveGroup:_testRemoveGroup,
    _testUpdateUser:_testUpdateUser,
    _testUpdateGroup:_testUpdateGroup,
    _testFindUser:_testFindUser,
    _testFindGroup:_testFindGroup,
    _testAddUser2Group:_testAddUser2Group,
    _testRemoveUserFromGroup:_testRemoveUserFromGroup,
    _testUserGroup:_testUserGroup,
    _testUpdateUserPassword:_testUpdateUserPassword
};

function _testAddUser() {
    var userInfo = {};
    userInfo['id'] = 'lilong1';
    userInfo['name'] = 'lilong';
    userInfo['password'] = '123456';
    userInfo['description'] = '李龙';
    userInfo['roles'] = '0';
    userInfo['priority'] = 2;
    userInfo['groupid'] = "admin"

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

    groupservice.addGroup(groupInfo, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveUsers() {
    service.removeUsers(['lilong1'], function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveGroup() {
    groupservice.removeGroups(['lilong'], function(err, rs) {
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
    service.findUsers(function(err, rs) {
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

function _testUpdateUserPassword() {
    service.updateUserPassword("lilong", '123456', '123', function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}