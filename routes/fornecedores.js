var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('tudo certo');
  });

/* GET users listing. */
router.get('/produtos', function(req, res, next) {
  res.send('prod prod');
});

/* GET users listing. */
router.get('/listagem', function(req, res, next) {
    res.send('lista aqui');
  });

  /* GET users listing. */
router.get('/promocoes', function(req, res, next) {
    res.send('promocoes ai');
  });

module.exports = router;