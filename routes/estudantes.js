var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/exercicios', function (req, res, next) {
    res.send('exercicios');
});


router.get('/provas', function (req, res, next) {
    res.send('provas');
});


router.get('/notas', function (req, res, next) {
    res.send('notas');
});


module.exports = router;