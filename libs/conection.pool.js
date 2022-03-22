const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbuser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

const pool = new Pool({ connectionString: URL });

module.exports = pool;
