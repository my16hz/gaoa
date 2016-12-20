/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var html2text = require('html-to-text');
var xlsx = require('xlsx');
var moment = require('moment');

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');

var defaut_interval = 3600000 * 24 * 7;

module.exports = {
    searchPubVoices: searchPubVoices,
    exportMatchedPubVoices: exportMatchedPubVoices
};

function searchPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var state = req.query.state;
    var type = req.query.type;
    var title = req.query.title;
    var item = req.query.item;
    var feedback = req.query.feedback;
    var dispose = req.query.dispose;

    service.searchPubVoices(start, end, state, type, feedback, dispose, item, title, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}

function exportMatchedPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var state = req.query.state;
    var type = req.query.type;
    var title = req.query.title;
    var feedback = req.query.feedback;
    var dispose = req.query.dispose;

    var filename = encodeURIComponent('广安市网络舆情检索数据');

    service.exportMatchedPubVoices(start, end, state, type, feedback, dispose, title, function (err, rs) {
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
        {title: '时间', field: 'createtime'},
        {title: '所属栏目', field: 'item'},
        {title: '标题', field: 'title'},
        {title: '舆情类别', field: 'type'},
        {title: '涉及部门', field: 'relate_department'},
        {title: '回帖', field: 'fellow_count'},
        {title: '浏览', field: 'review_count'},
        {title: '期数', field: 'did'},
        {title: '帖文内容', field: 'content'},
        {title: '载体', field: 'from_website'},
        {title: '网址', field: 'url'},
        {title: '批示收时', field: 'comment_recv_date'},
        {title: '领导', field: 'comment_user'},
        {title: '批示时间', field: 'comment_date'},
        {title: '批示内容', field: 'pv_comment'},
        {title: '谁取', field: 'comment_from_user'},
        {title: '从何', field: 'comment_from_department'},
        {title: '回复类型', field: 'feedback_type'},
        {title: '回复时间', field: 'feedback_date'},
        {title: '回复内容', field: 'feedback_content'}

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

        if (~'createtime comment_recv_date comment_date feedback_date'.indexOf(field)) {
            return value ? moment(value).format('YYYY/MM/DD') : '';
        } else if (~'content feedback_content'.indexOf(field)) {
            return html2text.fromString(value || '');
        } else if('feedback_type' === field) {
            if (rowData.feedback_content) {
                return value == 1 ? "网上回复" : "书面回复";
            } else {
                rowData.feedback_date = '';
            }
        } else {
            return new String(value || '');
        }
    }
}