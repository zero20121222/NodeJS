var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //清除cookie信息	
  res.clearCookie("islogin");

  //清除session信息
  req.session.destroy();

  res.render('usesession', { title: '清除session&cookie测试!'});
});

module.exports = router;