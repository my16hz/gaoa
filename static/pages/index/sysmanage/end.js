    $('body').ready(function () {
        $('#lhs_aside_menu > li').bind('click', function () {
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

        LHSMembersPage.run();
    });
})();