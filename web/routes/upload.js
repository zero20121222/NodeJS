var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. 
 * GET 请求数据的获取使用req.query ｜ req.param
 */
router.get('/', function(req, res) {
  res.render('uploadFile', { title: '文件上传测试!'});
});

/* Post home page. 
 * POST 请求数据的获取使用req.body | req.param
 */
router.post('/', function(req, res) {
  console.log(req.files);
  if(req.files && req.files.codecsv != 'undifined'){
      var temp_path = req.files.codecsv.path;

      if(temp_path){
          fs.readFile(temp_path , 'utf-8', function(err , content){
              console.log('content' , content);
              fs.unlink(temp_path);
          });
      }
  }

  res.render('uploadFile', { title: 'fileUploadTest!'});
});

module.exports = router;