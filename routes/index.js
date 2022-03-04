var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.query.op == undefined || req.query.num1 == '' || req.query.num2 == '') {
    res.render('index', { response: '' });
  } else {
    let result = null;
    if (req.query.op == 'add') {
      result = parseFloat(req.query.num1) + parseFloat(req.query.num2);
    }
    if (req.query.op == 'sub') {
      result = parseFloat(req.query.num1) - parseFloat(req.query.num2);
    }
    if (req.query.op == 'mul') {
      result = parseFloat(req.query.num1) * parseFloat(req.query.num2);
    }
    if (req.query.op == 'div') {
      result = parseFloat(req.query.num1) / parseFloat(req.query.num2);
    }
    res.render('index', { response: result.toPrecision(10), num1: req.query.num1, num2: req.query.num2 });
  }
});

module.exports = router;
