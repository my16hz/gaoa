    $('body').ready(function () {
        $('#lhs_aside_menu > li').bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'record':
                    return LHSRecordPage.run();
                case 'examine&approve':
                    return LHSExamineAndApprovePage.run();
                case 'dailyreport':
                    return LHSDailyReportPage.run();
                case 'dispose':
                    return LHSDisposePage.run();
                case 'notify':
                    return LHSNotifyPage.run();
                case 'feedback':
                    return LHSFeedbackPage.run();
                case 'guide':
                    return LHSGuidePage.run();
                case 'analyze':
                    return LHSAnalyzePage.run();
                case 'alert':
                    return LHSAlertPage.run();
            }
        });

        LHSRecordPage.run();
    });
})();