/**
 * Build Date: 07-10-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var dbpool = require("../utilities/dbpool");

module.exports = {
    auth:auth
};

/**
 * 用户登陆校验
 * @param username {String}
 * @param password {String}
 * @returns object {uid, gid, role:[]}
 */
function auth(username, password , cb) {
    var sql_stmt = "select * from tb_user where name = @username and password = @password;";
    var objParams = {"username" : username, "password" : password };
    var ps = dbpool.preparedStatement();
    ps.input("username", dbpool.getTypes('varchar'));
	ps.input("password", dbpool.getTypes('varchar'));
	ps.prepare(sql_stmt, function(err) {
	  if ( err ) {
	    return new Error('fail to prepare sql stmt.');
	  }
	  ps.execute(objParams, function(err, recordset)     {                                               
		cb(err, recordset)
	    ps.unprepare(function(err) {
            if (err)
                console.log(err);	    	
	    });                                     
	  });
	});
}