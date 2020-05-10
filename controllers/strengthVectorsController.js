const express = require('express');
const { StrengthVectorsService } = require('../services/strengthVectorsService');

const router = express.Router();
const strengthVectorsService = new StrengthVectorsService();
  
router.get('/strategies', async (req, res) => {
  const data = await strengthVectorsService.getStrengthVectorsByStrategies();
  res.send(data);
});

module.exports = router;