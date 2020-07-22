const pg = require('pg');
const Client = pg.Client;

const options = {
  user: 'wnrvebbm',
  host: 'ruby.db.elephantsql.com',
  password: '8_Ca5JjgqyBnMmCsPc7LRGbLoqsM2SzB',
  database: 'wnrvebbm',
  port: '5432'
};

const client = new Client(options);

client.connect(() => {
  console.log('connected to the database');
});

const verb = process.argv[2];
let id;

switch(verb) {
  case 'browse':
    client
      .query('SELECT * FROM movie_villains ORDER BY id;')
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  case 'read':
    id = process.argv[3];
    client
      .query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newVillainName = process.argv[4];
    client
      .query('UPDATE movie_villains SET villain = $2 WHERE id = $1;', [id, newVillainName])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const newVillain = process.argv[3];
    const newMovie = process.argv[4];
    client
      .query('INSERT INTO movie_villains(villain, movie) VALUES($1, $2);', [newVillain, newMovie])
      .then(() => {
        console.log('villain created');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    client
      .query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain vanquished');
        client.end();
      });
    break;

  default:
    console.log('please enter a valid verb');
    client.end();
}
