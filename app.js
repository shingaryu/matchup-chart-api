require('dotenv').config();

const express = require('express');
const pokemonSpeciesController = require('./controllers/pokemonSpeciesController');
const pokemonStrategiesController = require('./controllers/pokemonStrategiesController');
const strengthVectorsController = require('./controllers/strengthVectorsController');

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

app.listen(process.env.PORT || 5000, function() {
  console.log(`app listening on port ${process.env.PORT || 5000}!`);
});

app.use('/pokemonSpecies', pokemonSpeciesController);
app.use('/pokemonStrategies', pokemonStrategiesController);
app.use('/strengthVectors', strengthVectorsController);
