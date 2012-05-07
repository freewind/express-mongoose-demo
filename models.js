var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Define User schema
var _User = new Schema({
	email : String,
	name : String,
	salt : String,
	password : String
});

// export them
exports.User = mongoose.model('User', _User);
