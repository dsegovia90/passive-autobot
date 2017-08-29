const express = require('express');

const router = express.Router();

/* GET users listing. */
router.post('/', (req, res) => {
  const challenge = req.body.challenge;
  res.send(challenge);

  console.log(req.body);
});

module.exports = router;
