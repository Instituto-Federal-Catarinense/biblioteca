var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de estudantes');
});

router.get('/futebol', function(req, res, next) {
    res.send('/aba do futebol');
  });

  router.get('/surf', function(req, res, next) {
    res.send('/aba surf');
  });

  router.get('/volei', function(req, res, next) {
    res.send('/aba volei');
  });

module.exports = router;