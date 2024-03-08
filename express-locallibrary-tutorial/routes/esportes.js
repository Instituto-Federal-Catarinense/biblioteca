var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('dia das mulheres');
});

router.get('/futebol', function(req, res, next) {
    res.send('lacre');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('feche');
  });

  router.get('/volei', function(req, res, next) {
    res.send('sambei');
  });
module.exports = router;