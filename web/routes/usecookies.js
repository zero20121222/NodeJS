var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.cookies.islogin){
  	console.log('usecookies-cookies:' + req.cookies.islogin);
  	req.session.islogin = req.cookies.islogin;
  }

  if(req.session.islogin){
  	console.log('usecookies:' + req.session.islogin);
  	console.log(res.locals);
  	res.locals.islogin = req.session.islogin;
  }

  res.render('usecookies', { title: '使用cookies测试!'});
});

router.post('/', function(req, res) {
  req.session.islogin = 'success';
  res.locals.islogin = req.session.islogin;

  //过期时间为60秒
  res.cookie('islogin' , 'success', {maxAge: 60000});

  res.render('usecookies', { title: '使用cookies测试!'});
});

module.exports = router;