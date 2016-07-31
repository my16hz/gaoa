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
        .get('/sysmanage/members', controller.getUsers)
        .post('/sysmanage/members/add', controller.addUser)
        .delete('/sysmanage/members/del', controller.removeUsers)
        .get('/sysmanage/groups', controller.getGroups)
        .post('/sysmanage/groups/add', controller.addGroup)
        .delete('/sysmanage/groups/del', controller.removeGroups)
};