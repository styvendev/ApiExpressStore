const products = require('./products.router');
const categories = require('./categories.router');
const users = require('./users.router');

function routerApi(app) {
  app.use('/products', products);
  app.use('/categories', categories);
  app.use('/users', users);
}

module.exports = routerApi;
