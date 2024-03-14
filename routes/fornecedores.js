var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na página de fornecedores');
});

/* GET users listing. */
router.get('/produtos', function(req, res, next) {
  res.send('voce esta na página de produtos');
});

/* GET users listing. */
router.get('/promocoes', function(req, res, next) {
  res.send('voce esta na página de promocoes');
});

/* GET users listing. */
router.get('/listagens', function(req, res, next) {
  res.send('voce esta na página de listagens');
});

module.exports = router;