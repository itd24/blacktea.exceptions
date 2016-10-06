'use strict'
var BaseException = require("./BaseException");

module.exports = class FileNotFoundException extends BaseException {
        constructor() {
            super();
            this.errorCode = 7;
        }
    }