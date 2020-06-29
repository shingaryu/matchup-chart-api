const { Client } = require('pg')

class PostgresRepositoryBase {
  constructor() {
    // on heroku environment
    if (process.env.NODE_ENV === 'production') {
      this.client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
    } else {
      this.client = new Client({
        connectionString: process.env.DATABASE_URL,
      });
    }

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