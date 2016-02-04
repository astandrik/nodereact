var express = require("express"),
    app     = express(),
    io = require('socket.io')

var emitter = {}



var config = require('config')(app, emitter),
    router = require('router')(app, emitter);

var port = process.env.PORT || 8080;
var server = app.listen(port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

io(server).sockets.on('connection', function(socket) {
  emitter.emit = function(message, data) {
    socket.emit(message, data);
  };
});
console.log('http://127.0.0.1:' + port);
