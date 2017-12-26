const Logger = require('./logger');
const fs = require('fs');

class FileLogger extends Logger {
    constructor(file = "default.txt", prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(prefix, defaultLevel, dateFormat);
        this.file = file;
    }
}

module.exports = FileLogger;