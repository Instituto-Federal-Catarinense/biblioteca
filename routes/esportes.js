var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/futebol', function (req, res, next) {
    res.send('futebol');
});


router.get('/surfe', function (req, res, next) {
    res.send('surfe');
});


router.get('/volei', function (req, res, next) {
    res.send('volei');
});


module.exports = router;