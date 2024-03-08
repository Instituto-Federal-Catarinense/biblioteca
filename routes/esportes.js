var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(' Esta é a página inicial de esportes! ');
  });

  /* GET users listing. */
router.get('/futebol', function(req, res, next) {
    res.send(' Esta é a página inicial de futebol! ');
  });

  /* GET users listing. */
router.get('/surfe', function(req, res, next) {
    res.send(' Esta é a página inicial de surfe! ');
  });

  /* GET users listing. */
router.get('/volei', function(req, res, next) {
    res.send(' Esta é a página inicial de volei! ');
  });
module.exports = router;
