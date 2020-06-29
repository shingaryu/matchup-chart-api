const { PostgresRepositoryBase } = require('./postgresRepositoryBase');

class MatchupEvaluationRepository extends PostgresRepositoryBase {
  constructor() {
    super();
  }

  getMatchupEvaluations() {
    return this.sqlQueryPromise('SELECT * FROM matchup_evaluations;');
  }
}

module.exports.MatchupEvaluationRepository = MatchupEvaluationRepository;