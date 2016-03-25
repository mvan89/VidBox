var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(9000, function() {
  console.log('local host 9000');
});