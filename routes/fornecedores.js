var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Página de fornecedores');
});

router.get('/produtos', function(req, res, next) {
    res.send('produtos');
  });

  router.get('/promocoes', function(req, res, next) {
    res.send('promocoes');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('listagem');
});

module.exports = router;
