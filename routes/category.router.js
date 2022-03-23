const express = require('express');

const CategoryService = require('../services/category.service');

const validator = require('../middlewares/validator.data');
const {
  getValidator,
  createValidator,
  updateValidator,
} = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const category = await service.find();
    res.json(category);
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
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

//Create
router.post('/', validator(createValidator, 'body'), async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
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
      const category = await service.update(id, body);
      res.json(category);
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
