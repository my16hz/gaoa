/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSRecvMessagePage = $.extend({}, LHSBasicPage, {
    run: function () {
        var self = this;
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).empty().append(jqtmpl($, {data: {}}).join(''));

        this.initDependencies();
        this.dataTable = this._createTable('#tableWrapper', 'URL', [
            {
                title: '操作',
                field: 'action',
                formatter: function () {
                    return '<a href="javascript:" title="查看"><i class="glyphicon glyphicon-edit"></i></a>';
                },
                events: {
                    'click a:first': function () {
                    }
                }
            }
        ]);
        this.editor = this._createEditor('#editorWrapper');
    },
    events: {
        'click #btnSend': 'showSendModal',
        'click #btnRecieve': 'showReceiveModal',
        'click #btnNotify': 'showNotifyModal',
        'click #sendModal .btn-default': 'closeSendModal',
        'click #sendModal .btn-primary': 'send',
        'click #recieveModal .btn-default': 'closeReceiveModal',
        'click #recieveModal .btn-primary': 'save',
        'click #notifyModal .btn-default': 'closeNotifyModal',
        'click #notifyModal .btn-primary': 'notify'
    },

    showSendModal: function () {

    },
    showReceiveModal: function () {

    },
    showNotifyModal: function () {

    },

    closeReceiveModal: function () {

    },
    save: function () {

    },

    closeSendModal: function () {

    },
    send: function () {

    },

    closeNotifyModal: function () {

    },
    notify: function () {

    }
});