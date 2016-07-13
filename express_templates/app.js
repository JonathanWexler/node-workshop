var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello, Jon!")
});

app.get('/jon/:adj', function(req, res){
  res.send(`Jon is really ${req.params.adj}!`)
});

app.get('*', function(req, res){
  res.send("Sorry we couldn't find your page...")
});

app.listen(3000, function(){
  console.log("Server running at localhost:3000");
});