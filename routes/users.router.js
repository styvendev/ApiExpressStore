const express = require('express');

const UsersService = require('../services/users.service');

const router = express.Router();
const service = new UsersService();

//Find
router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

//FindOne
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const users = service.findOne(id);
  res.json(users);
});

//Create
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

//Update
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

//deleted
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.delete(id);
  res.json(user);
});

module.exports = router;
