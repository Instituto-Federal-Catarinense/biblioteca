var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/futebol', function(req, res, next) {
  res.send('olha a bola');
});

router.get('/surfe', function(req, res, next) {
    res.send('olha a onda');
  });

router.get('/volei', function(req, res, next) {
    res.send('pior esporte possível');
  });
  

module.exports = router;
