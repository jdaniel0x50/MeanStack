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
mongoose.connect('mongodb://localhost/QuotingDojo');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 5},
});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// Routes
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
app.post('/quote', function (req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function (err) {
        if (err) {
            console.log("There were errors in the submission");
            console.log(err);
            console.log(quote.errors);
            res.render('index', {errors: quote.errors});
        }
        else {
            console.log("successfully added a quote!");
            res.redirect('/quotes/view');
        }
    });
})
app.get('/quotes/view', function (req, res) {
    Quote.find({}, function(err, quotes) {
        console.log(quotes);
        res.render('quotes', {quotes: quotes});
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
