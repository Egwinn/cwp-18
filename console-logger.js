const Logger = require('./logger');
const moment = require('moment');

class ConsoleLogger extends Logger {
    constructor(prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(prefix, defaultLevel, dateFormat);
    }

    format(message, level = this.defaultLevel) {
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${message}\n`;
    }
}

module.exports = ConsoleLogger;