const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var User = require('./schema');
// console.log(schema.User);
const bodyParser = require('body-parser');
mongoose.connect('mongodb://admin:admin@ds161713.mlab.com:61713/swe-project');

var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/login', (req, res, next) => {
console.log('here');
console.log(req.body);
console.log(req.body.email);
console.log(req.body.username);
console.log(req.body.password);
console.log(req.body.passwordConf);
	if (req.body.email &&
	  req.body.username &&
	  req.body.password &&
	  req.body.passwordConf) {

	  var userData = {
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
	    passwordConf: req.body.passwordConf,
	  }

	  console.log("out");
	  //use schema.create to insert data into the db

	  User.create(userData, function (err, user) {
	  	console.log("in");
	    if (err) {
	    	console.log("lmao");
	      return "lmao";
	    } else {
	    	console.log("right");
	      return "rip";
	    }
	  });
	}
});



app.listen(app.get('port'), () => {
	console.log("App listening on " + app.get('port'));
});
