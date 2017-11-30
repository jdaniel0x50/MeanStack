var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function (req, res) {
    res.render("index");
})
app.get('/survey', function (req, res) {
    res.render("survey");
})


// tell the express app to listen on port 8000
var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on("form_submit", function (data) {
        console.log('Someone clicked a button!');
        var string_const = "You have submitted the following information to the server: ";
        string_const += "<br>Name: " + data.name;
        string_const += ",<br>Location: " + data.location;
        string_const += ",<br>Language: " + data.language;
        string_const += ",<br>Comment: " + data.comment;
        console.log(string_const);
        socket.emit('updated_message', { response: string_const });
        console.log("completed first emit");
        var rand = Math.floor(Math.random() * 1000) + 1;
        socket.emit('random_number', { random_num: rand });
    })
    // io.sockets.on('connection', function (socket) {
    //     //  EMIT:
    //     socket.emit('my_emit_event');
    //     //  BROADCAST:
    //     socket.broadcast.emit("my_broadcast_event");
    //     //  FULL BROADCAST:
    //     io.emit("my_full_broadcast_event");
    // })
})