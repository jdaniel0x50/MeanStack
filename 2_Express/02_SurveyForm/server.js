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
    res.render("index");
})
app.get('/survey', function (req, res) {
    res.render("survey");
})
app.post('/survey/process', function (req, res) {
    console.log("POST DATA", req.body);
    req.session.formdata = req.body;
    res.redirect('/success');
})
app.get('/success', function (req, res) {
    var form = req.session.formdata;
    req.session.destroy();
    res.render("success", {form: form});
})

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
