/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var userkey = require('config').session.userkey;

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');
var defaut_interval = 3600000 * 24 * 7;
module.exports = {
    searchPubVoices: searchPubVoices
};

function searchPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now );
    var state = req.query.state;
    var type = req.query.type;
    var title = req.query.title;
    var feedback = req.query.feedback;
    var dispose = req.query.dispose;
    service.searchPubVoices(start, end, state, type, feedback, dispose, title, function (err, rs) {
        err ?
            errhandler.internalException(res, err) :
            res.send({
                success: true,
                data: rs
            });
    });
}
