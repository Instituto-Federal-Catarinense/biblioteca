var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Resposta Aqui');
});

router.get('/futebol', function(req, res, next) {
  res.send('Jogo de Futebol 1x1');
});

router.get('/surfe', function(req, res, next) {
    res.send('Aquela onde está muito alta');
  });

router.get('/volei', function(req, res, next) {
    res.send('ele cortou a bola');
});
  

module.exports = router;
