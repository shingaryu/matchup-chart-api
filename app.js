require('dotenv').config();

const express = require('express');
const pokemonStrategiesController = require('./controllers/pokemonStrategiesController');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send('Welcome to matchup-chart-api!');
});

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});

app.use('/pokemonStrategies', pokemonStrategiesController);
