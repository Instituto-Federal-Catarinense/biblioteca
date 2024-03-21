var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de estudantes');
});

/* GET users listing. */
router.get('/exercicios', function(req, res, next) {
  res.send('pagina de exercicios');
});

router.get('/notas', function(req, res, next) {
    res.send('pagina de notas');
  });

  router.get('/provas', function(req, res, next) {
    res.send('pagina de provas');
  });
module.exports = router;