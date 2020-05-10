const { PokemonSpeciesRepository } = require('../repositories/pokemonSpeciesRepository');

class PokemonSpeciesService {
  constructor() {
    this.pokemonSpeciesRepository = new PokemonSpeciesRepository();
  }

  getPokemonSpecies() {
    return this.pokemonSpeciesRepository.getPokemonSpecies();
  }
}

module.exports.PokemonSpeciesService = PokemonSpeciesService;