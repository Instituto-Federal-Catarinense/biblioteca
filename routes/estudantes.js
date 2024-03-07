var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('pagina do estudante');
});

router.get('/exercicios', function(req, res, next) {
  res.send('pagina de exercicios')
})

router.get('/provas', function(req, res, next) {
    res.send('pagina de provas')
  })

  router.get('/notas', function(req, res, next) {
    res.send('pagina de notas')
  })
module.exports = router;
