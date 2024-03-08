var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('esportes');
});

router.get('/futebol', function(req, res, next) {
  res.send('futebol');
});

router.get('/surfe', function(req, res, next) {
  res.send('surfe');
});

router.get('/volei', function(req, res, next) {
  res.send('volei');
});

module.exports = router;