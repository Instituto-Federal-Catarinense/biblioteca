var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de estudantes');
});

router.get('/produtos', function(req, res, next) {
  res.send('pagina de exercicio');
});

router.get('/promocoes', function(req, res, next) {
    res.send('pagina de notas');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('pagina de provas');
  });
module.exports = router;