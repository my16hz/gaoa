    $('body').ready(function () {
        var jqli = $('#lhs_aside_menu > li');

        jqli.bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'allmessages':
                    return LHSAllMessagesPage.run();
                case 'examine&approve':
                    return LHSExamineAndApprovePage.run();
                case 'sendmessage':
                    return LHSSendMessagePage.run();
                case 'recvmessage':
                    return LHSRecvMessagePage.run();
                case 'notifymessage':
                    return LHSNotifyMessagePage.run();
            }
        });

        jqli.eq(0).click();
    });
})();