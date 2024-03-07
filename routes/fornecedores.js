var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('e us guri');
});

/* GET users listing. */
router.get('/produtos', function(req, res, next) {
  res.send('e us guri');
});


/* GET users listing. */
router.get('/promocoes', function(req, res, next) {
  res.send('cr7');
});


/* GET users listing. */
router.get('/listagem', function(req, res, next) {
  res.send('neymar');
});

module.exports = router;