// import { ObjectID } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Mongoose MongoDb connection
mongoose.connect('mongodb://localhost/HedgehogDashboard');
var HedgehogSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    color: { type: String, required: true, minlength: 2 },
    age: { type: Number, required: true, min: 0, max: 25 }
});
mongoose.model('Hedgehog', HedgehogSchema);
var Hedgehog = mongoose.model('Hedgehog');

// Routes
app.get('/', function (req, res) {
    Hedgehog.find({}, function(err, hedgehogs) {
        if (err) {
            res.render('index');
        }
        else {
            res.render('index', {hedgehogs: hedgehogs});
        }
    });
});
app.get('/hedgehog/new', function(req, res) {
    console.log("HERE");
    res.render('addHedgehog');
});
app.post('/hedgehog/create', function(req, res) {
    console.log("POST DATA", req.body);
    var hedgehog = new Hedgehog({ name: req.body.name, color: req.body.color, age: req.body.age });
    hedgehog.save(function(err) {
        if (err) {
            console.log("There were errors in the submission");
            console.log(err);
            console.log(hedgehog.errors);
            res.render('addHedgehog', { errors: hedgehog.errors });
        }
        else {
            console.log("successfully added a document!");
            res.redirect('/');
        }
    });
});
app.get('/hedgehog/:id', function(req, res) {
    Hedgehog.findById(req.params.id, function (err, hedgehog) {
        console.log(hedgehog);
        res.render('viewHedgehog', { hedgehog: hedgehog });
    })
});
app.get('/hedgehog/:id/edit', function(req, res) {
    Hedgehog.findById(req.params.id, function (err, hedgehog) {
        console.log(hedgehog);
        res.render('editHedgehog', { hedgehog: hedgehog });
    })
});
app.post('/hedgehog/:id/update', function(req, res) {
    console.log("POST DATA", req.body);
    Hedgehog.findByIdAndUpdate(req.params.id, {
        name: req.body.name, 
        color: req.body.color, 
        age: req.body.age
    }, function(err, hedgehog){
        if (err) {
            console.log("There were errors in the submission");
            console.log(err);
            console.log(hedgehog.errors);
            res.render('editHedgehog', { errors: hedgehog.errors });
        }
        else {
            console.log("successfully updated document!");
            res.redirect('/hedgehog/' + req.params.id);
        }
    });
});
app.get('/hedgehog/:id/destroy', function(req, res) {
    Hedgehog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            console.log("There were errors in the removal");
            console.log(err);
            res.render('/', {errors: err});
        }
        else {
            console.log("successfully removed document!");
            res.redirect('/');
        }
    })
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
