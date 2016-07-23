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

/*
sql.Bit
sql.BigInt
sql.Decimal ([precision], [scale])
sql.Float
sql.Int
sql.Money
sql.Numeric ([precision], [scale])
sql.SmallInt
sql.SmallMoney
sql.Real
sql.TinyInt
 
sql.Char ([length])
sql.NChar ([length])
sql.Text
sql.NText
sql.VarChar ([length])
sql.NVarChar ([length])
sql.Xml
 
sql.Time ([scale])
sql.Date
sql.DateTime
sql.DateTime2 ([scale])
sql.DateTimeOffset ([scale])
sql.SmallDateTime
 
sql.UniqueIdentifier
 
sql.Variant
 
sql.Binary
sql.VarBinary ([length])
sql.Image
 
sql.UDT
sql.Geography
sql.Geometry
*/
function getTypes(type) {
	if (type.toLowerCase() === 'string') {
		return sql.NVarChar;
	} else if (type.toLowerCase() === 'datetime') {
		return sql.DateTime2;
	} else if (type.toLowerCase() === 'int') {
		return sql.Int;
	} else {
		console.log("unsupport type " + type);
		return sql.NVarChar;
	}
}