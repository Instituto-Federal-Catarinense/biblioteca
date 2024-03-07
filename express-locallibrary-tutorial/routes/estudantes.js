var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('vocẽ esta na raiz dos estudantes');
});

router.get('/exercicios', function(req, res, next) {
    res.send('oiee');
  });
  
  router.get('/provas', function(req, res, next) {
    res.send('historia');
  });
  
  router.get('/notas', function(req, res, next) {
    res.send('8');
  });

  module.exports = router;