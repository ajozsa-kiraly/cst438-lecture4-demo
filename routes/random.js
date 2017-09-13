var express = require('express');
var router = express.Router();

var random = Math.floor((Math.random() * 10));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('random', { randomNumber: random });
});

module.exports = router;
