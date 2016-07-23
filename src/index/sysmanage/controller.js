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
    userInfo['name'] = 'lilo1';
    userInfo['password'] = '123456';
    userInfo['description'] = 'lilong';
    userInfo['roles'] = '0,1,2,3,4,5,6';

    service.addUser('1', userInfo, function(err, rs) {
        console.log(rs);
    })
}