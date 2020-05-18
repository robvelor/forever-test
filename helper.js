const fs = require('fs');
const util = require('util');

const appendFile = util.promisify(fs.appendFile);

const sleep = milliseconds => new Promise(resolve => setTimeout(() => resolve(), milliseconds));

const log = (msg, logFile = 'log.log') =>
  appendFile(logFile, `${new Date()} - ${msg}\n`, err => {
    if (err) throw err;
  });

module.exports = { sleep, log };
