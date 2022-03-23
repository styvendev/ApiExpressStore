const express = require('express');

const DocumentService = require('../services/document.service');

const validator = require('../middlewares/validator.data');
const {
  getValidator,
  createValidator,
  updateValidator,
} = require('../schemas/document.schema');

const router = express.Router();
const service = new DocumentService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const documents = await service.find();
    res.json(documents);
  } catch (error) {
    next(error);
  }
});

//FindOne
router.get(
  '/:id',
  validator(getValidator, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const document = await service.findOne(id);
      res.json(document);
    } catch (error) {
      next(error);
    }
  }
);

//Create
router.post('/', validator(createValidator, 'body'), async (req, res) => {
  const body = req.body;
  const newDocument = await service.create(body);
  res.status(201).json(newDocument);
});

//Update
router.patch(
  '/:id',
  validator(getValidator, 'params'),
  validator(updateValidator, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const document = await service.update(id, body);
      res.json(document);
    } catch (error) {
      next(error);
    }
  }
);

//Deleted
router.delete(
  '/:id',
  validator(getValidator, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const document = await service.delete(id);
      res.json(document);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
