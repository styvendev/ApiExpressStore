const joi = require('joi');

const id = joi.number().integer();
const title = joi.string().min(10).max(100);
const author = joi.string().min(3).max(100);
const language = joi.string().min(2).max(20);
const editorial = joi.string().min(2).max(50);
const isbn = joi.string().min(6).max(14);

const createValidator = joi.object({
  title: title.required(),
  author: author.required(),
  language: language.required(),
  editorial: editorial.required(),
  isbn: isbn.required(),
});

const updateValidator = joi.object({
  title: title,
  author: author,
  language: language,
  editorial: editorial,
  isbn: isbn,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
