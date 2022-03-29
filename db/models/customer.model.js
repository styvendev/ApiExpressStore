const { Model, DataTypes } = require('sequelize');

const { DOCUMENT_TABLE } = require('./document.model');
const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    field: 'name',
    allowNull: false,
  },

  lastname: {
    type: DataTypes.STRING,
    field: 'lastname',
    allowNull: false,
  },

  numberDocument: {
    type: DataTypes.INTEGER,
    field: 'document_number',
    allowNull: false,
    unique: true,
  },

  documentId: {
    type: DataTypes.INTEGER,
    field: 'type_document',
    allowNull: false,
    references: {
      model: DOCUMENT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.belongsTo(models.Document, { as: 'document' });
    this.hasMany(models.CustomerBook, {
      as: 'relation',
      foreignKey: 'customerId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
