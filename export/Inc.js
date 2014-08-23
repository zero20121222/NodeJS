var outValue = 0;

var incRement = 1;

function setOutputVal (val){
	outValue = val;
}

function setIncRement(incValue){
	incRement = incValue;
}

function printNextCount(){
	outValue += incRement;
	console.log(outValue);
}

function printOutValue(){
	console.log(outValue);
}

exports.setOutputVal = setOutputVal;
exports.setIncRement = setIncRement;

module.exports.printNextCount = printNextCount;

console.log(module.id);
console.log(module.filename);
console.log(module.loaded);
console.log(module.parent);
console.log(module.children);