/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');

var errhandler = require('../../utilities/errhandler');
var service = require('./service');

module.exports = {
    pagePubVoice: pagePubVoice,

    getPubVoices: getPubVoices,
    savePubVoice: savePubVoice,
    updatePubVoice: updatePubVoice,
    removePubVoice: removePubVoice,
    importPubVoice: importPubVoice,
    applyApprobation: applyApprobation,
    getApplications: getApplications,
    saveApplication: saveApplication,
    getDailyReports: getDailyReports,
    getDailyDetail: getDailyDetail,
    getDisposeList: getDisposeList,
    savePVDispose: savePVDispose,
    getDisposeDetail: getDisposeDetail,
    getFeedbackDetail: getFeedbackDetail,
    saveFeedback: saveFeedback,
    getGuideDetail: getGuideDetail,
    saveGuide: saveGuide

};

function pagePubVoice (req, res) {
    res.render('index/publicvoice');
}

function getPubVoices (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority,
        order = req.query["order"];
    service.findPubVoiceList(uid, priority, "createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function savePubVoice (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id;
    var obj = req.body;

    if(obj['id'] != '') {
        var pvid = obj['id'];
        var pubVoice = {
            "title": obj["title"],
            "item": obj["item"],
            "type": obj["type"],
            "relate_department": obj["relate_department"],
            "duty_department": obj["duty_department"],
            "fellow_count": obj["fellow_count"],
            "review_count": obj["review_count"],
            "content": obj["content"],
            "from_website": obj["from_website"],
            "url": obj["url"]
        };
        service.updatePubVoice(pvid, pubVoice, function (err) {
            err ?
                errhandler.internalException(res, err) :
                res.send({
                    success: true
                });
        });
    } else {
        var pubVoice = {
            "title": obj["title"],
            "createtime": new Date(),
            "item": obj["item"],
            "type": obj["type"],
            "relate_department": obj["relate_department"],
            "duty_department": obj["duty_department"],
            "fellow_count": obj["fellow_count"],
            "review_count": obj["review_count"],
            "content": obj["content"],
            "from_website": obj["from_website"],
            "url": obj["url"],
            "state": 0,
            "approved_state": 0,
            "dispose_stat": 0,
            "feedback_state": 0,
            "createuser": uid
        };
        service.addPubVoices(uid, pubVoice, function (err) {
            err ?
                errhandler.internalException(res, err) :
                res.send({
                    success: true
                });
        });
    }
}

function updatePubVoice(req, res) {
    var obj = req.body;
    var pvid = obj['id'];
    var pubVoice = {
        "title": obj["title"],
        "item": obj["item"],
        "type": obj["type"],
        "relate_department": obj["relate_department"],
        "duty_department": obj["duty_department"],
        "fellow_count": obj["fellow_count"],
        "review_count": obj["review_count"],
        "content": obj["content"],
        "from_website": obj["from_website"],
        "url": obj["url"]
    };
    service.updatePubVoice(pvid, pubVoice, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function removePubVoice (req, res) {
    var ids = req.body.ids;

    service.removePubVoices(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function importPubVoice (req, res) {
}

function applyApprobation (req, res) {
    var ids = req.body.ids;

    service.commitApproval(ids.split(','), function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getApplications (req, res) {
    var order = req.query["order"];
    service.findWaitApprovalPV("createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveApplication (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id;
    var pvid = req.body.id[0];
    var content = req.body.approveContent[0];
    var result = req.body.approveResult[0];
    service.approvalPubVoice(uid, {'pvid':pvid, 'content':content, 'result':result}, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDailyReports (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id,
        priority = req.session[userkey].priority,
        order = req.query["order"];
    service.findDailyList("createtime", order, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDailyDetail(req, res) {
    var did = req.query.id;
    service.findDailyDetail(did, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getDisposeList(req, res) {
    var did = req.query.id;
    service.getDailyPVList(did, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
    
}

function savePVDispose (req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id;
    var obj = req.body;
    var dispose = {
        "id": obj["id"],
        "createtime": new Date(),
        "state": "0",
        "content": obj["content"],
        "createuser": uid
    };

    service.addPVDispose(uid, dispose, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getDisposeDetail (req, res) {
    var pvid = req.query.id;
    service.getPVDispose(pvid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getFeedbackDetail(req, res) {
    var pvid = req.query.id;
    var type = req.query.type;
    service.getPVFeedback(pvid, type, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveFeedback(req, res) {
    var userkey = config.session.userkey;
    var uid = req.session[userkey].id;
    var obj = req.body;
    var feedback = {
        "id": obj["id"],
        "createtime": new Date(),
        "type": obj['type'],
        "content": obj["content"],
        "createuser": uid
    };

    service.addPVFeedback(uid, feedback, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function getGuideDetail(req, res) {
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

function saveGuide(req, res) {
    var userkey = config.session.userkey;
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
