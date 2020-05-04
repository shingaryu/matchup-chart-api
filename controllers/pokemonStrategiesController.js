const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('get pokemon strategies all');
});

module.exports = router;