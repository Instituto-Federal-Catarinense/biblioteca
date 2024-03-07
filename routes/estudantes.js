var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(' Esta é a página de estudantes! ');
  });

  /* GET users listing. */
router.get('/exercicios', function(req, res, next) {
    res.send(' Esta é a pasta de exercícios! ');
  });

  /* GET users listing. */
router.get('/provas', function(req, res, next) {
    res.send(' Estas são as suas provas! ');
  });

  /* GET users listing. */
router.get('/notas', function(req, res, next) {
    res.send(' Esta é a aba de notas! ');
  });
module.exports = router;