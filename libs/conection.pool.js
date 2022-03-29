const { Pool } = require('pg');
const { config } = require('../config/config');

const options = {};

if (config.prod) {
  options.connectionString = config.dbUrl;
  options.ssl = {
    rejectUnauthorized: false,
  };
} else {
  const USER = encodeURIComponent(config.dbuser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;
  options.connectionString = URL;
}

const pool = new Pool(options);

module.exports = pool;
