var express = require("express"),
    app     = express(),
    io = require('socket.io')

var emitter = {}



var config = require('config')(app, emitter),
    router = require('router')(app, emitter);

var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
  console.log(this.address());
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var ioServSocket = io(server).sockets;

ioServSocket.on('connection', function(socket) {
  console.log('user Connected');
});

emitter.emit = function(message, data) {
  ioServSocket.emit(message, data);
};
