var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

console.log(numCPUs);