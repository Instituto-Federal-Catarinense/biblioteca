var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui está fornecedores');
});

router.get('/produtos', function(req, res, next) {
    res.send('Aqui está produtos');
  });

  router.get('/promocoes', function(req, res, next) {
    res.send('Aqui está promocões');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('Aqui está listagem dos produtos, e fornecedores');
  });
  

module.exports = router;