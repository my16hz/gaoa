    $('body').ready(function () {
        var jqli = $('#lhs_aside_menu > li');

        jqli.bind('click', function () {
            $('#main_panel').empty();
            $(this).addClass('selected').siblings('li').removeClass('selected');

            switch ($(this).attr('data-page')) {
                case 'members':
                    return LHSMembersPage.run();
                case 'password':
                    return LHSPasswordPage.run();
                case 'configure':
                    return LHSConfigurePage.run();
            }
        });

        jqli.eq(0).click();
    });
})();