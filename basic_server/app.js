var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello, Jon!</h1>");
  res.end();
}).listen(3000);

console.log("Server Running on localhost:3000");