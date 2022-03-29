const express = require('express');

const CustomerBookService = require('../services/customer-book.service');

const validator = require('../middlewares/validator.data');
const {
  getValidator,
  createValidator,
  updateValidator,
} = require('../schemas/customer-book.schema');

const router = express.Router();
const service = new CustomerBookService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const relation = await service.find();
    res.json(relation);
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
      const relation = await service.findOne(id);
      res.json(relation);
    } catch (error) {
      next(error);
    }
  }
);

//Create
router.post('/', validator(createValidator, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const newRelation = await service.create(body);
    res.status(201).json(newRelation);
  } catch (error) {
    next(error);
  }
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
      const relation = await service.update(id, body);
      res.json(relation);
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
      const deleted = await service.delete(id);
      res.json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
