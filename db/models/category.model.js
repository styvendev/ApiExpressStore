const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
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
    unique: true,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Book, {
      as: 'books',
      foreignKey: 'categoryId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
