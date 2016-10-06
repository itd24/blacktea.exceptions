'use strict'
module.exports = {
    Exception:                  require('./Exceptions/BaseException'),
    DomainException:            require('./Exceptions/DomainException'),
    FileNotFoundException:      require('./Exceptions/FileNotFoundException'),
    HttpException:              require('./Exceptions/HttpException'),
    InvalidArgumentException:   require('./Exceptions/InvalidArgumentException'),
    InvalidPathException:       require('./Exceptions/InvalidPathException'),
    RangeException:             require('./Exceptions/RangeException'),
    RuntimeException:           require('./Exceptions/RuntimeException')
}