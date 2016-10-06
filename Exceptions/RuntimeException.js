'use strict'
var BaseException = require("./BaseException");

module.exports = class RuntimeException extends BaseException {
        constructor() {
            super();
            this.errorCode = 5;
        }
    }