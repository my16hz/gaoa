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
        .post('/sysmanage/members/save', controller.saveUser)
        .delete('/sysmanage/members/delete', controller.removeUsers)
        .put('/sysmanage/members/modifypwd', controller.updateUserPassword)
        .put('/sysmanage/members/resetpwd', controller.resetUserPassword)

        .get('/sysmanage/groups', controller.getGroups)
        .post('/sysmanage/groups/save', controller.saveGroup)
        .delete('/sysmanage/groups/delete', controller.removeGroups)
        .get('/sysmanage/groups/:gpid/members', controller.getGroupMembers)
        .post('/sysmanage/groups/:gpid/addmember', controller.addUserToGroup)

        .get('/sysmanage/configure', controller.getConfigure)
        .post('/sysmanage/configure/update', controller.updateConfigure)
};