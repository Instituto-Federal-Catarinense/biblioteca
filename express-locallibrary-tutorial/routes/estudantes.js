var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('vocẽ esta na raiz dos estudantes');
});

router.get('/exercicios', function(req, res, next) {
    res.send('sim');
  });
  
  router.get('/provas', function(req, res, next) {
    res.send('matematica');
  });
  
  router.get('/notas', function(req, res, next) {
    res.send('10');
  });

  module.exports = router;