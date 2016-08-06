/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var service = require('./service');

module.exports = {
    pagePubVoice: pagePubVoice
};

function pagePubVoice (req, res) {
    res.render('index/publicvoice');
}