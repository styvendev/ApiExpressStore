const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server in express');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'PC',
      price: 1500000,
    },
    {
      name: 'Audifonos',
      price: 650000,
    },
  ]);
});

app.get('/categories/:category/product/:product', (req, res) => {
  const { category, product } = req.params;
  res.json({
    id: 125,
    category,
    product,
    price: 10000000,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay ningun parametro');
  }
});

app.listen(port, () => {
  console.log('port run on serve', 'localhost:' + port);
});
