var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// I listen on the connection event for incoming sockets. 
/* 'connection' is caled like a constructor when a io boject, 
    has been initializated -> io() */
io.on('connection', function(socket){
  //console.log('a user connected');
    socket.on('chat message', function(msg){
       console.log('message: ' + msg);
        io.emit('chat message', msg);
        io.emit('segundo');
        
    });

    socket.on('alertar', function(){
      console.log("Esta es una alerta");
    });
  //When a user disconnect
    /*socket.on('disconnect', function(){
        console.log('user disconnected');
    });*/
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

//io.on eventos naturales
//socket.on eventos emitidos manualmente