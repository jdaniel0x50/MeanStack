var mongoose = require('mongoose'),
    Note = mongoose.model('Note');

mongoose.Promise = global.Promise;

function createError(_path, _message) {
    var errors = [];
    var err = {
        path: _path,
        message: _message
    }
    errors.push(err);
    return errors;
}

module.exports = {
    getAll: function (req, res) {
        var notes = Note.find({}).sort('-createdAt').exec(function (err, notes) {
            if (err) {
                console.log(err);
                return null;
            }
            return res.json(notes);
        });
    },

    postNote: function (req, res) {
        var note = new Note({
            noteText: req.body.noteText
        });
        console.log(note);
        note.save(function (err, result) {
            if (err) {
                console.log("There were errors in the submission");
                console.log(err);
                return err;
            }
            else {
                // db save was successful
                console.log("successfully added a document!");
                return res.json(result);
            }
        });
    }
}