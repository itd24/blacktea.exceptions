'use strict'
var BaseException = require("./BaseException");

module.exports = class InvalidArgumentException extends BaseException {
        constructor() {
            super();
            this.errorCode = 3;
        }
    }