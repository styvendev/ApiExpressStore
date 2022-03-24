const { Document, DocumentSchema } = require('./document.model');
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  Document.init(DocumentSchema, Document.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Document.associate(sequelize.models);
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
