var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/exercicios', function(req, res, next) {
  res.send('Muitos');
});

router.get('/provas', function(req, res, next) {
    res.send('POrtugues');
  });

router.get('/notas', function(req, res, next) {
    res.send('10 , 10 , 10 , 10, 10');
  });
  

module.exports = router;
