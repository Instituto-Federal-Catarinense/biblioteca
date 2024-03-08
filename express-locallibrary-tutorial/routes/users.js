var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Você prefere pau ou pika? Eu prefiro pica-pau');
});

module.exports = router;
