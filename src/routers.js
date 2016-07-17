/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var errorController = require('./error/controller');
var authController = require('./auth/controller');

module.exports = function (app) {
    // must be the first one.
    app.use(authController.authChecker);

    app.use(require('./auth/router')());

    app.use(require('./index/router')());
    app.use(require('./index/publicvoice/router')());
    app.use(require('./index/socialvoice/router')());
    app.use(require('./index/badinfo/router')());
    app.use(require('./index/smartoffice/router')());
    app.use(require('./index/sysmanage/router')());
    app.use(require('./error/router')());

    app.use(errorController.errorHandler);

    // must be the last one.
    app.use(errorController.err404Handler);
};