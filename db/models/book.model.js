const { Model, DataTypes } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model');

const BOOK_TABLE = 'book';

const BookSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    field: 'title',
    allowNull: false,
  },

  author: {
    type: DataTypes.STRING,
    field: 'author',
    allowNull: false,
  },

  language: {
    type: DataTypes.STRING,
    field: 'language',
    allowNull: false,
  },

  edition: {
    type: DataTypes.STRING,
    field: 'edition',
    allowNull: false,
  },

  isbn: {
    type: DataTypes.STRING,
    field: 'isbn',
    allowNull: false,
    unique: true,
  },

  categoryId: {
    type: DataTypes.INTEGER,
    field: 'category_id',
    allowNull: false,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Book extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
    this.hasMany(models.CustomerBook, {
      as: 'relation',
      foreignKey: 'bookId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BOOK_TABLE,
      modelName: 'Book',
      timestamps: false,
    };
  }
}

module.exports = { BOOK_TABLE, BookSchema, Book };
