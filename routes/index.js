var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Uses the index template
  res.render('index', { title: 'Express', className: 'CST438'});
});

module.exports = router;