var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui está os fornecedores');
});

router.get('/produtos', function(req, res, next) {
    res.send('Aqui está os produtos');
  });

  router.get('/promocoes', function(req, res, next) {
    res.send('Aqui está os promocões');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('Aqui está os listagem dos produtos, e fornecedores');
  });
  

module.exports = router;
