/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utilities/errhandler');
var service = require('./../service');
module.exports = {
    getGuideDetail: getGuideDetail,
    saveGuide: saveGuide
};

function getGuideDetail (req, res) {
    var pvid = req.query.id;
    service.getPVGuide(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveGuide (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var guide = {
        "id": obj["id"],
        "createtime": new Date(),
        "createuser": uid,
        "content": obj["content"],
        "guide_name": obj['guide_name'],
        "guide_type": obj['guide_type'],
        "guide_result": obj['guide_result'],
        "guide_count": obj['guide_count']
    };

    service.addPVGuide(uid, guide, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}
