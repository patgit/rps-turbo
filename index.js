var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

var port = 5555;

app.listen(port);

console.log('\033c');
console.log('################');
console.log('## RPS-Server ##');
console.log('################');
console.log('\r');
console.log('# listen: http://localhost:' + port);
console.log('# status: running');
console.log('\r');
console.log('################');
console.log('\r');

function handler (req, res) {

	res.writeHead(204);	// no content
    // res.end('## RPS-Server ##');

  // fs.readFile(__dirname + '/index.html',
  // function (err, data) {
  //   if (err) {
  //     res.writeHead(500);
  //     return res.end('Error loading index.html');
  //   }

  //   res.writeHead(200);
  //   res.end(data);
  // });
}


io.on('connection', function (socket) {
  socket.emit('new user', { user: 'welcome user' });
  // socket.on('my other event', function (data) {
    console.log('# new connetion: ' + socket.id);
  // });
});