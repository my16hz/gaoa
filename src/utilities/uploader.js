/**
 * Build Date: 08-09-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var multer = require('multer');
var uuid = require('node-uuid');

var cfgDatafile = config.datafile;
var cfgUEditor = config.ueditor;

module.exports = {
    datafile: datafile,
    ueditor: ueditor
};

function datafile () {

}

function ueditor (req, res) {
    return [multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, cfgUEditor.uploadDir + (file.dirName = _buildDirName()));
            },
            filename: function (req, file, cb) {
                cb(null, uuid.v4() + '.' + _getExtention(file));
            }
        }),
        limits: {
            fileSize: cfgUEditor.fileSize
        },
        fileFilter: function (req, file, cb) {
            return cb(null, !!~cfgUEditor.fileType.indexOf(_getExtention(file)));
        }
    }).single(cfgUEditor.field), function (req, res) {
        var file = req.file;

        res.send(JSON.stringify(
            !file ? {
                state: '文件类型错误或大于5Mb'
            } : {
                name: file.filename,
                originalName: file.originalname,
                url: file.dirName + '/' + file.filename,
                size: file.size,
                state: 'SUCCESS',
                type: _getExtention(file)
            }
        ));
    }];
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