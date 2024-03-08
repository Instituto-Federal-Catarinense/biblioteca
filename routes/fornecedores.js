var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Você está na raiz de fornecedores');
});

router.get('/produtos', function(req, res, next) {
    res.send('respond with a resource');
});

  router.get('/clientes', function(req, res, next) {
    res.send('respond with a resource');
});

  router.get('/tecnoligia', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
