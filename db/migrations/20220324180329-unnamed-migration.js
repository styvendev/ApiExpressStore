'use strict';

const { DOCUMENT_TABLE, DocumentSchema } = require('../models/document.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(DOCUMENT_TABLE, DocumentSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(DOCUMENT_TABLE);
  },
};
