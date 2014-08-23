var async = require("async");

//This is not synchronized
var fun1 = function(callback){
	setTimeout(function(){
		console.log("function1");
		if(callback) callback(null , "function1");
	}, 100);
}

var fun2 = function(callback){
	setTimeout(function(){
		console.log("function2");
		if(callback) callback(null , "function2");
	}, 50);
}

fun1();
fun2();
// end


//This is synchronized
//auto({tasks}, callbackFun) （多个函数有依赖关系，有的并行执行，有的依次执行）
async.auto({
		//并行执行
		createData: function(callback){
			setTimeout(function(){
				console.log("sync : function1");
				if(callback) callback(null , "function1 value");
			}, 1000);
		},
		//依次执行的处理
		findData: ['createData' , function(callback , value){
			setTimeout(function(){
				console.log("sync : function2");
				console.log("value:"+value['createData']);
				if(callback) callback(null , "sync : function1");
			}, 50);
		}]
	},
	function(err , value){
		console.log("err->"+err);
		console.log("value->"+value);
	}
);



//This send init param to function
async.every([1,2,3,6], function(item,callback){ 
    console.log('1.1 enter: ',item); 
    setTimeout(function(){ 
        console.log('1.1 handle: ',item); 
        callback(item<=10); 
    },100);    
}, function(result) { 
    console.log('1.1 result: ', result); 
});



//This send a obj to function
var arr = [{name:'Jack', delay:200}, {name:'Mike', delay: 100}, {name:'Freewind', delay:300}, {name:'Test', delay: 50}];
async.map(arr, function(item, callback) { 
    console.log('1.1 enter: ' + item.name); 
    setTimeout(function() { 
        console.log('1.1 handle: ' + item.name); 
        callback(null, item.name+'!!!'); 
    }, item.delay); 
}, function(err,results) { 
    console.log('1.1 err: ', err); 
    console.log('1.1 results: ', results); 
});

//This as while when return count1 < 3 is true, then use function(cb)
var count1 = 0;
async.whilst(
    function() { return count1 < 3 },
    function(cb) {
        console.log('1.1 count: ', count1);
        count1++;
        setTimeout(cb, 2000);
    },
    function(err) {
        // 6s have passed
        console.log('1.1 err: ', err);
    }
);