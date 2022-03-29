const joi = require('joi');

const id = joi.number().integer();
const title = joi.string().min(10).max(100);
const author = joi.string().min(3).max(100);
const language = joi.string().min(2).max(20);
const edition = joi.string().min(2).max(50);
const isbn = joi.string().min(6).max(14);

const categoryId = joi.number().integer();

const customerId = joi.number().integer();
const stock = joi.number().integer().min(1);
const price = joi.number().integer().min(1000);

const createValidator = joi.object({
  title: title.required(),
  author: author.required(),
  language: language.required(),
  edition: edition.required(),
  isbn: isbn.required(),
  categoryId: categoryId.required(),
  relation: joi.object({
    customerId: customerId.required(),
    stock: stock.required(),
    price: price.required(),
  }),
});

const updateValidator = joi.object({
  title,
  author,
  language,
  edition,
  isbn,
  categoryId,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
