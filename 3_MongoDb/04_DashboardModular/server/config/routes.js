var mongoose = require('mongoose');
var dashboard = require('../controllers/dashboard.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        dashboard.showAll(req, res);
    });
    app.get('/hedgehog/new', function (req, res) {
        res.render('addHedgehog');
    });
    app.post('/hedgehog/create', function (req, res) {
        dashboard.newHedgehog(req, res);
    });
    app.get('/hedgehog/:id', function (req, res) {
        dashboard.viewHedgehog(req, res);
    });
    app.get('/hedgehog/:id/edit', function (req, res) {
        dashboard.editHedgehog(req, res);
    });
    app.post('/hedgehog/:id/update', function (req, res) {
        dashboard.updateHedgehog(req, res);
    });
    app.get('/hedgehog/:id/destroy', function (req, res) {
        dashboard.destroyHedgehog(req, res);
    });
}