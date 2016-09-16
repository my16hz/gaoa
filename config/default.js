/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var path = require('path');
var filePath = path.normalize(__dirname + '/../upload/');

module.exports = {
    root: path.normalize(__dirname + '/..'),
    port: 8009,
    session: {
        userkey: 'LHS_USER_INFO',
        menukey: 'LHS_USER_MENUS',
        timeout: 3600000 // 1hour,
    },
    db: {
        server: '182.150.22.119',
        port: 20492,
        //server: '172.16.12.204',
        //port: 9200,
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
    template: {
        dispose: '' +
        '<p style="text-align: center;">' +
        '    <a></a>' +
        '</p>' +
        '<p style="text-align: center;">' +
        '    <a></a>' +
        '</p>' +
        '<p style="text-align: center;">' +
        '    <a><span style="font-size:56px;font-family:方正小标宋简体;color:red">广安市网络舆情中心</span> </a>' +
        '</p>' +
        '<hr/>' +
        '<p style="text-align:right;line-height:31px">' +
        '    <span style="font-size:21px;font-family:仿宋_GB2312">广舆函（%doc_year%） %doc_no%号</span>' +
        '</p>' +
        '<p style="margin-top:16px;text-align:center;line-height:40px">' +
        '    <span style="font-size:29px;font-family:方正小标宋简体">广安市重要网络舆情处置通知书</span>' +
        '</p>' +
        '<p>' +
        '    %doc_comment%' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <span style="font-size: 20px;font-family:方正小标宋简体">附件：网络舆情日报第 %daily_id% 期</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p style="text-indent:333px;line-height:27px;text-align:right;">' +
        '    <span style="font-size:20px;">广安市网络舆情中心</span>' +
        '</p>' +
        '<p style="text-indent: 42px; line-height: 27px; text-align: right;">' +
        '    %date%' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<hr/>' +
        '<p>' +
        '    <span style="font-size: 20px;font-family:方正小标宋简体">附件：</span>' +
        '</p>' +
        '<p>' +
        '    %doc_attachment%' +
        '</p>' +
        '<p>' +
        '    <span style="font-size: 20px;font-family:方正小标宋简体">舆情详情：</span>' +
        '</p>' +
        '<p>' +
        '    %doc_content%' +
        '</p>',
        daily: '' +
        '<p>' +
        '    <span style=";position: relative;z-index:251657728"> </span>' +
        '</p>' +
        '<p>' +
        '    <span style="font-size:21px;font-family:黑体"><br/>秘 密</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p style="text-align:center;line-height:27px">' +
        '    <span style="font-size:19px;font-family:楷体_GB2312">第 %issue_id% 期</span>' +
        '</p>' +
        '<p style="text-align:center;line-height:40px">' +
        '    <span style="font-size:19px;font-family:楷体_GB2312">（总第 %id% 期）</span>' +
        '</p>' +
        '<p style="line-height: 32px; text-align: center;">' +
        '    <span style="font-size:20px;font-family:楷体_GB2312">广安市网络舆情中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%date%</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<hr/>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p style="margin-top:40px;margin-right:0;margin-bottom:16px;margin-left:0;text-align:center">' +
        '    <span style="font-size:29px;font-family:方正小标宋简体">≡本期要目≡</span>' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px;font-family: 楷体_GB2312">【正面舆情】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %zmyq_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px;font-family: 楷体_GB2312">【负面舆情】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %fmyq_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px;font-family: 楷体_GB2312">【舆情追踪】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %yqzz_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px;font-family: 楷体_GB2312">【热点话题】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %rdht_title%' +
        '</p>' +
        '<p style="margin-top:40px;margin-right:0;margin-bottom:16px;margin-left:0;text-align:center">' +
        '    <span style="font-size:29px;font-family:方正小标宋简体">≡本期详情≡</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p style="white-space: normal; line-height: 32px;">' +
        '    <strong><span style="font-size: 20px; font-family: 楷体_GB2312;">【正面舆情】</span></strong>' +
        '</p>' +
        '<p style="white-space: normal;">' +
        '    %zmyq_content%' +
        '</p>' +
        '<p style="white-space: normal; line-height: 32px;">' +
        '    <strong><span style="font-size: 20px; font-family: 楷体_GB2312;">【负面舆情】</span></strong>' +
        '</p>' +
        '<p style="white-space: normal;">' +
        '    %fmyq_content%' +
        '</p>' +
        '<p style="white-space: normal; line-height: 32px;">' +
        '    <strong><span style="font-size: 20px; font-family: 楷体_GB2312;">【舆情追踪】</span></strong>' +
        '</p>' +
        '<p style="white-space: normal;">' +
        '    %yqzz_content%' +
        '</p>' +
        '<p style="white-space: normal; line-height: 32px;">' +
        '    <strong><span style="font-size: 20px; font-family: 楷体_GB2312;">【热点话题】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %rdht_content%' +
        '</p>' +
        '<hr/>' +
        '<p style="margin-left:37px;line-height:32px">' +
        '    <strong><span style="font-size: 19px;font-family: 仿宋_GB2312">报：</span></strong><span style="font-size: 19px;font-family: 仿宋_GB2312">市委常委。</span>' +
        '</p>' +
        '<hr/>' +
        '<p style="text-align: right;">' +
        '<span style="font-size: 19px;font-family: 仿宋_GB2312">（共印16份）</span>' +
        '</p>' +
        '<p>' +
        '<br/>' +
        '</p>'
    }
};