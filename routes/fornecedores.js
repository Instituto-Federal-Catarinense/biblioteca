var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('respond with a resource');
});

router.get('Produtos', function(req, res, next) {
res.send('Produtos');
});

router.get('Promocoes', function(req, res, next) {
res.send('Promocoes');
});

router.get('Listagem', function(req, res, next) {
res.send('Listagem');
});

module.exports = router;
