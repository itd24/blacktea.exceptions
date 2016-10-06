'use strict'
var BaseException = require("./BaseException");

module.exports = class HttpException extends BaseException {
        constructor() {
            super();
            this.errorCode = 6;
        }
    }