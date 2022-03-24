const { ValidationError } = require('sequelize');

function global(err, req, res) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boom(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function orm(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      name: err.name,
      message: err.message,
    });
  }
  next(err);
}

module.exports = { global, boom, orm };
