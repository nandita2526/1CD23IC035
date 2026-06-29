const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'app.log');

function writeLog(entry) {
  const line = JSON.stringify(entry) + '\n';
  fs.appendFileSync(LOG_FILE, line); 
}

function log(level, message, meta = {}) {
  writeLog({
    timestamp: new Date().toISOString(),
    level,      
    message,
    ...meta,
  });
}

module.exports = {
  info: (message, meta) => log('info', message, meta),
  warn: (message, meta) => log('warn', message, meta),
  error: (message, meta) => log('error', message, meta),
};