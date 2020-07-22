const db = require('./db');

// using a callback
const getAllVillains = (cb) => {
  db
    .query('SELECT * FROM movie_villains ORDER BY id;')
    .then((data) => {
      cb(data.rows);
    });
};

// using a promise
const getVillainById = (id) => {
  return db
    .query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((data) => {
      console.log('our villain', data.rows[0]);
      return data.rows[0];
    });
};

module.exports = {
  getAllVillains,
  getVillainById
};
