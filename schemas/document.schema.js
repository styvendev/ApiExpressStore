const joi = require('joi');

const id = joi.number().integer();
const initials = joi.string().min(2).max(10);
const name = joi.string().min(5).max(50);

const createValidator = joi.object({
  initials: initials.required(),
  name: name.required(),
});

const updateValidator = joi.object({
  initials: initials,
  name: name,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
