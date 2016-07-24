/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('./service');
module.exports = {
    pagePubVoice: pagePubVoice
};

function pagePubVoice (req, res) {
    _testAddPV();
    _testFindPVList();
    res.render('index/publicvoice');
}

function _testFindPVList() {
    service.findPubVoiceList('admin', "", "", function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}

function _testAddPV() {
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
    obj["createuser"] = "admin";

    service.addPubVoices("admin", obj, function (err, rs) {
        if (err) console.log(err);
        else console.log(rs);
    })
}