var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Página principal fornecedores")
});

router.get('/produtos', function(req, res, next) {
    res.send("Página Produtos")
  });

  router.get('/promocoes', function(req, res, next) {
    res.send("Página Promoções")
  });

  router.get('/listagem', function(req, res, next) {
    res.send("Página Listagem")
  });

module.exports = router;