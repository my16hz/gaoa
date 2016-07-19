    $('body').ready(function () {
        $('#lhs_aside_menu > li').bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'record':
                    return LHSRecordPage.run();
                case 'aggregate':
                    return LHSAggregatePage.run();
                case 'RTXDirective':
                    return LHSRTXDirectivePage.run();
            }
        });

        LHSRecordPage.run();
    });
})();