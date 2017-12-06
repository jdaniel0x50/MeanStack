var mongoose = require('mongoose');
var HedgehogSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    color: { type: String, required: true, minlength: 2 },
    age: { type: Number, required: true, min: 0, max: 25 }
});
mongoose.model('Hedgehog', HedgehogSchema);
var Hedgehog = mongoose.model('Hedgehog');
