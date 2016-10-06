'use strict'
var BaseException = require("./BaseException");

module.exports = class RangeException extends BaseException {
        constructor() {
            super();
            this.errorCode = 4;
        }
    }