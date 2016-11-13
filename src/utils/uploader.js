/**
 * Build Date: 08-09-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
var uuid = require('node-uuid');

var errhandler = require('./errhandler');
var pvSvc = require('./../index/publicvoice/service');
var svSvc = require('./../index/socialvoice/service');
var biSvc = require('./../index/badinfo/service');


var userkey = config.session.userkey;

var dfcfg = config.datafile;
var dfhandler = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            _createDirectory(dfcfg.uploadDir + (file.dirName = _buildDirName()), function (err, path) {
                cb(err, path);
            });
        },
        filename: function (req, file, cb) {
            cb(null, uuid.v4() + '.' + _getExtention(file));
        }
    }),
    limits: {
        fileSize: dfcfg.fileSize
    },
    fileFilter: function (req, file, cb) {
        return cb(null, !!~dfcfg.fileType.indexOf(_getExtention(file)));
    }
}).single(dfcfg.field);

var uecfg = config.ueditor;
var uehandler = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            _createDirectory(uecfg.uploadDir + (file.dirName = _buildDirName()), function (err, path) {
                cb(err, path);
            });
        },
        filename: function (req, file, cb) {
            cb(null, uuid.v4() + '.' + _getExtention(file));
        }
    }),
    limits: {
        fileSize: uecfg.fileSize
    },
    fileFilter: function (req, file, cb) {
        return cb(null, !!~uecfg.fileType.indexOf(_getExtention(file)));
    }
}).single(uecfg.field);

var mfcfg = config.msgfile;
var mfhandler = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            file.dirName = req.params.uuid;
            _createDirectory(mfcfg.uploadDir + file.dirName, function (err, path) {
                cb(err, path);
            });
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }),
    limits: {
        fileSize: mfcfg.fileSize
    },
    fileFilter: function (req, file, cb) {
        return cb(null, !!~mfcfg.fileType.indexOf(_getExtention(file)));
    }
}).single(mfcfg.field);

module.exports = {
    datafile: datafile,
    ueditor: ueditor,
    msgfile: msgfile
};

function datafile (req, res) {
    var filehandler;

    switch (req.query.type) {
        case 'pv':
            filehandler = pvSvc.importPubVoices;
            break;
        case 'sv':
            filehandler = svSvc.importSocialVoice;
            break;
        case 'bi':
            filehandler = biSvc.importBadInfo;
    }

    if (!filehandler) {
        return errhandler.invalidParams(res);
    }

    dfhandler(req, res, function (err) {
        var file = req.file;
        var user = req.session[userkey];

        if (err || !file) {
            errhandler.customError(res, '文件类型错误或大于10MB。');
        } else {
            filehandler(user, path.normalize(
                dfcfg.uploadDir + file.dirName + '/' + file.filename
            ), function (err) {
                if (err) {
                    errhandler.customError(res, 'LHS_ERROR' == err.code ? err.message : '文件解析失败。');
                } else {
                    res.send({success: true});
                }
            });
        }
    });
}

function ueditor (req, res) {
    uehandler(req, res, function (err) {
        var file = req.file;

        res.send(JSON.stringify(
            !file || err ? {
                state: '文件类型错误或大于5MB。'
            } : {
                name: file.filename,
                originalName: file.originalname,
                url: file.dirName + '/' + file.filename,
                size: file.size,
                state: 'SUCCESS',
                type: _getExtention(file)
            }
        ));

        err && console.error(err);
    });
}

function msgfile (req, res) {
    mfhandler(req, res, function (err) {
        var file = req.file;

        if (err || !file) {
            errhandler.customError(res, '文件类型错误或大于10MB。');
        } else {
            res.send({
                success: true,
                name: file.filename,
                url: file.dirName + '/' + file.filename,
                size: file.size
            });
        }
    });
}

function _getExtention (file) {
    return file.originalname.split('.').pop();
}

function _buildDirName () {
    var date = new Date();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [
        date.getFullYear(),
        mm < 10 ? '0' : '', mm,
        dd < 10 ? '0' : '', dd
    ].join('');
}

function _createDirectory (path, done) {
    fs.access(path, fs.F_OK, function (err) {
        if (!err) {
            done(null, path);
        } else {
            fs.mkdir(path, function (err) {
                done(err, path);
            });
        }
    });
}
