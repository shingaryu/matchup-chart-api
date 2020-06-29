const { PostgresRepositoryBase } = require('./postgresRepositoryBase');

class PokemonSpeciesRepository extends PostgresRepositoryBase {
  constructor() {
    super();
  }

  getPokemonSpecies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_species;');
  }
}

module.exports.PokemonSpeciesRepository = PokemonSpeciesRepository;