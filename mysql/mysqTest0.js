// Bad way to connect mysql.
// var Client = require('mysql').Client;

// var client = new Client();

// var DATA_BASE = 'snz';

// client.host = '127.0.0.1';

// client.user = 'root';

// client.password = 'anywhere';

// client.connect();

// client.query('use '+DATA_BASE);
// var query = client.query(
// 	'select * from snz_users;'
// );

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'anywhere'
});

connection.connect();

connection.query('use snz');
connection.query('select * from snz_users;', function(err, rows, fields) {
  if (err) throw err;
  
  rows.forEach(function(row) {
	console.log('The solution is: ', row);
  });
});

connection.end();