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
    addUser: addUser,
    removeUsers: removeUsers,

    getGroups: getGroups,
    addGroup: addGroup,
    removeGroups: removeGroups
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

function addUser (req, res) {
    memberService.addUser({
        id: req.body.id,
        name: req.body.name,
        password: req.body.password,
        description: req.body.description,
        role: req.body.role,
        priority: req.body.priority,
        groupid: req.body.groupid
    }, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function removeUsers (req, res) {
    memberService.removeUsers(req.body.ids.split(','), function (err) {
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

function addGroup (req, res) {

}

function removeGroups (req, res) {

}