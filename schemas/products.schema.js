const joi = require('joi');

const id = joi.number().integer();
const title = joi.string().min(10).max(100);
const author = joi.string().min(3).max(100);

const createValidator = joi.object({
  title: title.required(),
  author: author.required(),
});

const updateValidator = joi.object({
  title: title,
  author: author,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
