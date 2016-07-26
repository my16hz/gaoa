/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var LHSMembersPage = $.extend({}, LHSBasicPage, {
    run: function () {
        /*inject:jqtmpl:html*/
        /*endinject*/

        $(this.el).append(jqtmpl($, {data: {}}).join(''));

        this
            .initDependencies()
            .sendRequest({
                url: '/sysmanage/users', type: 'get',
                done: function (rs) {

                }
            });
    },
    events: {
        'click #xxx': '_onclick'
    }
});