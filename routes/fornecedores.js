var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('fornecedores');
});

router.get('/inter', function(req, res, next) {
    res.send('maior do sul');
  });

  router.get('/bremio', function(req, res, next) {
    res.send('pior do sul');
  });

  router.get('/gabiru', function(req, res, next) {
    res.send('gol lendario');
  });

module.exports = router;
