/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    /* PubVoice input */
    findPubVoiceList: findPubVoiceList,
    findPubVoiceDetail: findPubVoiceDetail,
    addPubVoices: addPubVoices,
    removePubVoices: removePubVoices,
    commitApproval: commitApproval,
    
    /* PV approval */
    findWaitApprovalPV: findWaitApprovalPV,
    approvalPubVoice: approvalPubVoice,
};

function findPubVoiceList (uid, field, order) {
}

function findPubVoiceDetail (uid, pid) {
    throw new Error('');
}

function addPubVoices (uid, obj) {

}

function removePubVoices (uid, pids) {

}

function commitApproval (uid, pids) {

}

/**
 * 查找待审批的舆情
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 */
function findWaitApprovalPV (uid, field, order) {

}

/**
 * 审批舆情
 * @param uid {Number} - 用户ID
 * @param pid {Number} - 舆情id
 * @param obj {Object} - 审批意见{status:}
 */
function approvalPubVoice (uid, pid, obj ) {

}