var express = require('express'),
    session = require('express-session'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(session({ secret: 'my_secret_key' }))
app.use(express.static(path.join(__dirname, './AnonymousNotes/dist')));

// Mongoose MongoDb connection
require('./server/config/mongoose.js');
// Connect to Routes.js
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
