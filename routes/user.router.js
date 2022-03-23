const express = require('express');

const UserService = require('../services/user.service');

const validator = require('../middlewares/validator.data');
const {
  getValidator,
  createValidator,
  updateValidator,
} = require('../schemas/customer.schema');

const router = express.Router();
const service = new UserService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
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
      const users = await service.findOne(id);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

//Create
router.post('/', validator(createValidator, 'body'), async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
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
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

//deleted
router.delete(
  '/:id',
  validator(getValidator, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.delete(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
