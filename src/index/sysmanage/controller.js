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
    _testFindGroup()
    res.render('index/sysmanage');
}

function _testAddUser() {
    var userInfo = {};
    userInfo['name'] = 'lilong1';
    userInfo['password'] = '123456';
    userInfo['description'] = '李龙';
    userInfo['roles'] = '0';

    service.addUser('1', userInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testAddGroup() {
    var groupInfo = {};
    groupInfo['name'] = 'lilong1';
    groupInfo['description'] = '李龙';
    groupInfo['priority'] = 0;

    service.addGroup('1', groupInfo, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveUser() {
    service.removeUser('1', 10, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testRemoveGroup() {
    service.removeGroup('1', 9, function(err, rs) {
        if (err) console.log(err);
    })
}

function _testUpdateUser() {
    var userInfo = {};
    userInfo['id'] = 1;
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
    groupInfo['id'] = 1;
    groupInfo['description'] = '李龙';
    groupInfo['priority'] = 1;

    service.updateGroup('1', groupInfo, function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })
}

function _testFindUser() {
    service.findUsers('1', function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })    
}

function _testFindGroup() {
    service.findGroups('1', function(err, rs) {
        if (err) console.log(err);
        else console.log(rs);        
    })    
}