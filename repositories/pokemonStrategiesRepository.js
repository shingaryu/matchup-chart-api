const mysql = require('mysql');

class PokemonStrategiesRepository {
  constructor() {
    this.connection = mysql.createConnection({
      host     : process.env.MYSQL_HOST,
      user     : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : 'pokemon_matchup_store'
    });

    this.connection.connect();
  }

  getPokemonStrategies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_matchup_store.pokemon_strategies;');
  }

  sqlQueryPromise(statement) {
    return new Promise((resolve, reject) => {
      this.connection.query(statement, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results, fields);
        }
      });
    });
  }
}

module.exports.PokemonStrategiesRepository = PokemonStrategiesRepository;