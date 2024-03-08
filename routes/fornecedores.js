var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Página principal de fornecedores")
});

router.get('/produtos', function(req, res, next) {
  res.send("Página de Produtos do Sistema")
});

router.get('/promocoes', function(req, res, next) {
  res.send("Página das Promoções")
});

router.get('/listagem', function(req, res, next) {
  res.send("Página de Listagem")
});

module.exports = router;
