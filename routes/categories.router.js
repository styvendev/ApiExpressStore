const express = require('express');

const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

//Find
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

//FindOne
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const categories = await service.findOne(id);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

//Create
router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

//Update
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const Category = await service.update(id, body);
    res.json(Category);
  } catch (error) {
    next(error);
  }
});

//Deleted
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await service.delete(id);
    res.json(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
