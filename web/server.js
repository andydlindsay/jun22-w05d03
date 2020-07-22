// load environment variables
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const villainsRoutes = require('./routes/villain-routes');

const app = express();
const port = process.env.PORT || 5678;

app.use(morgan('dev'));
app.use('/villains', villainsRoutes);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
