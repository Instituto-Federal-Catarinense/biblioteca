var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de esportes');
});

/* GET users listing. */
router.get('/futebol', function(req, res, next) {
  res.send('pagina de futebol');
});

router.get('/surfe', function(req, res, next) {
    res.send('pagina de surfe');
  });

  router.get('/volei', function(req, res, next) {
    res.send('pagina de volei');
  });
module.exports = router;