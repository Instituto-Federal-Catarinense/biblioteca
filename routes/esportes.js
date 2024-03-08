var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Você está na aba inicial');
});

router.get('/futebol', function(req, res, next) {
  res.send('Você está na aba futebol');
});

router.get('/surfe', function(req, res, next) {
    res.send('Você está na aba surfe');
  });

router.get('/volei', function(req, res, next) {
    res.send('Você está na aba volei');
  });
  

module.exports = router;

