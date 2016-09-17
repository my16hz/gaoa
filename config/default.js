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
        '</p>',
        sendmessage: '',
        recvmessage: '<style type="text/css">' +
        '.Tab { border-collapse:collapse; width:650px; height:300px;}' +
        '.Tab td{ border:solid 2px #000000}' +
        '</style>' +
        '<table cellspacing="0" class="Tab">' +
        '    <colgroup>' +
        '        <col width="72" span="6" style="width:54pt"/>' +
        '    </colgroup>' +
        '    <tbody>' +
        '        <tr style="height:14.25pt" class="firstRow">' +
        '            <td colspan="6" width="324" style="text-align: center;">' +
        '                <strong>广安市网络舆情中心收文处理笺</strong>' +
        '            </td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td rowspan="2" style="border-top: none;">' +
        '                <strong>文件标题</strong>' +
        '            </td>' +
        '            <td colspan="5" rowspan="2">%title%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td rowspan="4" style="border-top: none;">' +
        '                <strong>领导批示</strong>' +
        '            </td>' +
        '            <td colspan="5" rowspan="4">%comment%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td style="border-top: none;">' +
        '                <strong>收文日期</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%recv_date%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>收文编号</strong>' +
        '            </td>' +
        '            <td colspan="3" width="162" style="border-left: none;">%message_id%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td style="border-top: none;">' +
        '                <strong>来文单位</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%origin_department%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>原文字号</strong>' +
        '            </td>' +
        '            <td colspan="3" width="162" style="border-left: none;">%origin_id%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td style="border-top: none;">' +
        '                <strong>秘密等级</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%secret_level%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>批示领导</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%approved_user%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>从何领取</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%from_department%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td style="border-top: none;">' +
        '                <strong>原文日期</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%origin_date%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>份数</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%copies%</td>' +
        '            <td style="border-top:none;border-left:none">' +
        '                <strong>领取人</strong>' +
        '            </td>' +
        '            <td style="border-top:none;border-left:none">%from_user%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td rowspan="3" style="border-top: none;">' +
        '                <strong>拟办意见</strong>' +
        '            </td>' +
        '            <td colspan="5" rowspan="3">%content%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td rowspan="3" style="border-top: none;">' +
        '                <strong>办理结果</strong>' +
        '            </td>' +
        '            <td colspan="5" rowspan="3">%result%</td>' +
        '        </tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt"></tr>' +
        '        <tr style="height:14.25pt">' +
        '            <td colspan="6">' +
        '                <strong>注:请承办人员速办并记录后交档案室处理。</strong>' +
        '            </td>' +
        '        </tr>' +
        '    </tbody>' +
        '</table>',
        notify: ''
    }
};