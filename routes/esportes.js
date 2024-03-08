var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/futebol', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/surfe', function(req, res, next) {
    res.send('provas');
  });
  router.get('/volei', function(req, res, next) {
    res.send('notas');
  });

  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
