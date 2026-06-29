const logger = require('./logger');

logger.info('Logger test started');
logger.warn('This is a warning', { reason: 'testing' });
logger.error('This is an error', { code: 500 });

console.log('Done — check app.log in this folder');