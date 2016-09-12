    $('body').ready(function () {
        var jqli = $('#lhs_aside_menu > li');

        jqli.bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'record':
                    return LHSRecordPage.run();
                case 'dispose':
                    return LHSDisposePage.run();
                case 'report':
                    return LHSReportPage.run();
            }
        });

        jqli.eq(0).click();
    });
})();