var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Você prefere pau ou pika? Eu prefiro pica-pau');
});

router.get('/bulbasaur', function(req, res, next) {
    res.send('Bulbasaur é o primeiro pokémon registrado em todas as pokedex, ele é considerado como um inicial da 1º Geração, na Região de Kanto. Ele possue as tipagens Planta e Venenoso.');
  });

module.exports = router;
