var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');

var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser({defer:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

app.route('/upload').get(function (req, res, next){
    res.render('index', { title: 'Express' });
});

app.route('/upload').post(function (req, res, next) {

  var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = "./files";       //set upload directory
    form.keepExtensions = true;     //keep file extension

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived->");
        console.log("size:%d byte",files.file.size);
        console.log("fileName:" , files.file.name);
        console.log("filePath:" , files.file.path);
        console.log("type:" , files.file.type);
        console.log("lastModifiedDate:" , files.file.lastModifiedDate);
        //TESTING
        // console.log("file size: "+JSON.stringify(files.fileUploaded.size));
        // console.log("file path: "+JSON.stringify(files.fileUploaded.path));
        // console.log("file name: "+JSON.stringify(files.fileUploaded.name));
        // console.log("file type: "+JSON.stringify(files.fileUploaded.type));
        // console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));

        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
        // fs.rename(files.fileUploaded.path, './files/'+files.fileUploaded.name, function(err) {
        //     if (err) throw err;
        //     console.log('renamed complete');  
        // });
        res.end();
    });
});

var server = app.listen(3030, function() {
console.log('Listening on port %d', server.address().port);
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
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


module.exports = app;
