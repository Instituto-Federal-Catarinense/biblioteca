var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('respond with a resource');
});

router.get('produtos', function(req, res, next) {
res.send('Produtos');
});

router.get('promocoes', function(req, res, next) {
res.send('Promocoes');
});

router.get('listagem', function(req, res, next) {
res.send('Listagem');
});

module.exports = router;