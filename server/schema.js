const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// mongoose.connect('mongodb://admin:admin@ds161713.mlab.com:61713/swe-project');

var UserSchema = new mongoose.Schema({
	email: {
		type: String, 
		unique: true,
		required: true,
		trim: true
	}, 
	username: {
		type: String, 
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String, 
		required: true,
	},
	passwordConf: {
		type: String, 
		required: true
	}
});

UserSchema.pre('save', (next) => {
	var user = this;
	console.log(this);
	console.log("lmao: " + this.password);
		bcrypt.hash(user.password, 10, function(err, hash) {
			if(err) {
				return next(err);
			}
			user.password = hash;
			next();
		});

	
});

// module.exports.addUser = function(newUser, callback) {
// 	bcrypt.genSalt(10, (err, salt) => {
// 		bcrypt.hash(newUser.password, salt, function(err, hash) {
// 			if(err) {
// 				return next(err);
// 			}
// 			newUser.password = hash;
// 			next();
// 		});

// 	});
// } 

var User = mongoose.model('User', UserSchema);
module.exports = User;