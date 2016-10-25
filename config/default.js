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
        password: '1qazXSW@',
        requestTimeout: 60000
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
    msgfile: {
        field: 'msgfile',
        uploadDir: filePath + 'msgfile/', // a new dir very day: Msgfile20160809
        fileSize: 10 * 1024 * 1024, //bytes
        fileType: ['doc', 'docx']
    },
    template: {
        dispose: '' +
        '<p style="text-align: center;">' +
        '    <strong><span style="font-size:56px;font-family: 方正小标宋简体;color:red;font-weight:normal">广 安 市 网 络 舆 情 中 心</span></strong>' +
        '</p>' +
        '<hr style="height:3px;border:none;border-top:3px double red;"/>' +
        '<p style="text-align:right;line-height:31px">' +
        '    <span style="font-size:21px;font-family:仿宋_GB2312">广舆函〔%doc_year%〕%doc_no%号</span>' +
        '</p>' +
        '<p style="margin-top:16px;text-align:center;line-height:40px">' +
        '    <span style="font-size:29px;font-family:方正小标宋简体">广安市重要网络舆情处置通知书</span>' +
        '</p>' +
        '<p style="margin: 5px 0">' +
        '    <span style="font-size: 21px;font-family: 仿宋_GB2312">%to_department%:</span>' +
        '</p>' +
        '<p style="margin: 5px 0; line-height: 36px">' +
        '<span style="font-size: 21px;font-family: 仿宋_GB2312">&nbsp; %pv_date%，一网民在%from_website%发贴，反映%pv_title%问题。%comment_date%，市委常委%comment_user%批示：“<strong>%doc_comment%</strong>”</span>' +
        '</p>' +
        '<p style="margin: 5px 0;line-height: 36px">' +
        '<span>&nbsp;&nbsp;</span><span style="font-size: 21px;font-family: 仿宋_GB2312">根据广委办〔2013〕76号文件精神，为切实做好该舆情应对处置工作，消除负面影响，避免网络炒作，请贵单位在接到此通知书之后，立即组织调查处置，在受理之日起5个工作日内将调查处置结果书面回复至签批领导、抄送市网络舆情中心，并视情况在网上公开调查处置的相关信息（不宜公开的除外）。同时，市委、政府督查室将对领导批示的网络舆情办理情况进行专项督查督办，请各涉舆单位严格按照相关文件要求做好应对处置工作。</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
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
        '<p style="text-indent: 333px; line-height: 27px; text-align: right;">' +
        '    <span style="font-size:20px;">%date%</span>' +
        '</p>' +
        '<hr style="height:3px;border:none;border-top:3px double red;"/>' +
        '<p>' +
        '    <span style="font-size: 20px;font-family:方正小标宋简体">附件：</span>' +
        '</p>' +
        '<p>' +
        '    %doc_attachment%' +
        '</p>' +
        '<p>' +
        '    <br/>' +
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
        '<p style="margin-top:40px;margin-right:0;margin-bottom:16px;margin-left:0;text-align:center">' +
        '    <span style="font-size:29px;font-family:方正小标宋简体">≡本期要目≡</span>' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312">【正面舆情】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %zmyq_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312">【负面舆情】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %fmyq_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312;">【涉广话题】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %sght_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312;">【一周网语】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %yzwy_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312">【舆情追踪】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %yqzz_title%' +
        '</p>' +
        '<p style="line-height:32px">' +
        '    <strong><span style="font-size:20px; font-family: 楷体_GB2312">【网上热点】</span></strong>' +
        '</p>' +
        '<p>' +
        '    %rdht_title%' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/zmyq.jpg"/>' +
        '</p>' +
        '<p>' +
        '    %zmyq_content%' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/fmyq.jpg"/>' +
        '</p>' +
        '<p>' +
        '    %fmyq_content%' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/sght.jpg"/>' +
        '</p>' +
        '<p>' +
        '    %sght_content%' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/yzwy.jpg"/>' +
        '</p>' +
        '<p>' +
        '    %yzwy_content%' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/yqzz.jpg"/>' +
        '</p>' +
        '<p>' +
        '    %yqzz_content%' +
        '</p>' +
        '<p>' +
        '    <img src="/sample/template/wsrd.jpg"/>' +
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
        '    <span style="font-size: 19px;font-family: 仿宋_GB2312">（共印16份）</span>' +
        '</p>' +
        '<p>' +
        '    <br/>' +
        '</p>',
        sendmessage: '' +
        '<style type="text/css">.Tab { border-collapse:collapse; width:800px; height:300px;}' +
        '.Tab td{ border:solid 2px #000000}</style>' +
        '<table cellspacing="0" class="Tab">' +
        '    <tbody>' +
        '        <tr class="firstRow">' +
        '            <td valign="top" rowspan="1" colspan="6" style="word-break: break-all;">' +
        '                广安市网络舆情中心定稿纸' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                文件标题' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="5">' +
        '                %title%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td valign="top" style="word-break: break-all;" rowspan="1" colspan="2">' +
        '                <p>' +
        '                    签发' +
        '                </p>' +
        '                <p>' +
        '                    %sign%' +
        '                </p>' +
        '                <p>' +
        '                    <br/>' +
        '                </p>' +
        '            </td>' +
        '            <td valign="top" style="word-break: break-all;" rowspan="1" colspan="4">' +
        '                <p>' +
        '                    会签' +
        '                </p>' +
        '                <p>' +
        '                    %countersign%' +
        '                </p>' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                主送机关' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                %major_department%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                抄送机关' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="3">' +
        '                %cc_department%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                发文字号' +
        '            </td>' +
        '            <td width="130" valign="top" style="word-break: break-all;">' +
        '                %message_id%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                秘密等级' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %secret_level%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                紧急程度' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %urgent_level%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                核 &nbsp; 稿' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %dispose_user%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                份 &nbsp; 数' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %copies%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                拟稿人' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %draft_user%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                <p>' +
        '                    拟办意见' +
        '                </p>' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="5" style="word-break: break-all;">' +
        '                %content%<br/>' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                主题词' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="5">' +
        '                %keyword%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td valign="top" rowspan="1" colspan="6" style="word-break: break-all;">' +
        '                注:请承办人员速办并记录后交档案室处理。' +
        '            </td>' +
        '        </tr>' +
        '    </tbody>' +
        '</table>',
        recvmessage:
        '<style type="text/css">.Tab { border-collapse:collapse; width:800px; height:300px;}' +
        '.Tab td{ border:solid 2px #000000}</style>' +
        '<table cellspacing="0" class="Tab">' +
        '    <tbody>' +
        '        <tr class="firstRow">' +
        '            <td valign="top" rowspan="1" colspan="6" style="word-break: break-all;">' +
        '                <p>' +
        '                    <strong><span style="font-size: 20px;">广安市网络舆情中心收文处理笺</span></strong>' +
        '                </p>' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                文件标题' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="5" style="word-break: break-all;">' +
        '                %title%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;" rowspan="3" colspan="1">' +
        '                领导批示' +
        '            </td>' +
        '            <td valign="top" rowspan="3" colspan="5" style="word-break: break-all;">' +
        '                <p>' +
        '                    %comment%' +
        '                </p>' +
        '                <p>' +
        '                    <br/>' +
        '                </p>' +
        '            </td>' +
        '        </tr>' +
        '        <tr></tr>' +
        '        <tr></tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                收文日期' +
        '            </td>' +
        '            <td width="120" valign="top">' +
        '                %recv_date%' +
        '            </td>' +
        '            <td width="118" valign="top" style="word-break: break-all;">' +
        '                收文编号' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="3">' +
        '                %message_id%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                来文单位' +
        '            </td>' +
        '            <td width="120" valign="top">' +
        '                %origin_department%' +
        '            </td>' +
        '            <td width="118" valign="top" style="word-break: break-all;">' +
        '                原文字号' +
        '            </td>' +
        '            <td valign="top" rowspan="1" colspan="3">' +
        '                %origin_id%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                秘密等级' +
        '            </td>' +
        '            <td width="120" valign="top">' +
        '                %secret_level%' +
        '            </td>' +
        '            <td width="118" valign="top" style="word-break: break-all;">' +
        '                批示领导' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %approved_user%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                从而领取' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %from_department%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                原文日期' +
        '            </td>' +
        '            <td width="120" valign="top">' +
        '                %origin_date%' +
        '            </td>' +
        '            <td width="118" valign="top" style="word-break: break-all;">' +
        '                份数' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %copies%' +
        '            </td>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                领取人' +
        '            </td>' +
        '            <td width="119" valign="top">' +
        '                %from_user%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td width="119" valign="top" style="word-break: break-all;">' +
        '                <p>' +
        '                    拟办意见' +
        '                </p>' +
        '                <p>' +
        '                    <br/>' +
        '                </p>' +
        '            </td>' +
        '            <td valign="top" style="word-break: break-all;" rowspan="1" colspan="5">' +
        '                %content%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td valign="top" colspan="1" rowspan="1" style="word-break: break-all;">' +
        '                <p>' +
        '                    办理结果' +
        '                </p>' +
        '            </td>' +
        '            <td valign="top" colspan="5" rowspan="1" style="word-break: break-all;">' +
        '                %result%' +
        '            </td>' +
        '        </tr>' +
        '        <tr>' +
        '            <td valign="top" colspan="6" rowspan="1" style="word-break: break-all;">' +
        '                注:请承办人员速办并记录后交档案室处理。' +
        '            </td>' +
        '        </tr>' +
        '    </tbody>' +
        '</table>',
        notify: ''
    }
};