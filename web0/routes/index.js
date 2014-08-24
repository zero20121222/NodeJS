var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render表示调用模版引擎解析名字未index的ejs模版
  res.render('index', { title: '<h3>Michael Express<h3>' ,
  	users:[{username: 'Michael'},
  		   {username: 'Zero'}
  		  ]
  });
});

module.exports = router;
