const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'Tecnologia',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Muebles',
  });
});

module.exports = router;
