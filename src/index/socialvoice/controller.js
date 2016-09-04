/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var menukey = require('config').session.menukey;

module.exports = {
    pageSocialVoice: pageSocialVoice
};

function pageSocialVoice (req, res) {
    res.render('index/socialvoice', {
        menus: req.session[menukey]
    });
}