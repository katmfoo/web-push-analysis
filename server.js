var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client.html');
});

app.use('/node_modules', express.static(__dirname + '/node_modules/'));

io.on('connection', function(socket) {

  socket.on('request', function() {
    socket.emit('response');
  });

});

http.listen(3000, function() {
  console.log('listening on *:3000');
});