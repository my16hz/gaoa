/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var HtmlDocx = require('html-docx-js');
var html2text = require('html-to-text');
var xlsx = require('xlsx');
var moment = require('moment');
var errhandler = require('../../utils/errhandler');
var service = require('./service');
var menukey = config.session.menukey;
var userkey = config.session.userkey;
var defaut_interval = 3600000 * 24 * 60;
module.exports = {
    pageSmartOffice: pageSmartOffice,

    getSendMsg: getSendMsg,
    saveSendMsg: saveSendMsg,
    deleteSendMsg: deleteSendMsg,
    commitSendMsg: commitSendMsg,
    exportSendMsg: exportSendMsg,
    exportSendMsgList: exportSendMsgList,

    getRecvMsg: getRecvMsg,
    saveRecvMsg: saveRecvMsg,
    deleteRecvMsg: deleteRecvMsg,
    commitRecvMsg: commitRecvMsg,
    exportRecvMsg: exportRecvMsg,
    exportRecvMsglist: exportRecvMsglist,

    sendNotify: sendNotify,

    getTemplate: getTemplate,
    getNotifyList: getNotifyList,
    saveMessage: saveMessage,
    getMessageList: getMessageList,
    deleteMessage: deleteMessage,
    exportMessagelist: exportMessagelist,

    getUnapprovedSendMsg: getUnapprovedSendMsg,
    getUnapprovedRecvMsg: getUnapprovedRecvMsg,
    commentSendMsg: commentSendMsg,
    commentRecvMsg: commentRecvMsg

};

function pageSmartOffice (req, res) {
    res.render('index/smartoffice', {
        menus: req.session[menukey],
        user: req.session[userkey].name || '匿名用户',
        uid: req.session[userkey].id || ''
    });
}

function getSendMsg (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    service.getSendMsg(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getRecvMsg (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    service.getRecvMsg(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveSendMsg (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title': obj['title'],
        'major_department': obj['major_department'],
        'cc_department': obj['cc_department'],
        'message_id': obj['message_id'],
        'secret_level': obj['secret_level'],
        'urgent_level': obj['urgent_level'],
        'dispose_user': obj['dispose_user'],
        'draft_user': obj['draft_user'],
        'copies': obj['copies'],
        'content': obj['content'],
        'keyword': obj['keyword'],
        'sign': obj['sign'],
        'countersign': obj['countersign'],
        'state': 0,
        'createuser': uid,
        'createtime': new Date(),
        'sendmessage_key': obj['sendmessage_key']
    }

    service[obj['id'] ? 'updateSendMsg' : 'saveSendMsg'](msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function saveRecvMsg (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title': obj['title'],
        'recv_date': obj['recv_date'],
        'message_id': obj['message_id'],
        'origin_department': obj['origin_department'],
        'origin_id': obj['origin_id'],
        'secret_level': obj['secret_level'],
        'approved_user': obj['approved_user'],
        'from_department': obj['from_department'],
        'origin_date': obj['origin_date'],
        'copies': obj['copies'],
        'from_user': obj['from_user'],
        'content': obj['content'],
        'comment': obj['comment'],
        'result': obj['result'],
        'state': 0,
        'createuser': uid,
        'createtime': new Date(),
        'smartoffice_recvmessage_id': obj['smartoffice_recvmessage_id']
    }

    service.saveRecvMsg(msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteSendMsg (req, res) {
    var id = req.body.id;

    service.removeSendMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteRecvMsg (req, res) {
    var id = req.body.id;

    service.removeRecvMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteRecvMsg (req, res) {
    var id = req.body.id;

    service.removeRecvMsg(id, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function commitSendMsg (req, res) {
    var ids = req.body.ids;

    service.commitSendMsg(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportSendMsg (req, res) {
    var content = req.body.content;
    var filename = encodeURIComponent('广安市网络舆情中心定稿纸');

    try {
        res.set({
            'content-type': 'application/msword',
            'content-disposition': 'attachment;filename="' + filename + '.doc"'
        }).send(HtmlDocx.asBlob(content));
    } catch (e) {
        errhandler.internalException(res, e);
    }
}

function commitRecvMsg (req, res) {
    var ids = req.body.ids;

    service.commitRecvMsg(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportRecvMsg (req, res) {
    var content = req.body.content;
    var filename = encodeURIComponent('广安市网络舆情中心收文处理笺');

    try {
        res.set({
            'content-type': 'application/msword',
            'content-disposition': 'attachment;filename="' + filename + '.doc"'
        }).send(HtmlDocx.asBlob(content));
    } catch (e) {
        errhandler.internalException(res, e);
    }
}

function getTemplate (req, res) {
    service.getTemplate(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getNotifyList (req, res) {
    var uid = req.session[userkey].id;
    service.getNotifyList(uid, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveMessage (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'title': obj['title'],
        'message_id': obj['message_id'],
        'type': obj['type'],
        'content': obj['content'],
        'state': 0,
        'attachment': obj['attachment'],
        'createuser': uid,
        'createtime': new Date(),

    };

    service[obj.id ? 'updateMessage' : 'saveMessage'](msg, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function getMessageList (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var uid = req.session[userkey].id;
    service.getMessageList(uid, start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function deleteMessage (req, res) {
    var ids = req.body.ids;

    service.deleteMessage(ids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function sendNotify (req, res) {
    var uid = req.session[userkey].id;
    var userids = req.body.uids.split(',');
    var mids = req.body.mids.split(',');

    if (!Array.isArray(userids)) {
        userids = [userids];
    }
    service.sendNotify(uid, userids, mids, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
            });
    });
}

function getUnapprovedSendMsg (req, res) {
    service.getUnapprovedSendMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function getUnapprovedRecvMsg (req, res) {
    service.getUnapprovedRecvMsg(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function commentSendMsg (req, res) {
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'sign': obj['sign'],
        'countersign': obj['countersign']
    };

    service.commentSendMsg(msg, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
            });
    });
}

function commentRecvMsg (req, res) {
    var obj = req.body;
    var msg = {
        'id': obj['id'],
        'comment': obj['comment']
    };

    service.commentRecvMsg(msg, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportMessagelist(req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var uid = req.session[userkey].id;

    var filename = encodeURIComponent('通知列表');

    service.getMessageList(uid, start, end, function (err, rs) {
        if(err) {
            errhandler.internalException(res, err);
        } else {
            try {
                res.set({
                    'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'content-disposition': 'attachment;filename="' + filename + '.xlsx"'
                }).send(_buildMessageExcel(rs));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}

function _buildMessageExcel (data) {
    var sheetName = '检索数据导出';
    var wordBook = {SheetNames: [sheetName], Sheets: {}};
    var sheet = wordBook.Sheets[sheetName] = {};
    var header = [
        {title: '序', field: 'id'},
        {title: '通知标题', field: 'title'},
        {title: '通知详情', field: 'content'},
        {title: '发布人', field: 'name'},
        {title: '发布时间', field: 'createtime'}
    ];
    var rowCount = 1;

    // add header into sheet.
    header.forEach(function (obj, i) {
        sheet[String.fromCharCode(65 + i) + rowCount] = {v: obj.title};
    });

    // add data in to sheet.
    data && data.forEach(function (row) {
        rowCount++;

        header.forEach(function (column, j) {
            sheet[String.fromCharCode(65 + j) + rowCount] = {
                v: _checkContents(column.field, row)
            }
        });
    });

    sheet['!ref'] = 'A1:' + String.fromCharCode(65 + header.length - 1) + rowCount;

    return xlsx.write(wordBook, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'buffer'
    });

    function _checkContents (field, rowData) {
        var value = rowData[field];

        if (~'createtime'.indexOf(field)) {
            return value ? moment(value).format('YYYY/MM/DD') : '';
        } else if (~'content remark'.indexOf(field)) {
            return html2text.fromString(value || '');
        } else {
            return new String(value || '');
        }
    }
}

function exportRecvMsglist(req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var filename = encodeURIComponent('收文列表');
    service.getRecvMsg(start, end, function (err, rs) {
        if(err) {
            errhandler.internalException(res, err);
        } else {
            try {
                res.set({
                    'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'content-disposition': 'attachment;filename="' + filename + '.xlsx"'
                }).send(_buildRecvMessageExcel(rs));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}

function _buildRecvMessageExcel (data) {
    var sheetName = '检索数据导出';
    var wordBook = {SheetNames: [sheetName], Sheets: {}};
    var sheet = wordBook.Sheets[sheetName] = {};
    var header = [
        {title: '序', field: 'id'},
        {title: '标题', field: 'title'},
        {title: '收文时间', field: 'recv_date'},
        {title: '收文编号', field: 'message_id'},
        {title: '领导批示', field: 'comment'},
        {title: '批示领导', field: 'approved_user'},
        {title: '来文单位', field: 'origin_department'},
        {title: '原文字号', field: 'origin_id'},
        {title: '原文日期', field: 'origin_date'},
        {title: '秘密等级', field: 'secret_level'},
        {title: '领取人', field: 'from_user'},
        {title: '从何领取', field: 'from_department'},
        {title: '份数', field: 'copies'},
        {title: '拟办意见', field: 'content'},
        {title: '办理结果', field: 'result'}
    ];
    var rowCount = 1;

    // add header into sheet.
    header.forEach(function (obj, i) {
        sheet[String.fromCharCode(65 + i) + rowCount] = {v: obj.title};
    });

    // add data in to sheet.
    data && data.forEach(function (row) {
        rowCount++;

        header.forEach(function (column, j) {
            sheet[String.fromCharCode(65 + j) + rowCount] = {
                v: _checkContents(column.field, row)
            }
        });
    });

    sheet['!ref'] = 'A1:' + String.fromCharCode(65 + header.length - 1) + rowCount;

    return xlsx.write(wordBook, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'buffer'
    });

    function _checkContents (field, rowData) {
        var value = rowData[field];

        if (~'createtime recv_date origin_date'.indexOf(field)) {
            return value ? moment(value).format('YYYY/MM/DD') : '';
        } else if (~'content remark'.indexOf(field)) {
            return html2text.fromString(value || '');
        } else {
            return new String(value || '');
        }
    }
}


function exportSendMsgList(req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var filename = encodeURIComponent('发文列表');
    service.getSendMsg(start, end, function (err, rs) {
        if(err) {
            errhandler.internalException(res, err);
        } else {
            try {
                res.set({
                    'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'content-disposition': 'attachment;filename="' + filename + '.xlsx"'
                }).send(_buildSendMessageExcel(rs));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}

function _buildSendMessageExcel (data) {
    var sheetName = '检索数据导出';
    var wordBook = {SheetNames: [sheetName], Sheets: {}};
    var sheet = wordBook.Sheets[sheetName] = {};
    var header = [
        {title: '序', field: 'id'},
        {title: '标题', field: 'title'},
        {title: '主送机关', field: 'major_department'},
        {title: '抄送机关', field: 'cc_department'},
        {title: '发文字号', field: 'message_id'},
        {title: '份数', field: 'copies'},
        {title: '秘密等级', field: 'secret_level'},
        {title: '紧急程度', field: 'urgent_level'},
        {title: '拟稿人', field: 'draft_user'},
        {title: '拟稿时间', field: 'createtime'},
        {title: '关键词', field: 'keyword'},
        {title: '拟办意见', field: 'content'}
    ];
    var rowCount = 1;

    // add header into sheet.
    header.forEach(function (obj, i) {
        sheet[String.fromCharCode(65 + i) + rowCount] = {v: obj.title};
    });

    // add data in to sheet.
    data && data.forEach(function (row) {
        rowCount++;

        header.forEach(function (column, j) {
            sheet[String.fromCharCode(65 + j) + rowCount] = {
                v: _checkContents(column.field, row)
            }
        });
    });

    sheet['!ref'] = 'A1:' + String.fromCharCode(65 + header.length - 1) + rowCount;

    return xlsx.write(wordBook, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'buffer'
    });

    function _checkContents (field, rowData) {
        var value = rowData[field];

        if (~'createtime recv_date origin_date'.indexOf(field)) {
            return value ? moment(value).format('YYYY/MM/DD') : '';
        } else if (~'content remark'.indexOf(field)) {
            return html2text.fromString(value || '');
        } else {
            return new String(value || '');
        }
    }
}
