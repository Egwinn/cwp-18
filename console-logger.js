const Logger = require('./logger');
const moment = require('moment');

class ConsoleLogger extends Logger {
    constructor(prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(prefix, defaultLevel, dateFormat);
    }

    format(message, level = this.defaultLevel) {
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${message}\n`;
    }

    log(message, level = this.defaultLevel) {
        switch (level) {
            case "LOG": {
                console.log(this.format(message, level));
                break;
            }
            case "INFO": {
                console.info(this.format(message, level));
                break;
            }
            case "WARN": {
                console.warn(this.format(message, level));
                break;
            }
            case "ERROR": {
                console.error(this.format(message, level));
                break;
            }
            default: {
                console.log(this.format(message, this.defaultLevel));
            }
        }
    }
}

module.exports = ConsoleLogger;