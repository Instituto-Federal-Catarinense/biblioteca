var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Área de Esportes!');
});

router.get('/futebol', function(req, res, next) {
    res.send('É Goooooooooool');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('Andou na prancha, cuidado o tubarão vai te pegar');
  });

  router.get('/volei', function(req, res, next) {
    res.send('N deixa a bola cair');
  });
  
module.exports = router;