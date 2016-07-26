/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var errhandler = require('../../utilities/errhandler');
var service = require('./service');
var test = require('../../../test/index/sysmanage');

module.exports = {
    pageSysManage: pageSysManage,

    getAllUsers: getAllUsers,

    getAllGroups: getAllGroups
};

function pageSysManage (req, res) {
    _testInterface();
    res.render('index/sysmanage');
}

function _testInterface () {
    test._testAddUser();
    test._testUserGroup()

    res.render('index/sysmanage');
}

function getAllUsers (req, res) {
    service.findUsers(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true, data: rs
            });
    });
}

function getAllGroups (req, res) {


}