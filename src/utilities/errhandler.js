/**
 * Build Date: 07-23-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
module.exports = {
    invalidParams: invalidParams,
    internalException: internalException
};

function invalidParams (res) {
    res.status(400).send('请求参数格式错误。');
}

function internalException (res) {
    res.status(500).send('服务器异常。')
}