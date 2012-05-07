var express = require("express");
var mongoose = require('mongoose');
require('express-mongoose');

var models = require('./models');

var User = models.User;

mongoose.connect('mongodb://localhost/express-mongoose-demo');

var app = express.createServer();

// test express' router
app.get('/', function(req, res) {
	res.send('Hello, world');
});

// init data. Use "get" to simplify
app.get('/init', function(req, res) {
	var user = new User({
		email : 'nowind_lee@qq.com',
		name : 'Freewind'
	});
	user.save();
	res.send('Data inited');
});

app.get('/users', function(req, res) {
	res.send(User.find());
});

app.listen(3000);
