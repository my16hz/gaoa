/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var html2text = require('html-to-text');
var xlsx = require('xlsx');
var moment = require('moment');

var errhandler = require('../../utils/errhandler');
var service = require('./service');

var menukey = config.session.menukey;
var userkey = config.session.userkey;
var defaut_interval = 3600000 * 24 * 7;

module.exports = {
    pageBadInfo: pageBadInfo,
    listBadInfo: listBadInfo,
    saveBadInfo: saveBadInfo,
    deleteBadInfo: deleteBadInfo,
    exportBadInfo: exportBadInfo,
    
    listRTX: listRTX,
    saveRTX: saveRTX,
    deleteRTX: deleteRTX,

    listRTXReport: listRTXReport,
    saveRTXReport: saveRTXReport,
    deleteRTXReport: deleteRTXReport,

    aggregateWebsite: aggregateWebsite,
    aggregateReporter: aggregateReporter,
    aggregateDepartment: aggregateDepartment,
    aggregateZone: aggregateZone,
    aggregateType: aggregateType,
    aggregateCreater: aggregateCreater
};

function pageBadInfo (req, res) {
    res.render('index/badinfo', {
        menus: req.session[menukey],
        user: req.session[userkey].name || '匿名用户',
        uid: req.session[userkey].id || ''
    });
}

function listBadInfo (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );
    var user = req.session[userkey];
    service.listBadInfo(user, start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveBadInfo (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'website': obj['website'],
        'url': obj['url'],
        'reportdate': obj['reportdate'],
        'department': obj['department'],
        'username': obj['username'],
        'duty_zone': obj['duty_zone'],
        'type': obj['type'],
        'sn': obj['sn'],
        'remark': obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveBadInfo(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function deleteBadInfo (req, res) {
    var bdids = req.body.ids;
    service.deleteBadInfo(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function exportBadInfo(req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var user = req.session[userkey];

    var filename = encodeURIComponent('不良信息检索数据');

    service.listBadInfo(user, start, end, function (err, rs) {
        if(err) {
            errhandler.internalException(res, err);
        } else {
            try {
                res.set({
                    'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'content-disposition': 'attachment;filename="' + filename + '.xlsx"'
                }).send(_buildExcel(rs));
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}

function _buildExcel (data) {
    var sheetName = '检索数据导出';
    var wordBook = {SheetNames: [sheetName], Sheets: {}};
    var sheet = wordBook.Sheets[sheetName] = {};
    var header = [
        {title: '序', field: 'id'},
        {title: '举报时间', field: 'reportdate'},
        {title: '网站名称', field: 'website'},
        {title: '网页路径', field: 'url'},
        {title: '举报者', field: 'username'},
        {title: '举报单位', field: 'department'},
        {title: '所属地域', field: 'duty_zone'},
        {title: '危害类型', field: 'type'},
        {title: '举报查询码', field: 'sn'},
        {title: '备注', field: 'remark'}
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


function listRTX (req, res) {
    service.listRTX(function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveRTX (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        "rtx_time": obj['rtx_time'],
        "department": obj['department'],
        "type": obj['type'],
        "content": obj['content'],
        "result": obj['result'],
        "duty_user": obj['duty_user'],
        "remark": obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };

    service.saveRTX(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function deleteRTX (req, res) {
    var bdids = req.body.ids;
    service.deleteRTX(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function listRTXReport (req, res) {
    service.listRTXReport("createtime", "desc", function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function saveRTXReport (req, res) {
    var uid = req.session[userkey].id;
    var obj = req.body;
    var objParams = {
        'id': obj['id'],
        'report_time': obj['report_time'],
        'website': obj['website'],
        'url': obj['url'],
        'report_user': obj['report_user'],
        'remark': obj['remark'],
        'createuser': uid,
        'createtime': new Date()
    };
    service.saveRTXReport(objParams, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}


function deleteRTXReport (req, res) {
    var bdids = req.body.ids;
    service.deleteRTXReport(bdids, function (err) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true
            });
    });
}

function aggregateWebsite (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateWebsite(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateReporter (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateReporter(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateDepartment (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateDepartment(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateZone (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateZone(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateType (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateType(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function aggregateCreater (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );

    service.aggregateCreater(start, end, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

