var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na página de produtos');
});


/* GET users listing. */
router.get('/promocoes', function(req, res, next) {
    res.send('voce esta na página de promocoes');
  });


  
module.exports = router;