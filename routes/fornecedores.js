var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/produtos', function(req, res, next) {
    res.send('Vocẽ está na página produtos');
  });
  
  router.get('/promoções', function(req, res, next) {
    res.send(' Aqui tem promoções');
  });

  router.get('/listagem', function(req, res, next) {
    res.send('Segue a listagem do sistema');
  });

module.exports = router;
