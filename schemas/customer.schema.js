const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(100);
const lastname = joi.string().min(3).max(100);
const numberdocument = joi.number().integer().min(1000);

const createValidator = joi.object({
  name: name.required(),
  lastname: lastname.required(),
  numberdocument: numberdocument.required(),
});

const updateValidator = joi.object({
  name: name,
  lastname: lastname,
  numberdocument: numberdocument,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
