/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    pageSysManage: pageSysManage
};

function pageSysManage (req, res) {
    res.render('index/sysmanage');
}