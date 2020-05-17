const { PokemonStrategiesRepository } = require('../repositories/pokemonStrategiesRepository');

class PokemonStrategiesService {
  constructor() {
    this.pokemonStrategiesRepository = new PokemonStrategiesRepository();
  }

  getPokemonStrategies() {
    return this.pokemonStrategiesRepository.getPokemonStrategies();
  }

  getPokemonStrategiesWithSpecies() {
    return this.pokemonStrategiesRepository.getPokemonStrategiesWithSpecies();
  }
}

module.exports.PokemonStrategiesService = PokemonStrategiesService;