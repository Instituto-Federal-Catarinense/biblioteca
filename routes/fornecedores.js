var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('pag 1');
  });

  router.get('/produtos', function(req, res, next) {
    res.send('pag 2');
  });

  router.get('/promocoes', function(req, res, next) {
    res.send('pag 3');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('pag 4');
  });
  
module.exports = router;
