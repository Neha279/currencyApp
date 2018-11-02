var express = require('express');
var app = express();
var mongoose = require('mongoose');
var currencyCtr = require('./api/currencyController.js');
var config = require('./config.json');

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect(config.DB_URL);

// route pages
app.get('/', function (req, res) {
  res.send('Main page is up and running!');
});
// Get profit summary API 
app.get('/getProfitSummary', function (req, res) {	
  currencyCtr.getBestProfit(req, res);
});
// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});