const { MySqlRepositoryBase } = require('./mysqlRepositoryBase.js');

class PokemonStrategiesRepository extends MySqlRepositoryBase {
  constructor() {
    super();
  }

  getPokemonStrategies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_matchup_store.pokemon_strategies;');
  }

  getPokemonStrategiesWithName() {
    const sql = `
      SELECT str.id, spe.name
      FROM pokemon_matchup_store.pokemon_strategies as str
      INNER JOIN pokemon_species as spe
      ON str.species_id = spe.id
    `

    return this.sqlQueryPromise(sql);
  }
}

module.exports.PokemonStrategiesRepository = PokemonStrategiesRepository;