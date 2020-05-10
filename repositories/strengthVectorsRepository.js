const { MySqlRepositoryBase } = require('./mysqlRepositoryBase.js');

class StrengthVectorsRepository extends MySqlRepositoryBase {
  constructor() {
    super();
  }

  getPokemonStrategies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_matchup_store.pokemon_strategies;');
  }
}

module.exports.StrengthVectorsRepository = StrengthVectorsRepository;