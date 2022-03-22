function global(err, req, res, next) {
  console.error(err);
  next(err);
}

function boom(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { global, boom };
