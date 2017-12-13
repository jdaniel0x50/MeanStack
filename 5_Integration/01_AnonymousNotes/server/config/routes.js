var notesCtrl = require('../controller/notes.js');

module.exports = function (app) {
    app.get('/mongoNotes', function (req, res) {
        console.log("HERE IN MongoNotes!");
        notesCtrl.getAll(req, res);
    });
    app.post('/mongoNotes', function (req, res) {
        notesCtrl.postNote(req, res);
    });
    app.all("*", (request, response) => { 
        res.sendFile(path.resolve("./AnonymousNotes/dist/index.html")) 
    });

}