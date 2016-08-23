/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var extend = require('extend');

var errhandler = require('../../utilities/errhandler');
var service = require('./service');

var controller = module.exports = {
    pagePubVoice: pagePubVoice,

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
    saveGuide: saveGuide,
    getAlertList: getAlertList,
    saveAlert: saveAlert
};

extend(
    controller,
    require('./subpages/analyze.controller'),
    require('./subpages/approve.controller'),
    require('./subpages/dailyreport.controller'),
    require('./subpages/dispose.controller'),
    require('./subpages/feedback.controller'),
    require('./subpages/guide.controller'),
    require('./subpages/notify.controller'),
    require('./subpages/record.controller')
);

function pagePubVoice (req, res) {
    res.render('index/publicvoice');
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
    service.approvalPubVoice(uid, {'pvid': pvid, 'content': content, 'result': result}, function (err, rs) {
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

function getDailyDetail (req, res) {
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

function getDisposeList (req, res) {
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

function getFeedbackDetail (req, res) {
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

function saveFeedback (req, res) {
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

function getAlertList (req, res) {
    var flag = req.query.flag;
    service.getAlertList(flag, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveAlert (req, res) {
    var obj = req.body;
    var alert = {
        "title": obj["title"],
        "date": obj["date"],
        "department": obj["department"],
        "sender": obj["sender"],
        "receiver": obj["receiver"],
        "type": obj["type"],
        "content": obj["content"],
        "endtime": obj["endtime"],
        "state": obj["state"]
    };

    service.addPVGuide(uid, alert, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}
