'use strict';

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var priceModel = require('./dataModel.js');
var config = require('../config.json');
  
exports.updateBulkPriceList= function (jsonData) {
  return new Promise((resolve, reject) => {
    var priceData = [];
    for(var item of jsonData) {
      console.log('item: ', JSON.stringify(item));
      item['_id'] = new mongoose.Types.ObjectId();
      var data = new priceModel(item);
      priceData.push(data);
    }

    MongoClient.connect(config.DB_URL, function(err, database) {
      if (err) reject(err);
      console.log("Database connected!");
      let db = database.db(config.DBNAME);
      db.collection(config.COLLECTIONAME).insertMany(priceData, function(err, res) {
        if (err) reject(err);
        console.log( res.insertedCount + ' Price List have been successfully uploaded.');
        database.close();
        resolve(res.insertedCount); 
      });  
    });
  }); 
};

exports.getPriceListByCond = function (query) { 
  return new Promise((resolve, reject) => {  
    console.log("get data of "  + query);
    if(query == null)
       reject('Invalid inputs');  

    return MongoClient.connect(config.DB_URL, function(err, database) {
        if (err) reject('Error in Retrieving Price List .', err);
        console.log("Database connected!");
        let db = database.db(config.DBNAME);
        db.collection(config.COLLECTIONAME).find(query).toArray(function(err, result) {
          if (err) { reject('Error in Retrieving Price List .', err); }
          database.close();
          //console.log("Result : " , result);
          resolve(result);
        });
    });  
  }); 
};