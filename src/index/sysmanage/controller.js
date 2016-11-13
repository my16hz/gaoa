/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

var errhandler = require('../../utils/errhandler');
var memberService = require('./member.service');
var groupService = require('./group.service');
var configService = require('./configure.service');

var menukey = config.session.menukey;
var userkey = config.session.userkey;

module.exports = {
    pageSysManage: pageSysManage,

    getUsers: getUsers,
    saveUser: saveUser,
    removeUsers: removeUsers,
    updateUserPassword: updateUserPassword,
    resetUserPassword: resetUserPassword,

    getGroups: getGroups,
    saveGroup: saveGroup,
    removeGroups: removeGroups,
    getGroupMembers: getGroupMembers,
    addUserToGroup: addUserToGroup,

    getConfigure: getConfigure,
    updateConfigure: updateConfigure
};

function pageSysManage (req, res) {
    res.render('index/sysmanage', {
        menus: req.session[config.session.menukey],
        user: req.session[userkey].name || '匿名用户',
        uid: req.session[userkey].id || ''
    });
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

    memberService[isNew == 'true' ? 'addUser' : 'updateUser'](user, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function updateUserPassword (req, res) {
    var userkey = config.session.userkey;

    var oldpwd = req.body.oldpwd;
    var newpwd = req.body.newpwd;
    var uid = req.session[userkey].id;

    memberService.updateUserPassword(uid, oldpwd, newpwd, function (err, rs) {
        var body = {success: rs};

        if (err) {
            errhandler.internalException(res, err);
        } else {
            if(rs) {
                req.session[userkey] = null;
            } else {
                body.message = '原密码不正确。';
            }

            res.send(body);
        }
    })
}

function resetUserPassword (req, res) {
    var newpwd = req.body.pwd;
    var uid = req.body.uid;

    memberService.resetUserPassword(uid, newpwd, function (err) {
        if (err) {
            errhandler.internalException(res, err);
        } else {
            res.send({
                success: true
            });
        }
    })
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

function getConfigure (req, res) {
    configService.getConfigure(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    })
}

function updateConfigure (req, res) {
    var body = req.body;
    var config = {
        "id": body['id'],
        "name": body['name'],
        "value": body['value']
    }
    configService.updateConfigure(config, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    })
}