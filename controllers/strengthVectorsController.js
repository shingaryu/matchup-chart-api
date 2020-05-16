const express = require('express');
const { StrengthVectorsService } = require('../services/strengthVectorsService');

const router = express.Router();
const strengthVectorsService = new StrengthVectorsService();
  
router.get('/strategies/csv', async (req, res) => {
  const data = await strengthVectorsService.getStrengthVectorsByStrategiesInCsv();
  res.send(data);
});

router.get('/strategies', async (req, res) => {
  const data = await strengthVectorsService.getStrengthVectorsByStrategiesInJson();
  res.send(data);
});

module.exports = router;