var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Mongoose MongoDb connection
mongoose.connect('mongodb://localhost/my_first_db');
var UserSchema = new mongoose.Schema({
    name: String,
    location: String,
    age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

// Routes
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, location: req.body.location, age: req.body.age});
    user.save(function(err) {
        if(err) {
            console.log("something went wrong");
        }
        else {
            console.log("successfully added a user!");
        }
    });
    res.redirect('/');
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
