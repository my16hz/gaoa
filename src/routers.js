/**
 * Build Date: 06-29-2016
 * Copyright (c): LHS Develop Group
 * Author: lhs
 */
var errorController = require('./error/controller');
var authController = require('./authorize/controller');

module.exports = function (app) {
    // must be the first one.
    app.use(authController.authChecker);

    app.use(require('./authorize/router')());
    app.use(require('./publicvoice/router')());
    app.use(require('./socialvoice/router')());
    app.use(require('./badinfo/router')());
    app.use(require('./smartoffice/router')());
    app.use(require('./sysmanage/router')());
    app.use(require('./error/router')());

    app.use(errorController.errorHandler);

    // must be the last one.
    app.use(errorController.err404Handler);
};