const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbuser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;
