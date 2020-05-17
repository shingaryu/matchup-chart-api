const express = require('express');
const { PokemonStrategiesService } = require('../services/pokemonStrategiesService');

const router = express.Router();
const pokemonStrategiesService = new PokemonStrategiesService();
  
router.get('/', async (req, res) => {
  let data = null;
  if (req.query.speciesInfo && req.query.speciesInfo.toLowerCase() === 'true') {
    data = await pokemonStrategiesService.getPokemonStrategiesWithSpecies();
  } else {
    data = await pokemonStrategiesService.getPokemonStrategies();
  }
  res.send(data);
});

module.exports = router;