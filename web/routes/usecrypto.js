var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('usecrypto', { title: '加密字符串测试!'});
});

/* POST */
router.post('/' , function(req , res){
  var userName = req.body.userName;
  var pwd = req.body.pwd;

  //生成口令的散列值
  var md5 = crypto.createHash('md5');

  //update(data, [input_encoding])方法，可以通过指定的input_encoding和传入的data数据更新hash对象，
  //input_encoding为可选参数，没有传入则作为buffer处理 （input_encoding可为'utf-8'、'ascii'等）
  //digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，
  //不传则返回buffer (encoding可为 'hex'、'base64'等)；当调用digest方法后hash对象将不可用；
  var en_pwd = md5.update(pwd).digest('hex');

  console.log('加密后的密码:'+en_pwd);
  res.render('usecrypto', { title: '加密字符串测试!'});
});

module.exports = router;