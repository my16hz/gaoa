/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('./service');
var test = require('../../../test/index/publicvoice')

module.exports = {
    pagePubVoice: pagePubVoice
};

function pagePubVoice (req, res) {
    _testInferface();
    res.render('index/publicvoice');
}

function _testInferface () {
/*    test.testAddPV();
    test.testFindPVList();
    test.testCommitPV();
    test.testRemovePV();
    test.testFindWaitApprovalPV();
    test.testApprovalPV();
    test.testFindPubVoiceDetail();*/
    test.testCreateDaily();
}