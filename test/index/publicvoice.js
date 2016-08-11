/**
 * Build Date: 07-26-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('../../src/index/publicvoice/service')

module.exports = {
    testFindPVList: testFindPVList,
    testAddPV:testAddPV,
    testRemovePV:testRemovePV,
    testCommitPV:testCommitPV,
    testFindWaitApprovalPV:testFindWaitApprovalPV,
    testApprovalPV:testApprovalPV,
    testFindPubVoiceDetail:testFindPubVoiceDetail,
    testCreateDaily:testCreateDaily,
    testImportPV:testImportPV
};

function testFindPVList() {
    service.findPubVoiceList('lilong', "createtime", "DESC", function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testFindPubVoiceDetail () {
    service.findPubVoiceDetail('lilong', [5, 6, 7], "createtime", "DESC", function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testAddPV() {
    var obj = {};
    obj["title"] = "lilong";
    obj["createtime"] = new Date().toLocaleString();
    obj["item"] = "lilong";
    obj["type"] = "lilong";
    obj["relate_department"] = "lilong";
    obj["duty_department"] = "lilong";
    obj["fellow_count"] = 1;
    obj["review_count"] = 1;
    obj["content"] = "lilong";
    obj["from_website"] = "lilong";
    obj["url"] = "lilong";
    obj["state"] = 0;
    obj["approved_state"] = 0;
    obj["dispose_stat"] = 0;
    obj["feedback_state"] = 0;
    obj["createuser"] = "lilong";

    service.addPubVoices("admin", obj, function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testRemovePV() {
    service.removePubVoices("admin", [0, 1, 2, 3, 4], function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testCommitPV () {
    service.commitApproval("admin", [5, 6, 7, 8, 9], function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testFindWaitApprovalPV () {
    service.findWaitApprovalPV('lilong', "id", "DESC", function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testApprovalPV () {
    var obj = {}
    obj['pvid'] = 10;
    obj['createuser'] = "admin";
    obj['type'] = 0;
    obj['createtime'] = new Date();
    obj['content'] = "通过";
    obj['result'] = 0;

    service.approvalPubVoice('lilong', obj, function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testCreateDaily () {
    var obj = {}
    obj['id'] = 10;
    obj['issue_id'] = 100;
    obj['content'] = "test";
    obj['pvids'] = '1,2,3';

    service.createDaily('lilong', obj, function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function testImportPV () {
    service.importPubVoices("lilong", "admin", "D:\\workspace\\gaoa\\publicvoice.xlsx", function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}