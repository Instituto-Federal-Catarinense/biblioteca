var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui está as coisas');
});

router.get('/coisinha', function(req, res, next) {
    res.send('Aqui está as coisinhas');
  });

  router.get('/muitacoisa', function(req, res, next) {
    res.send('Aqui está muita coisa');
  });

  
  

module.exports = router;
