var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.islogin){
  	console.log("usession:"+req.session.islogin);
  	res.locals.islogin = req.session.islogin;
  }

  res.render('usesession', { title: '使用session测试!'});
});

router.post('/', function(req, res) {
  req.session.islogin = 'success';
  res.locals.islogin = req.session.islogin;

  res.render('usesession', { title: '使用session测试!'});
});

module.exports = router;