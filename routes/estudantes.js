var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Bem-vindos Estudantes!');
});

router.get('/exercicios', function(req, res, next) {
    res.send('Faça seus exercícios, vagabundo!');
  });

  router.get('/provas', function(req, res, next) {
    res.send('Veja suas provas e se deprima na aba notas');
  });

  router.get('/notas', function(req, res, next) {
    res.send('Confira suas notas aqui! Tudo abaixo da média :D ');
  });
  
module.exports = router;
