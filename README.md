# blacktea.exceptions
A collection of the most common exceptions used in my plugins and libraries. They are mostly for internal use but anyone is free to use them.
##usage
Require the library and throw the right exception at the right time:
´´´var Exceptions = require("blacktea.Exceptions");
throw new Exceptions.RuntimeException("This is a runtime exception.");´´´