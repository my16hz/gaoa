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

    addUser: addUser,

    removeUsers: removeUsers,

    getAllGroups: getAllGroups
};

function pageSysManage (req, res) {
    res.render('index/sysmanage');
}

function getAllUsers (req, res) {
    service.findUsers(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function addUser (req, res) {
    service.addUser({
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
    service.removeUsers(req.body.ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getAllGroups (req, res) {
    service.findGroups(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}