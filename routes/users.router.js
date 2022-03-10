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

module.exports = router;
