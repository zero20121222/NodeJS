var redis = require("redis"),
	client = redis.createClient(1111 , "127.0.0.1");

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);

client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});

client.set("my_key" , "Zero" , function(err , reply){
	console.log(reply.toString());
});

client.get("my_key" , function(err , reply){
	console.log(reply.toString());
});