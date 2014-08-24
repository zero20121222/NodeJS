var express = require('express');
var router = express.Router();

/* GET home page. 
 * GET 请求数据的获取使用req.query ｜ req.param
 */
router.get('/', function(req, res) {
  var userName = req.query.userName;
  var pwd = req.query.pwd;

  var userName2 = req.param('userName');
  var pwd2 = req.param('pwd');

  console.log('req.query:userName' , userName);
  console.log('req.query:pwd' , pwd);

  console.log('req.param:userName' , userName2);
  console.log('req.param:pwd' , pwd2);

  res.render('subform', { title: '提交表单接收参数测试!'});
});

/* Post home page. 
 * POST 请求数据的获取使用req.body | req.param
 */
router.post('/', function(req, res) {
  //post 请求无法用req.query获取数据
  //可以用req.body来获取数据
  var userName = req.body.userName;
  var pwd = req.body.pwd;

  var userName2 = req.param('userName');
  var pwd2 = req.param('pwd');

  console.log('req.query:userName' , userName);
  console.log('req.query:pwd' , pwd);

  console.log('req.param:userName' , userName2);
  console.log('req.param:pwd' , pwd2);

  res.render('subform', { title: '提交表单接收参数测试!'});
});

module.exports = router;