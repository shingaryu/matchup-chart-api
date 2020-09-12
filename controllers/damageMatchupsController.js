const express = require('express');
const { DamageMatchupsService } = require('../services/damageMatchupsService');

const router = express.Router();
const damageMatchupsService = new DamageMatchupsService();
  
router.get('/', async (req, res) => {
  const data = await damageMatchupsService.getDamageMatchups();
  res.send(data);
});

module.exports = router;