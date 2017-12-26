const moment = require('moment');

class Logger {
    constructor(prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        this.prefix = prefix;
        this.defaultLevel = defaultLevel;
        this.dateFormat = dateFormat;
    }
}

module.exports = Logger;