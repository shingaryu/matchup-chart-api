const express = require('express');
const { PokemonStrategiesService } = require('../services/pokemonStrategiesService');

const router = express.Router();
const pokemonStrategiesService = new PokemonStrategiesService();
  
router.get('/', async (req, res) => {
  const data = await pokemonStrategiesService.getPokemonStrategies();
  res.send(data);
});

module.exports = router;