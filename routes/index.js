const users = require('./user.router');
const documents = require('./document.router');
const categories = require('./category.router');
const customers = require('./customer.router');
const books = require('./book.router');
const relation = require('./customer-book.router');

function routerApi(app) {
  app.use('/users', users);
  app.use('/document-type', documents);
  app.use('/categories', categories);
  app.use('/customers', customers);
  app.use('/books', books);
  app.use('/relation', relation);
}

module.exports = routerApi;
