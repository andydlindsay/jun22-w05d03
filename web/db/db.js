const pg = require('pg');
const Client = pg.Client;

const options = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

const client = new Client(options);

client.connect(() => {
  console.log('connected to the database');
});

module.exports = client;
