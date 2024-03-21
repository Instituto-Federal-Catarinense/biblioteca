var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de usuario');
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('muito legal ');
});

module.exports = router;
