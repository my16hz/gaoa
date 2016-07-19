    $('body').ready(function () {
        $('#lhs_aside_menu > li').bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'allmessages':
                    return LHSAllMessagesPage.run();
                case 'examine&approve':
                    return LHSExamineAndApprovePage.run();
                case 'sendmessage':
                    return LHSSendMessagePage.run();
            }
        });

        LHSAllMessagesPage.run();
    });
})();