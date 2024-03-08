var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('esporte');
});

router.get('/futebol', function(req, res, next) {
    res.send('golll');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('onda');
  });

  router.get('/volei', function(req, res, next) {
    res.send('ponto');
  });
module.exports = router;
