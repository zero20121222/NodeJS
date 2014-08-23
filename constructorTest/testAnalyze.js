var Analyze = require('./analyze');

var fs = require('fs');

fs.readFile('../readTest/example_log.log' , function(err , logData){
	if(err) throw err;

	var text = logData.toString();

	//var analyze = new Analyze();

	console.log(new Analyze().parse(text));
});