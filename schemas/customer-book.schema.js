const joi = require('joi');

const id = joi.number().integer();
const customerId = joi.number().integer();
const bookId = joi.number().integer();
const stock = joi.number().integer().min(1);
const price = joi.number().integer().min(1000);

const createValidator = joi.object({
  customerId: customerId.required(),
  bookId: bookId.required(),
  stock: stock.required(),
  price: price.required(),
});

const updateValidator = joi.object({
  customerId,
  bookId,
  stock,
  price,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
