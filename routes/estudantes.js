var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/exercicios', function(req, res, next) {
    res.send('respond with a resource');
 });

  router.get('/provas', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/notas', function(req, res, next) {
    res.send('respond with a resource');
  });
  
    
module.exports = router;
