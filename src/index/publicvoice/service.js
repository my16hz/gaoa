/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    /*---------- 舆情导入页面 ----------*/
    /* 查询舆情列表 */
    findPubVoiceList: findPubVoiceList,
    /* 查询舆情详情 */
    findPubVoiceDetail: findPubVoiceDetail,
    /* 添加舆情 */
    addPubVoices: addPubVoices,
    /* 删除舆情 */
    removePubVoices: removePubVoices,
    /* 提交审批 */
    commitApproval: commitApproval,
    
    /*---------- 舆情审批页面 ----------*/
    /* 查询待审批的舆情 */
    findWaitApprovalPV: findWaitApprovalPV,
    /* 审批舆情 */
    approvalPubVoice: approvalPubVoice,

    /*---------- 舆情日报页面 ----------*/
    /* 查询舆情日报列表 */
    findDailyList: findDailyList,
    /* 查询日报详情 */
    findDailyDetail: findDailyDetail,
    /* 创建日报 */
    createDaily: createDaily,
    /* 获取日报期数 */
    getDailyItem: getDailyItem,
    /* 舆情通报 */
    notifyPubVoices: notifyPubVoices,

    /*---------- 舆情日报页面 ----------*/

};
/**
 * 查询舆情列表
 * @param uid {Number} 用户ID
 * @param field {String} 排序域
 * @param order {String} 排序顺序ASC,DESC
 * @param callback {Function} 回调函数(err, [])
 */
function findPubVoiceList (uid, field, order, callback) {

}

/**
 * 查询舆情详情
 * @param uid {Number}
 * @param pid {Number}
 * @param callback {Function} 回调函数(err, object)
 */
function findPubVoiceDetail (uid, pid, callback) {

}

/**
 * 添加舆情
 * @param uid {Number} 用户ID
 * @param obj [Array]  舆情详情数组
 * @param callback {Function}  回调函数(err)
 */
function addPubVoices (uid, obj, callback) {
}

/**
 * 删除舆情
 * @param uid {Number}
 * @param pids {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function removePubVoices (uid, pids, callback) {
}

/**
 * 提交审批
 * @param uid {Number}
 * @param pids  {Array} 舆情ID数组
 * @param callback {Function}  回调函数(err)
 */
function commitApproval (uid, pids,callback) {

}

/**
 * 查找待审批的舆情
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 舆情数组[])
 */
function findWaitApprovalPV (uid, field, order, callback) {

}

/**
 * 审批舆情
 * @param uid {Number} - 用户ID
 * @param pid {Number} - 舆情id
 * @param obj {Object} - 审批意见{status:}
 * @param callback {Function}  回调函数(err)
 */
function approvalPubVoice (uid, pid, obj, callback) {

}

/**
 * 查询日报列表
 * @param uid {Number} - 用户ID
 * @param field {String} - 排序域
 * @param order {String} - ASC,DESC
 * @param callback {Function}  回调函数(err, 日报数组[])
 */
function findDailyList(uid, field, order, callback) {
}
/**
 * 查询日报详情
 * @param uid
 * @param daily_id {Number} 日报ID
 * @param callback {Function}  回调函数(err, object)
 */
function findDailyDetail(uid, callback) {

}

/**
 * 创建日报
 * @param uid
 * @param daily {Object} 日报详情
 * {
 *      pubVoices:{Array} 舆情ID数组
 *      dailyItem: {Object} 日报期数{prefix:{String}舆情前缀, suffix:{String}舆情后缀, item:{Number}舆情期数}
 *      dailyDetail: {String} 舆情详情(富文本格式)
 * }
 * @param callback
 */
function createDaily(uid, daily, callback) {

}

/**
 * 获取日报
 * @param uid
 * @param callback {Function}  回调函数(err, {prefix:{String}舆情前缀, suffix:{String}舆情后缀, item:{Number}舆情期数})
 */
function getDailyItem(uid, callback) {
    
}

/**
 * 通报舆情
 * @param uid
 * @param object {Array} 通报对象，用户ID列表
 * @param callback {Function}  回调函数(err)
 */
function notifyPubVoices(uid, object, callback) {

}