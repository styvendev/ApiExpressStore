const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(5).max(50);

const createValidator = joi.object({
  name: name.required(),
});

const updateValidator = joi.object({
  name: name,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
