var EventEmitter = require('events').EventEmitter;

var eve = new EventEmitter();

// This is a EventEmitter(creating a listen for event)
// new EventEmitter().on(eventName , arg1...)
eve.on('some_events' , function(foo , bar){
	console.log("this is the first listen for event, param foo=" + foo + ",bar=" + bar);
});

console.log('first');
// This is to emit event to listen queue
eve.emit('some_events' , '1', 'Michael');

console.log('second');
console.log(eve.emit('some_events' , '2', 'zero'));

console.log(eve.emit('other_events'));


// EventEmitter.once(eventName , listener)
var eve1 = new EventEmitter();
eve1.once('one_event' , function(param){
	console.log('this is the once listen , param='+param);
});

console.log('first');
eve1.emit('one_event' , 'Zero');

console.log('second');
console.log(eve1.emit('one_event' , 'Zero'));


// EventEmitter.removeListener(eventName , listener);
var listen0 = function(param){
	console.log('listenParam' , param);
}
eve.on('some_events' , listen0);
console.log(eve.emit('some_events' , 'Hello'));

eve.removeListener('some_events' , listen0);

// EventEmitter.removeAllListeners(eventName);

// EventEmitter.setMaxListeners(n);

