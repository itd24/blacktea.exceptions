'use strict'
var BaseException = require("./BaseException");

module.exports = class DomainException extends BaseException {
        constructor() {
            super();
            this.errorCode = 2;
        }
    }