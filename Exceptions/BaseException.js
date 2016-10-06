'use strict';

module.exports = function BaseException(message, errorCode) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || "";
  this.errorCode = errorCode || 1;
};

require('util').inherits(module.exports, Error);