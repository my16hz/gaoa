/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var errhandler = require('../../utilities/errhandler');
var memberService = require('./member.service');
var groupService = require('./group.service');

module.exports = {
    pageSysManage: pageSysManage,

    getUsers: getUsers,
    saveUser: saveUser,
    removeUsers: removeUsers,

    getGroups: getGroups,
    saveGroup: saveGroup,
    removeGroups: removeGroups,
    getGroupMembers: getGroupMembers,
    addUserToGroup: addUserToGroup
};

function pageSysManage (req, res) {
    res.render('index/sysmanage');
}

function getUsers (req, res) {
    memberService.findUsers(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveUser (req, res) {
    var isNew = req.body.isNew;
    var user = {
        id: req.body.id,
        name: req.body.name,
        password: req.body.password,
        description: req.body.description,
        role: req.body.role,
        priority: req.body.priority,
        groupid: req.body.groupid
    };

    memberService[isNew ? 'addUser' : 'updateUser'](user, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function removeUsers (req, res) {
    var ids = req.body.ids;

    memberService.removeUsers(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getGroups (req, res) {
    groupService.findGroups(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveGroup (req, res) {
    var isNew = req.body.isNew;
    var group = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority
    };

    groupService[isNew ? 'addGroup' : 'updateGroup'](group, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function removeGroups (req, res) {
    var ids = req.body.ids;

    groupService.removeGroups(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getGroupMembers (req, res) {
    var gpid = req.params.gpid;

    groupService.findGroupUsers(gpid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function addUserToGroup (req, res) {
    var gpid = req.params.gpid;
    var uid = req.body.user;

    groupService.addUserToGroup(uid, gpid, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getGroupMembers (req, res) {
    var gpid = req.params.gpid;

    groupService.findGroupUsers(gpid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function addUserToGroup (req, res) {
    var gpid = req.params.gpid;
    var uid = req.body.user;

    groupService.addUserToGroup(uid, gpid, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    })
}