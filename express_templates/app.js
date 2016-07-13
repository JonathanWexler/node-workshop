var express = require('express');
var app = express();
var router = require('./routes/main')

app.set("view engine", "ejs");
app.locals.course = "Intro to Node";

app.get('/home', function(req, res){
  res.render("home.ejs", {name: "Jon"});
});

app.get('/', function(req, res){
  res.send("Hello, Jon!");
});

app.get('/jon/:adj', router.adjective);

app.get('*', router.any);

app.listen(3000, function(){
  console.log("Server running at localhost:3000");
});