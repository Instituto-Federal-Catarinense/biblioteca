var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('pagina de esportes');
});

router.get('/futebol', function(req, res, next) {
  res.send('pagina sobre futebol')
})

router.get('/surfe', function(req, res, next) {
    res.send('pagina sobre volei')
  })

  router.get('/volei', function(req, res, next) {
    res.send('pagina sobre volei')
  })
module.exports = router;
