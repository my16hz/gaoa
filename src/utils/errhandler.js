/**
 * Build Date: 07-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    customError: customError,
    internalException: internalException,
    invalidParams: invalidParams
};

function customError (res, msg) {
    res.status(500).send(msg);
}

function internalException (res, err) {
    console.error('Internal Exception: %s', err.stack);
    res
        .status(500)
        .send('服务器获取数据错误。');
}

function invalidParams (res) {
    res
        .status(400)
        .send('请求参数格式错误。');
}