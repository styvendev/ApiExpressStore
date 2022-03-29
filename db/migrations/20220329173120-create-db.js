'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');
const { DOCUMENT_TABLE, DocumentSchema } = require('../models/document.model');
const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');
const { BOOK_TABLE, BookSchema } = require('../models/book.model');
const {
  CUSTOMER_BOOK_TABLE,
  CustomerBookSchema,
} = require('../models/customer-book.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(DOCUMENT_TABLE, DocumentSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(BOOK_TABLE, BookSchema);
    await queryInterface.createTable(CUSTOMER_BOOK_TABLE, CustomerBookSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_BOOK_TABLE);
    await queryInterface.dropTable(BOOK_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(DOCUMENT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
