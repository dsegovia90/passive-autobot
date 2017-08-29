const express = require('express');

const router = express.Router();

/* GET users listing. */
router.post('/', (req, res) => {
  const challenge = req.body.challenge;
  res.send(challenge);
});

module.exports = router;
