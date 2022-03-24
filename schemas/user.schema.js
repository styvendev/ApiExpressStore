const joi = require('joi');

const id = joi.number().integer();
const email = joi.string().email().min(15).max(100);
const password = joi.string().min(5).max(100);

const createValidator = joi.object({
  email: email.required(),
  password: password.required(),
});

const updateValidator = joi.object({
  email,
  password,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
