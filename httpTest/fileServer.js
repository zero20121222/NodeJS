var express = require('express');

app = express();

app.use(express.static('./node_modules'));

app.listen(8989);

//open http://127.0.0.1:8989/express/History.md in chrome