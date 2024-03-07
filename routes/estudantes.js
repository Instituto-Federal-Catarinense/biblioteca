var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de estudantes');
});

router.get('/exercicios', function(req, res, next) {
    res.send('/Exercícios');
  });

  router.get('/provas', function(req, res, next) {
    res.send('/Provas');
  });

  router.get('/notas', function(req, res, next) {
    res.send('/Notas');
  });

module.exports = router;