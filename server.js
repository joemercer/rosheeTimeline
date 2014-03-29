// require() is node's way of loading modules. 
var express = require('express');

// set up express
var app = express();



// this handles requests for static content 
// as organized in the file structure
app.use(express.static(__dirname + '/public'));




app.listen(8080, function() {
	console.log('Server running on port 8080...');
});