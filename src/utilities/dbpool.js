/**
 * Build Date: 07-20-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var config = require('config');
var sql = require("mssql");

var connection;

module.exports = {
    initPool: initPool,
    createRequest: createRequest,
    preparedStatement: preparedStatement,
    getTypes: getTypes
};

function initPool (done) {
    connection = new sql.Connection(config.db, done);
}

function createRequest () {
    return new sql.Request(connection);
}

function preparedStatement () {
	return new sql.PreparedStatement(connection);
}

function getTypes(type) {
	if (type.toLowerCase() === 'varchar') {
		return sql.VarChar;
	} else if (type.toLowerCase() === 'datetime') {
		return sql.DateTime2;
	} else {
		console.log("unsupport type " + type);
	}
}