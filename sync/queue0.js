var async = require("async");

//定义一个queue，其worker数量为2，并在任务执行时，记录一下日志：
var q = async.queue(function(task, callback) {
    console.log('worker is processing task: ', task.name);
    task.run(callback);
}, 2);

//worker数量将用完时，会调用saturated函数
q.saturated = function() {
    console.log('all workers to be used');
}

//当最后一个任务交给worker执行时，会调用empty函数
q.empty = function() {
    console.log('no more tasks wating');
}

//当所有任务都执行完时，会调用drain函数
q.drain = function() {
    console.log('all tasks have been processed');
}

//The push is same as queue task <-> {name:'' , run: function} , callback <-> function(err)
//This is send a event funtion to queue. This event is sync.
q.push([{name:'t1', run: function(callback){
    console.log('t1 is running, waiting tasks: ', q.length());
    setTimeout(callback('t1 executed'), 400);
    //t.fire('t1', cb, 400); // 400ms后执行
}} , 
{name:'t2' , run: function(callback){
	console.log('t2 is running, waiting tasks: ', q.length());
	setTimeout(callback('t2 executed'), 100);
}}, 
{name:'t3' , run: function(callback){
	console.log('t3 is running, waiting tasks: ', q.length());
	setTimeout(callback('t3 executed'), 50);
}}
], function(value) {
    console.log(value);
});