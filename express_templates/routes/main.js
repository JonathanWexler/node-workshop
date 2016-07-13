exports.adjective = function(req, res){
  res.send(`Jon is really ${req.params.adj}!`);
}

exports.any = function(req, res){
  res.send("Sorry we couldn't find your page...");
}
