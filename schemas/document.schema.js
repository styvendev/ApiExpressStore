const joi = require('joi');

const id = joi.number().integer();
const documentName = joi.string().min(5).max(50);

const createValidator = joi.object({
  documentName: documentName.required(),
});

const updateValidator = joi.object({
  documentName,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
