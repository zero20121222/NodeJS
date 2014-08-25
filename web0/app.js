var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//Express 处理Post请求的中间件
var bodyParser = require('body-parser');
//Session 处理
var session = require('express-session');

// 设置路由规则
var routes = require('./routes/index');
var subform = require('./routes/subform');
var usesession = require('./routes/usesession');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');
var cleanCookie = require('./routes/clean');

var app = express();

// view engine setup
// _dirname是nodeJS中的全局变量，表示当前执行文件的路径
app.set('views', path.join(__dirname, 'views'));
// 设置使用的模版引擎 or app.engine('filenName--default:ejs' , require('ejs').remderFile);
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));

//通过bodyParse中间件分析application/x-www-form-unlencoded & application/json请求，并把变量保存到req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret : 'nodeSessionId'}));
app.use(express.static(path.join(__dirname, 'public')));

//写入路由
app.use('/', routes);
app.use('/subform', subform);
app.use('/usesession' , usesession);
app.use('/usecookies' , usecookies);
app.use('/usecrypto' , usecrypto);
app.use('/clean' , cleanCookie);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
// 如果是开发环境处理的error是会输出堆载信息
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// add listen for web
app.listen(8000 , function(){
    console.log("Server Start!");
    console.log('Server config-> \nport:%d\n env:%s', app.address().port, app.settings.env);
});

module.exports = app;
