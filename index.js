const fs = require('fs');
const Logger = require('./logger');
const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');

let stream = fs.createWriteStream("results/file.txt", {flags: 'a', autoClose: true});
let log = new Logger();
let cLog = new ConsoleLogger();
let fLog = new FileLogger(stream);
let defLog = new DeferredFileLogger("results/defFile.txt");

console.log(log.format("Egwinn"));
cLog.log("Egwinn");
fLog.log("Egwinn");
defLog.log("Egwinn0");
defLog.log("Egwinn1");
defLog.log("Egwinn2");