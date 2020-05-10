const express = require('express');
const { PokemonSpeciesService } = require('../services/pokemonSpeciesService');

const router = express.Router();
const pokemonSpeciesService = new PokemonSpeciesService();
  
router.get('/', async (req, res) => {
  const data = await pokemonSpeciesService.getPokemonSpecies();
  res.send(data);
});

module.exports = router;