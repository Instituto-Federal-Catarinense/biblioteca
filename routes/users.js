var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta nja página de usuários');
});

module.exports = router;
