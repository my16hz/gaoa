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
    _testSerivce()
    res.render('index/sysmanage');
}

function _testSerivce() {
    var userInfo = {};
    userInfo['name'] = 'lilong';
    userInfo['password'] = '123456';
    userInfo['description'] = '李龙';
    userInfo['roles'] = '0';

    service.addUser('1', userInfo, function(err, rs) {
        console.log(err);
    })
}