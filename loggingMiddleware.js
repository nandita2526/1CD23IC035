const logger = require('./logger');

function loggingMiddleware(req, res, next) {
  const start = Date.now();

  logger.info('Incoming request', {
    method: req.method,
    path: req.originalUrl,
  });

  res.on('finish', () => {
    logger.info('Request completed', {
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
    });
  });

  next();
}

module.exports = loggingMiddleware;