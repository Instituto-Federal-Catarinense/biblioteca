var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/verificacao', function(req, res, next) {
    res.send('algo deu certo');
  });

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.send('data dos produtos');
});

/* GET users listing. */
router.get('/listas', function(req, res, next) {
    res.send('listas de produtos aqui');
  });

module.exports = router;