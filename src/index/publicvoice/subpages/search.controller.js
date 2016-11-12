/**
 * Build Date: 08-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var html2text = require('html-to-text');

var errhandler = require('../../../utils/errhandler');
var service = require('./../service');

var defaut_interval = 3600000 * 24 * 7;

module.exports = {
    searchPubVoices: searchPubVoices,
    exportMatchedPubVoices: exportMatchedPubVoices
};

function searchPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
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

function exportMatchedPubVoices (req, res) {
    var now = new Date().getTime();
    var start = new Date((req.query.sTime - 0) || (now - defaut_interval));
    var end = new Date((req.query.eTime - 0 ) || now);
    var state = req.query.state;
    var type = req.query.type;
    var title = req.query.title;
    var feedback = req.query.feedback;
    var dispose = req.query.dispose;

    var filename = encodeURIComponent('广安市网络舆情检索数据');

    service.exportMatchedPubVoices(start, end, state, type, feedback, dispose, title, function (err, rs) {
        if(err) {
            errhandler.internalException(res, err);
        } else {
            try {
                res.set({
                    'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'content-disposition': 'attachment;filename="' + filename + '.doc"'
                }).send('');
            } catch (e) {
                errhandler.internalException(res, e);
            }
        }
    });
}
