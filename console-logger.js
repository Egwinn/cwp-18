const Logger = require('./logger');
const moment = require('moment');

class ConsoleLogger extends Logger {
    constructor(prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(prefix, defaultLevel, dateFormat);
    }
}

module.exports = ConsoleLogger;