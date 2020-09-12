const { DamageMatchupsRepository } = require('../repositories/damageMatchupsRepository');

class DamageMatchupsService {
  constructor() {
    this.damageMatchupsRepository = new DamageMatchupsRepository();
  }

  getDamageMatchups() {
    return this.damageMatchupsRepository.getDamageMatchups();
  }
}

module.exports.DamageMatchupsService = DamageMatchupsService;