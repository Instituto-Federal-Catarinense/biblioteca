var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Todos usúarios do sistema ');
});

router.get('/:id', function(req, res, next) {
  res.send('Usuário '+req.params.id);
});

module.exports = router;
