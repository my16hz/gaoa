/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var path = require('path');
var filePath = __dirname + '/../upload/';

module.exports = {
    root: path.normalize(__dirname + '/..'),
    port: 8009,
    session: {
        userkey: 'LHS_USER_INFO',
        timeout: 3600000 // 1hour,
    },
    db: {
        server: '182.150.22.119',
        port: 20492,
        //server: '172.16.12.204',
        //port:9200,
        database: 'gaoa',
        user: 'gaoa',
        password: '1qazXSW@'
    },
    datafile: {
        field: 'datafile',
        uploadDir: filePath + 'datafile/', // a new dir very day: Datafile20160809
        fileSize: 10 * 1024 * 1024, //bytes
        fileType: [
            'xls', 'xlt', 'xlm', 'xlsx', 'xlsm', 'xltx',
            'xltm', 'xlsb', 'xla', 'xlam', 'xll', 'xlw'
        ]
    },
    ueditor: {
        field: 'upfile',
        uploadDir: filePath + 'ueditor/', // a new dir very day: UEditor20160809
        fileSize: 5 * 1024 * 1024, //bytes
        fileType: ['gif', 'png', 'jpg', 'jpeg', 'bmp']
    },
    templete: {
        dispose: '' +
        '<p style="text-align: center;">' +
            '<a>' +
                '<span style="font-size:56px;font-family:方正小标宋简体;color:red"><br/></span>' +
            '</a>' +
        '</p>' +
        '<p style="text-align: center;">' +
            '<a></a>' +
            '<a></a>' +
            '<a></a>' +
            '<a></a>' +
            '<a></a>' +
            '<a></a>' +
            '<a></a>' +
            '<a>' +
                '<span style="font-size:56px;font-family:方正小标宋简体;color:red">广安市网络舆情中心</span>' +
            '</a>' +
        '</p><hr/>' +
        '<p style="text-align:right;line-height:31px">' +
            '<span style="font-size:21px;font-family:仿宋_GB2312">广舆函〔</span>' +
            '<span style="font-size:21px">2016</span>' +
            '<span style="font-size:21px;font-family:仿宋_GB2312">〕</span>' +
            '<span style="font-size:20px;letter-spacing:-0">1</span>' +
            '<span style="font-size:21px;font-family:仿宋_GB2312">号</span>' +
        '</p>' +
        '<p style="margin-top:16px;text-align:center;line-height:40px">' +
            '<span style="font-size:29px;font-family:方正小标宋简体">广安市重要网络舆情处置通知书</span>' +
        '</p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p>' +
            '<span style="font-size: 20px;">附件：网络舆情日报第 266 期</span>' +
        '</p>' +
        '<p style="text-indent:42px;line-height:27px;text-align:right;">' +
            '<span style="text-align:center;text-indent:333px;font-family:仿宋_GB2312;font-size:21px;letter-spacing:0px;"></span>' +
        '</p>' +
        '<p style="text-indent:333px;line-height:27px;text-align:right;">' +
            '<span style="font-size:20px;">广安市网络舆情中心</span>' +
        '</p>' +
        '<p style="text-indent: 42px; line-height: 27px; text-align: right;">' +
            '<span style="text-align:center;font-family:仿宋_GB2312;letter-spacing:0px;font-size:20px;">2016年1月5日</span>' +
        '</p>' +
        '<p><br/></p>' +
        '<hr/>' +
        '<p>' +
            '<span style="font-size: 20px;">附件：</span>' +
        '</p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p><br/></p>' +
        '<p>' +
            '<span style="font-size: 20px;">舆情详情：</span>' +
            '<br/>' +
        '</p>'
    }
};