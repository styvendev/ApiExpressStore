const { Model, DataTypes } = require('sequelize');

const DOCUMENT_TABLE = 'document_type';

const DocumentSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  
  documentName: {
    type: DataTypes.STRING,
    field: 'document_name',
    allowNull: false,
    unique: true,
  },
};

class Document extends Model {

  static associate(models) {
    this.hasMany(models.Customer, {
      as: 'customer',
      foreignKey: 'documentId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCUMENT_TABLE,
      modelName: 'Document',
      timestamps: false,
    };
  }
}

module.exports = { DOCUMENT_TABLE, DocumentSchema, Document };
