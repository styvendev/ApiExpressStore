const { Model, DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.model');
const { BOOK_TABLE } = require('./book.model');

const CUSTOMER_BOOK_TABLE = 'customer_book';

const CustomerBookSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  customerId: {
    type: DataTypes.INTEGER,
    field: 'customer_id',
    allowNull: false,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  bookId: {
    type: DataTypes.INTEGER,
    field: 'book_id',
    allowNull: false,
    references: {
      model: BOOK_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  stock: {
    type: DataTypes.INTEGER,
    field: 'stock',
    allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER,
    field: 'price',
    allowNull: false,
  },
};

class CustomerBook extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
    this.belongsTo(models.Book, { as: 'book' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_BOOK_TABLE,
      modelName: 'CustomerBook',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMER_BOOK_TABLE, CustomerBookSchema, CustomerBook};
