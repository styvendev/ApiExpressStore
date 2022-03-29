const { User, UserSchema } = require('./user.model');
const { Document, DocumentSchema } = require('./document.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Book, BookSchema } = require('./book.model');
const { CustomerBook, CustomerBookSchema } = require('./customer-book.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Document.init(DocumentSchema, Document.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Book.init(BookSchema, Book.config(sequelize));
  CustomerBook.init(CustomerBookSchema, CustomerBook.config(sequelize));

  User.associate(sequelize.models);
  Document.associate(sequelize.models);
  Category.associate(sequelize.models);
  Book.associate(sequelize.models);
  Customer.associate(sequelize.models);
  CustomerBook.associate(sequelize.models);
}

module.exports = setupModels;
