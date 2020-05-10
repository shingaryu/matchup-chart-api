const mysql = require('mysql');

class MySqlRepositoryBase {
  constructor() {
    this.connection = mysql.createConnection({
      host     : process.env.MYSQL_HOST,
      user     : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : 'pokemon_matchup_store'
    });

    this.connection.connect();
  }

  sqlQueryPromise(statement) {
    return new Promise((resolve, reject) => {
      this.connection.query(statement, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          // to extract objects from RowDataPacket
          const flatObjects = results.map(x => ({...x}));
          resolve(flatObjects, fields);
        }
      });
    });
  }
}

module.exports.MySqlRepositoryBase = MySqlRepositoryBase;