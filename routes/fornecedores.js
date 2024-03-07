var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send('Página Principal Fornecedores')
});

router.get('/produtos', function(req, res, next) {
    res.send("pagina de produtos")
  });

  router.get('/promocoes', function(req, res, next) {
    res.send("pagina de promocoes")
  });

  router.get('/listagem', function(req, res, next) {
    res.send("pagina de listagem")
  });

module.exports = router; 
