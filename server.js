'use strict';
//public libraries
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 8500;
var app = express();
//main config
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));

//private methods/interest_rate
var randomNum = function(){
   	var num = +((Math.random()*19+1).toFixed(2));
	return num;
};


//endpoints 
app.get('/interest_rate', function(req, res){
	var x = randomNum();
	res.status(200).end(JSON.stringify(x));
});

//instantiate server 
app.listen(port, function(){
	console.log("Server listening on port: " + port);
});
