var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de estudantes');
});

router.get('/produtos', function(req, res, next) {
  res.send('pagina do alex de produtos');
});

router.get('/promocoes', function(req, res, next) {
    res.send('pagina de promocoes do alex');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('pagina de listagem do alex');
  });
module.exports = router;