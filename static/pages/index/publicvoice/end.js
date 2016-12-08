    $('body').ready(function () {
        var jqli = $('#lhs_aside_menu > li');

        jqli.bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'record':
                    return LHSRecordPage.run();
                case 'examine&approve':
                    return LHSExamineAndApprovePage.run();
                case 'dispose&approve':
                    return LHSDisposeAndApprovePage.run();
                case 'dailyreport':
                    return LHSDailyReportPage.run();
                case 'dailycreate':
                    return LHSDailyCreatePage.run();
                case 'dispose':
                    return LHSDisposePage.run();
                case 'comment':
                    return LHSCommentPage.run();
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
                case 'search':
                    return LHSSearchPage.run();
            }
        });

        jqli.eq(0).click();
    });
})();