/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var express = require('express');
var controller = require('./controller');

module.exports = function () {
    return express.Router()
        .get('/sysmanage', controller.pageSysManage)
        .get('/sysmanage/members', controller.getAllUsers)
        .post('/sysmanage/members/add', controller.addUser)
        .post('/sysmanage/members/del', controller.removeUsers)
        .get('/sysmanage/groups', controller.getAllGroups);
};