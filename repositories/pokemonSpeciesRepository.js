const { MySqlRepositoryBase } = require('./mysqlRepositoryBase.js');

class PokemonSpeciesRepository extends MySqlRepositoryBase {
  constructor() {
    super();
  }

  getPokemonSpecies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_matchup_store.pokemon_species;');
  }
}

module.exports.PokemonSpeciesRepository = PokemonSpeciesRepository;