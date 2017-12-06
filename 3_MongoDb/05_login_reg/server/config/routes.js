var mongoose = require('mongoose');
var loginreg = require('../controllers/loginreg.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.post('/login', function (req, res) {
        loginreg.login(req, res);
    });
    app.post('/register', function (req, res) {
        loginreg.register(req, res);
    });
    app.get('/logout', function (req, res) {
        loginreg.logout(req, res);
    });
    app.get('/success', function (req, res) {
        loginreg.success(req, res);
    });
}