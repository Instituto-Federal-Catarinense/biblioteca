var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/produtos', function(req, res, next) {
    res.render('esse é produtos', { title: 'Express' });
  });

  router.get('/clientes', function(req, res, next) {
    res.render('esse é clientes', { title: 'Express' });
  });

  router.get('/tecnoligia', function(req, res, next) {
    res.render('esse é tecnologia', { title: 'Express' });
  });

module.exports = router;
