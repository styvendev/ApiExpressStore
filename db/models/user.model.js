const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'user';

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
    field: 'email',
    allowNull: false,
    unique: true,
  },
  
  password: {
    type: DataTypes.STRING,
    field: 'password',
    allowNull: false,
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
