'use strict';
var mongoose = require('mongoose');
var config = require('../config.json');


var dataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    currency: {
        type: String,
        required: true, 
    },
    date: {
        type : String,
        required: true
    },
    quotes: [{
        time: {
            type: String,
            required: true,  
            validate: {
            validator: function(text) {
                if (text == null && text.length == 0)
                    return false;
                 
                return true;
            },
            message: 'Time must provided..'
          }
        },
        price: {
            type: String,
            required: true,
            validate: {
                validator: function(price) {
                    if (price == null)
                        return false;
                     
                    return true;
                },
            message: 'Price must number..'
          }
        }
     }]  
});
console.log("config " , config.DBNAME) ;
var priceList = mongoose.model(config.DBNAME, dataSchema);
 
module.exports = priceList;