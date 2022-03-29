const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(100);
const lastname = joi.string().min(3).max(100);
const numberDocument = joi.number().integer().min(1000);

const email = joi.string().email().min(15).max(100);
const password = joi.string().min(5).max(100);

const documentId = joi.number().integer();
const userId = joi.number().integer();

const createValidator = joi.object({
  name: name.required(),
  lastname: lastname.required(),
  numberDocument: numberDocument.required(),
  documentId: documentId.required(),
  user: joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateValidator = joi.object({
  name,
  lastname,
  numberDocument,
  documentId,
  userId,
});

const getValidator = joi.object({
  id: id.required(),
});

module.exports = { createValidator, updateValidator, getValidator };
