var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'mysecretkey' }))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function (req, res) {
    if (req.session && !req.session.counter) {
        req.session.counter = 1;
    }
    res.render("index", {counter: req.session.counter});
})
app.get('/add/one', function (req, res) {
    req.session.counter += 1;
    res.redirect('/');
})
app.get('/add/two', function (req, res) {
    req.session.counter += 2;
    res.redirect('/');
})
app.get('/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
