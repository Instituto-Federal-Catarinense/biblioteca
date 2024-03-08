var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Aqui irão ter todas seções da biblioteca.")
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.send(`Informação da seção: ${id}`)
});

router.get('/:id/livros', function(req, res, next) {
    const id = req.params.id;
    res.send(`Todos os livros da seção ${id}: <br><ul><li>1- Pequeno Principes</li><br><li>2-Jantar Secreto</li>`)
});

module.exports = router;
