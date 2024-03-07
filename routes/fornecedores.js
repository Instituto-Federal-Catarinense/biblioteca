var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fornecedores', function(req, res, next) {
  res.send('forneço.');
});

router.get('/fornecedores/produtos', function(req, res, next) {
    res.send('forneço para todo tipo de loja.');
  });

  router.get('/fornecedores/promocoes', function(req, res, next) {
    res.send('forneço qualquer produto que você quiser colocar em pormoção.');
  });

  router.get('/fornecedores/listagem', function(req, res, next) {
    res.send('Liste o que você quer comprar.');
  });

module.exports = router;
