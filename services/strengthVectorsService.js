const { PokemonStrategiesRepository } = require('../repositories/pokemonStrategiesRepository');
const { MatchupEvaluationRepository } = require('../repositories/matchupEvaluationRepository');

class StrengthVectorsService {
  constructor() {
    this.pokemonStrategiesRepository = new PokemonStrategiesRepository();
    this.matchupEvaluationRepository = new MatchupEvaluationRepository();
  }

  async getStrengthVectorsByStrategiesInCsv() {
    const strategies = await this.pokemonStrategiesRepository.getPokemonStrategiesWithName();
    const evaluations = await this.matchupEvaluationRepository.getMatchupEvaluations();
    const evalTable = this.rectangleStrengthTable(strategies, evaluations);

    const csvText = this.evalTableCsvText(evalTable, strategies.map(x => x.name), strategies.map(x => x.name));
    return csvText;
  }

  async getStrengthVectorsByStrategiesInJson() {
    const strategies = await this.pokemonStrategiesRepository.getPokemonStrategiesWithName();
    const evaluations = await this.matchupEvaluationRepository.getMatchupEvaluations();
    const evalTable = this.rectangleStrengthTable(strategies, evaluations);

    const columns = strategies.map(x => ({ strategyId: x.id, species: x.name }));
    const rows = strategies.map((x, i)=> ({
      strategyId: x.id, 
      species: x.name,
      values: evalTable[i]
    }))

    return { columns, rows };
  }

  rectangleStrengthTable(strategies, evaluations) {
    const evalTable = [];
    strategies.forEach(x => {
     const row = [];
    //  strategies.forEach(y => row.push('NULL')); 
      strategies.forEach(y => row.push(0)); // should we track 'not calculated yet' by a specific symbol? 
      evalTable.push(row);
    })
    
    evaluations.forEach(evaluation => {
      // console.log(`player: ${evaluation.player_poke_id}, target: ${evaluation.target_poke_id}`)
  
      const rowIndex = strategies.map(x => x.id).indexOf(evaluation.player_poke_id);
      const columnIndex = strategies.map(x => x.id).indexOf(evaluation.target_poke_id);
  
      evalTable[rowIndex][columnIndex] = evaluation.value;
      evalTable[columnIndex][rowIndex] = -evaluation.value;
    });

    return evalTable;
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