const { PokemonStrategiesRepository } = require('../repositories/pokemonStrategiesRepository');

class PokemonStrategiesService {
  constructor() {
    this.pokemonStrategiesRepository = new PokemonStrategiesRepository();
  }

  getPokemonStrategies() {
    return this.pokemonStrategiesRepository.getPokemonStrategies();
  }
}

module.exports.PokemonStrategiesService = PokemonStrategiesService;