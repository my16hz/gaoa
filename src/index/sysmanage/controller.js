/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('./service');
var test = require('../../../test/index/sysmanage')

module.exports = {
    pageSysManage: pageSysManage
};

function pageSysManage (req, res) {
    _testInterface();
    res.render('index/sysmanage');
}

function _testInterface () {
    test._testAddUser();
    test._testUserGroup()
}