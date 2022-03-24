const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbuser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

module.exports = {
  development: {
    url: URL,
    dialect: 'postgres',
  },
  production: {
    url: URL,
    dialect: 'postgres',
  },
};
