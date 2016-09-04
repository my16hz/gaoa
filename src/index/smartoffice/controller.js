/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var menukey = require('config').session.menukey;

module.exports = {
    pageSmartOffice: pageSmartOffice
};

function pageSmartOffice (req, res) {
    res.render('index/smartoffice', {
        menus: req.session[menukey]
    });
}
