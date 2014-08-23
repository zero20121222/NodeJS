//Analyze对象的构造器
var Analyze = function(){};

Analyze.prototype.parse = function(text){
	var results = {};

	var lines = text.split('\n');

	lines.forEach(function(line){
		var parts = line.split(' ');
		var letter = parts[1];

		var count = parseInt(parts[2]);

		if(!results[letter]){
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	return results;
};

//该程序中最重要的部分是“module.exports = Parser;”这一行代码。它告诉Node从该文件中要输出的内容。在该例中，我输出了构造函数，用户可以用Parser对象来创建实例。
module.exports = Analyze;