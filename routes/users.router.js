const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 15;

  for (let i = 0; i < limit; i++) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }

  res.json(users);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Create',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
