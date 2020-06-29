const { PostgresRepositoryBase } = require('./postgresRepositoryBase');

class PokemonStrategiesRepository extends PostgresRepositoryBase {
  constructor() {
    super();
  }

  getPokemonStrategies() {
    return this.sqlQueryPromise('SELECT * FROM pokemon_strategies;');
  }

  getPokemonStrategiesWithSpecies() {
    const sql = `
      SELECT 
        str.id as id ,
        str.species_id as species_id ,
        spe.name as species,
        spe.dex_number as dex_number,
        str.item as item ,
        str.ability as ability ,
        str.nature as nature ,
        str.move1 as move1 ,
        str.move2 as move2 ,
        str.move3 as move3 ,
        str.move4 as move4 ,
        str.ev_hp as ev_hp ,
        str.ev_atk as ev_atk ,
        str.ev_def as ev_def ,
        str.ev_spa as ev_spa ,
        str.ev_spd as ev_spd ,
        str.ev_spe as ev_spe ,
        str.nickname as nickname ,
        str.gender as gender ,
        str.iv_hp as iv_hp ,
        str.iv_atk as iv_atk ,
        str.iv_def as iv_def ,
        str.iv_spa as iv_spa ,
        str.iv_spd as iv_spd ,
        str.iv_spe as iv_spe ,
        str.level as level ,
        str.happiness as happiness ,
        str.shiny as shiny 
      FROM pokemon_strategies as str
      INNER JOIN pokemon_species as spe
      ON str.species_id = spe.id
      ORDER BY spe.name, str.id    
    `

    return this.sqlQueryPromise(sql);
  }

  getPokemonStrategiesWithName() {
    const sql = `
      SELECT str.id, spe.name
      FROM pokemon_strategies as str
      INNER JOIN pokemon_species as spe
      ON str.species_id = spe.id
      ORDER BY spe.name, str.id
    `

    return this.sqlQueryPromise(sql);
  }
}

module.exports.PokemonStrategiesRepository = PokemonStrategiesRepository;