var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('rota raiz');
  });

router.get('/produtos', function(req, res, next) {
  res.send('rota de produtos');
});

router.get('/promocoes', function(req, res, next) {
  res.send('rota de promocoes');
});

router.get('/listagem', function(req, res, next) {
    res.send('rota de listagem');
  });

module.exports = router;