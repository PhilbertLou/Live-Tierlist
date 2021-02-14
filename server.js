const express = require('express');
const cors = require('cors');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

//require routes here


app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use routes here

// leaving for production 
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('client/build'));
// }

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });
  
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg)
  });
});

//Listening on defined port
http.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });