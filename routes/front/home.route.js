const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
  res.render('errors/500');
});

module.exports = router;