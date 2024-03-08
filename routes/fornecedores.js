var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('voce esta na raiz de fornecedores');
  });
  


router.get('/produtos', function(req, res, next) {
    res.send('inter');
  });


router.get('/promocoes', function(req, res, next) {
    res.send('aaaa');
  });


router.get('/listagem', function(req, res, next) {
    res.send('gremio');
  });

module.exports = router;

