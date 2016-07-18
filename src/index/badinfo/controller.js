/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    pageBadInfo: pageBadInfo
};

function pageBadInfo (req, res) {
    res.render('index/badinfo');
}