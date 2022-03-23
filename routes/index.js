const books = require('./book.router');
const categories = require('./category.router');
const customers = require('./customer.router');
const documents = require('./document.router');
const users = require('./user.router');

function routerApi(app) {
  app.use('/books', books);
  app.use('/categories', categories);
  app.use('/customers', customers);
  app.use('/document-type', documents);
  app.use('/users', users);
}

module.exports = routerApi;
