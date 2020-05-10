const { PokemonStrategiesRepository } = require('../repositories/pokemonStrategiesRepository');
const { MatchupEvaluationRepository } = require('../repositories/matchupEvaluationRepository');

class StrengthVectorsService {
  constructor() {
    this.pokemonStrategiesRepository = new PokemonStrategiesRepository();
    this.matchupEvaluationRepository = new MatchupEvaluationRepository();
  }

  async getStrengthVectorsByStrategies() {
    const strategies = await this.pokemonStrategiesRepository.getPokemonStrategiesWithName();
    const evaluations = await this.matchupEvaluationRepository.getMatchupEvaluations();

    const evalTable = [];
    strategies.forEach(x => {
     const row = [];
     strategies.forEach(y => row.push('NULL')); 
      evalTable.push(row);
    })
    
    evaluations.forEach(evaluation => {
      // console.log(`player: ${evaluation.player_poke_id}, target: ${evaluation.target_poke_id}`)
  
      const rowIndex = strategies.map(x => x.id).indexOf(evaluation.player_poke_id);
      const columnIndex = strategies.map(x => x.id).indexOf(evaluation.target_poke_id);
  
      evalTable[rowIndex][columnIndex] = evaluation.value;
      evalTable[columnIndex][rowIndex] = -evaluation.value;
    });
  
    const csvText = this.evalTableCsvText(evalTable, strategies.map(x => x.name), strategies.map(x => x.name));
    return csvText;
  }

  evalTableCsvText(evalValueTable, rowHeader, columnHeader) {
    let csvText = '';
    columnHeader.forEach(columnName => csvText += ','+ columnName);
    csvText += '\n';
  
    for (let i = 0; i < evalValueTable.length; i++) {
      const row = evalValueTable[i];
      for (let j = 0; j < row.length; j++) {
        if (j === 0) {
          csvText += rowHeader[i];
        } 
        
        csvText += ',' + (typeof(row[j]) === 'number'? row[j].toFixed(): row[j]);
      }
  
      csvText += '\n';
    }
  
    return csvText;
  }
}

module.exports.StrengthVectorsService = StrengthVectorsService;