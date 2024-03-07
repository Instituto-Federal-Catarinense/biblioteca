var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/produtos', function(req, res, next) {
    res.send('aqui está os produtos!');
});

router.get('/promocoes', function(req, res, next) {
    res.send('aqui está as promoções!');
});

router.get('/listagem', function(req, res, next) {
    res.send('aqui está a listagem!');
});


module.exports = router;