var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var NoteSchema = new Schema({
    noteText: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255,
        validate: {
            validator: function (value) {
                return /^([^'"]+)$/.test(value);
            },
            message: "Notes cannot contain quotes."
        },
        alias: "Note"
    },
}, { timestamps: true });

mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');