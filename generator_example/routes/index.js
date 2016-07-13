var express = require('express');
var router = express.Router();
var data = require('../data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// One park
router.get('/park/:name', function(req, res, next) {
  var approved_parks = [];
  data.national_parks.forEach(function (park) {
    if (park.name.toLowerCase() === req.params.name.toLowerCase()) {
      approved_parks.push(park);
    };
  })
  res.render('parks', { title: 'Park Search', parks: approved_parks });
});

// All parks
router.get('/parks', function(req, res, next) {
  res.render('parks', { title: 'Park Search', parks: data.national_parks });
});

// Post to parks
router.post('/park', function(req, res, next) {
  if(typeof(req.body.name) !== 'undefined' && req.body.name !== '') data.national_parks.push({"name": req.body.name});
  res.redirect('/parks');
});

module.exports = router;
