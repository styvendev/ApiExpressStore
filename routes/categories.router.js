const express = require('express');

const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

//Find
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

//FindOne
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  res.json(categories);
});

//Create
router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

//Update
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const Category = service.update(id, body);
  res.json(Category);
});

//Deleted
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = service.delete(id);
  res.json(deleted);
});

module.exports = router;
