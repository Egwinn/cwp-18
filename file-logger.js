const Logger = require('./logger');
const fs = require('fs');

class FileLogger extends Logger {
    constructor(file = "default.txt", prefix = "prefix", defaultLevel = "LOG", dateFormat = "dddd, MMMM Do YYYY, h:mm:ss a") {
        super(prefix, defaultLevel, dateFormat);
        this.file = file;
    }

    log(message, level = this.defaultLevel) {
        return new Promise((resolve, reject) => {
            if (typeof(this.file) === 'string' || this.file instanceof String) {
                fs.appendFile(this.file, this.format(message + "\r\n", level), (err) => {
                    if (err) {
                        console.error(err);
                        reject(false);
                    }
                    else resolve(true);
                });
            }
            else {
                this.file.write(this.format(message + "\r\n", level), (err) => {
                    if (err) {
                        console.error(err);
                        this.file.close();
                        reject(false);
                    }
                    else {
                        this.file.close();
                        resolve(true);
                    }
                });
            }
        });
    }
}

module.exports = FileLogger;