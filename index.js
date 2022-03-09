const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server in express');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      iagen: faker.image.imageUrl(),
    });
  }
  res.json(products);
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
