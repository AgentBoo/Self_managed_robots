// NOTE: Router
const express = require('express');


// NOTE: Route handlers
router = express.Router();
router.get('/login', (req, res) => {
  res.send('LOGIN');
});

router.post('/login', (req, res) => {
  res.send('LOGIN!');
});

module.exports = router;
