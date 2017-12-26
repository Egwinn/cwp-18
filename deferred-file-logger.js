const FileLogger = require('./file-logger');
const fs = require('fs');

class DeferredFileLogger extends FileLogger {
    constructor(file = "default.txt", queueLength = 3, prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(file, prefix, defaultLevel, dateFormat);
        this.queueLength = queueLength;
    }
}

module.exports = DeferredFileLogger;