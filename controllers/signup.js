// NOTE: Router
const express = require('express');


// NOTE: Route handlers
router = express.Router();

router.get('/signup', (req, res) => {
  res.send('SIGNUP');
});

router.post('/signup', (req, res) => {
  res.send('SIGNUP!');
});


module.exports = router;
