const { PostgresRepositoryBase } = require('./postgresRepositoryBase');

class DamageMatchupsRepository extends PostgresRepositoryBase {
  constructor() {
    super();
  }

  async getDamageMatchups() {
    const sql = `
      select 
      dma.id as id,
      dma.player_poke_id as player_poke_id,
      spep.name as player_poke_species,
      dma.target_poke_id as target_poke_id,
      spet.name as target_poke_species,
      mda.move_name as move_name,
      mda.player_hp_diff as player_hp_diff,
      mda.target_hp_diff as target_hp_diff
      from damage_matchups as dma inner join move_damages as mda
      on dma.id = mda.damage_matchup_id
      inner join pokemon_strategies as strp
      on dma.player_poke_id = strp.id
      inner join pokemon_species as spep
      on strp.species_id = spep.id
      inner join pokemon_strategies as strt
      on dma.target_poke_id = strt.id
      inner join pokemon_species as spet
      on strt.species_id = spet.id
      ;   
    `

    const records = await this.sqlQueryPromise(sql);
    const obj = this.damageMatchupMapper(records);
    return obj;
  }

  damageMatchupMapper(records) {
    const damageMatchupMap = new Map();
    records.forEach(record => {
      const value = damageMatchupMap.get(record.id);
      if (!value) {
        const obj = {
          id: record.id,
          playerPokeId: record.player_poke_id,
          playerPokeSpecies: record.player_poke_species,
          targetPokeId: record.target_poke_id,
          targetPokeSpecies: record.target_species,
          moveDamages: [
            {
              moveName: record.move_name,
              playerHPDiff: record.player_hp_diff,
              targetHPDiff: record.target_hp_diff
            }
          ]
        }

        damageMatchupMap.set(record.id, obj);
      } else {
        value.moveDamages.push(
          {
            moveName: record.move_name,
            playerHPDiff: record.player_hp_diff,
            targetHPDiff: record.target_hp_diff          
          }
        );
      }
    });

    const damageMatchupObjects = [];
    damageMatchupMap.forEach((value, key) => {
      damageMatchupObjects.push(value);
    });

    return damageMatchupObjects;
  }  
}

module.exports.DamageMatchupsRepository = DamageMatchupsRepository;