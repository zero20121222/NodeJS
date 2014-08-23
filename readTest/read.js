var fs = require("fs");

fs.readFile("example_log.log", function(err , logData){
    if(err) throw err;

    var data = logData.toString();
    console.log(data);
});