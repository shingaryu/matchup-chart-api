const { MySqlRepositoryBase } = require('./mysqlRepositoryBase.js');

class MatchupEvaluationRepository extends MySqlRepositoryBase {
  constructor() {
    super();
  }

  getMatchupEvaluations() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_matchup_store.matchup_evaluations;');
  }
}

module.exports.MatchupEvaluationRepository = MatchupEvaluationRepository;