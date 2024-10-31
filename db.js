const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'ibm123$',
  host: '10.10.0.250',
  port: 5432, // default Postgres port
  database: 'cms'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};