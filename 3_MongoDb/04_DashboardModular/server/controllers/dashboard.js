var mongoose = require('mongoose');
var Hedgehog = mongoose.model('Hedgehog');
module.exports = {
    showAll: function(req, res) {
        Hedgehog.find({}, function (err, hedgehogs) {
            if (err) {
                res.render('index');
            }
            else {
                res.render('index', { hedgehogs: hedgehogs });
            }
        });
    },

    newHedgehog: function(req, res) {
        console.log("POST DATA", req.body);
        var hedgehog = new Hedgehog({ name: req.body.name, color: req.body.color, age: req.body.age });
        hedgehog.save(function (err) {
            if (err) {
                console.log("There were errors in the submission");
                res.render('addHedgehog', { errors: hedgehog.errors });
            }
            else {
                console.log("successfully added a document!");
                res.redirect('/');
            }
        });
    },

    viewHedgehog: function(req, res) {
        Hedgehog.findById(req.params.id, function (err, hedgehog) {
            console.log(hedgehog);
            res.render('viewHedgehog', { hedgehog: hedgehog });
        })
    },

    editHedgehog: function(req, res) {
        Hedgehog.findById(req.params.id, function (err, hedgehog) {
            console.log(hedgehog);
            res.render('editHedgehog', { hedgehog: hedgehog });
        })
    },

    updateHedgehog: function(req, res) {
        Hedgehog.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            color: req.body.color,
            age: req.body.age
        }, function (err, hedgehog) {
            if (err) {
                console.log("There were errors in the submission");
                res.render('editHedgehog', { errors: hedgehog.errors });
            }
            else {
                console.log("successfully updated document!");
                res.redirect('/hedgehog/' + req.params.id);
            }
        });
    },

    destroyHedgehog: function(req, res) {
        Hedgehog.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                console.log("There were errors in the removal");
                res.render('/', { errors: err });
            }
            else {
                console.log("successfully removed document!");
                res.redirect('/');
            }
        })
    }
}