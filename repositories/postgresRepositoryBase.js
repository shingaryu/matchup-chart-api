const { Client } = require('pg')

class PostgresRepositoryBase {
  constructor() {
    this.client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: 'pokemon_matchup_store',
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
    });

    this.client.connect();
  }

  sqlQueryPromise(statement) {
    // this.client.connect();
    return new Promise((resolve, reject) => {
      this.client.query(statement, (err, res) => {
        if (err) {
          // this.client.end();
          reject(err);
        } else {
          // this.client.end();
          resolve(res.rows);
        }
      })
    });
  }
}

module.exports.PostgresRepositoryBase = PostgresRepositoryBase;