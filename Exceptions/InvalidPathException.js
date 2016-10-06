'use strict'
var BaseException = require("./BaseException");

module.exports = class InvalidPathException extends BaseException {
        constructor() {
            super();
            this.errorCode = 8;
        }
    }