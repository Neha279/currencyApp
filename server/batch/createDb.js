'use strict';

var MongoClient = require('mongodb').MongoClient;
var config = require('../config.json');
var json_data = require('../data.json');
var dbCtrl = require('../db/priceDbController.js');
var url = config.DB_URL+"/"+ config.DBNAME;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

dbCtrl.updateBulkPriceList(json_data).then(function(result) {
	console.log("database all set !! " , result)
}, function(err) {
    console.log(err);
});