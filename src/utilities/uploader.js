/**
 * Build Date: 08-09-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var multer = require('multer');
var uuid = require('node-uuid');

var dfcfg = config.datafile;
var dfhandler = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dfcfg.uploadDir + (file.dirName = _buildDirName()));
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
            cb(null, uecfg.uploadDir + (file.dirName = _buildDirName()));
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

module.exports = {
    datafile: datafile,
    ueditor: ueditor
};

function datafile () {
    dfhandler(req, res, function (err) {
        var file = req.file;

        if (err || !file) {

        } else {

        }

        err && console.error(err);
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


function _getExtention (file) {
    return file.mimetype.split('/').pop();
}

function _buildDirName () {
    var date = new Date();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [
        date.getFullYear(), !mm[1] && '0', mm,
        !dd[1] && '0', dd
    ].join('');
}