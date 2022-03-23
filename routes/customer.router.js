const express = require('express');

const CustomerService = require('../services/customer.service');

const validator = require('../middlewares/validator.data');
const {
  getValidator,
  createValidator,
  updateValidator,
} = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const customer = await service.find();
    res.json(customer);
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
  const newCustomer = await service.create(body);
  res.status(201).json(newCustomer);
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
      const customer = await service.update(id, body);
      res.json(customer);
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
      const customer = await service.delete(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
