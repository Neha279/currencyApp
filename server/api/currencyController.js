'use strict';

var dbCtrl = require('../db/priceDbController.js');

/*we can have util.js with all other utils methods but as we using few so keeping here*/
Array.prototype.hasMax = function(attrib) { 
    return this.reduce(function(prev, curr){ 
        return parseFloat(prev[attrib]) > parseFloat(curr[attrib]) ? prev : curr; 
    });
 }
function formatDate(str){
	var ymd = str.match(/.{1,4}/g);
    var md= ymd[1].match(/.{1,2}/g);
	return ymd[0]+'-'+md.join("-");
} 
function formatTime(str){
    return str.match(/.{1,2}/g).join(":");
}


exports.getBestProfit = function (req, res) {
	console.log("requests" , req.params, req.query);
	var _date =  req.query.date; // assume the date the paramter pass by UI  
 	console.log("Lets calculate the all currency profits ..." , _date);
	try{
		dbCtrl.getPriceListByCond({'date': _date}).then(function(result) {
			console.log("we go the price list ", JSON.stringify(result ));
			var df = formatDate(_date);
			var proiftResponse = {date : df, currencyList:[]};
			
			result.forEach(function (item) {
				//we assume records are sort by time in day
				var minobj = item.quotes[0];
				var mindt = new Date(df + "::" + formatTime(minobj.time));
				var minprice = parseFloat(minobj.price);  //we assume records are sort by time in day otherwise can use sortby
				var maxobj = item.quotes.hasMax('price') ;
				var maxprice = parseFloat(maxobj.price);
				var maxdt = new Date(df + "::" + formatTime(maxobj.time));
				var profit = parseFloat(maxprice-minprice).toFixed(2);
				proiftResponse['currencyList'].push({currency:item.currency, 
					buyPrice: "$"+minprice,   //assume all $
					buyTime: mindt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),     // time format
					sellPrice : "$"+ maxprice,
					sellTime : maxdt.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
					profit : "$"+ profit
				});
			});
			console.log("we go the profit list ", JSON.stringify(proiftResponse));
			res.json(proiftResponse);
			res.end();
		}, function(err) {
		    console.log(err);
		    res.send({"message" : "Error on retrive data "});
		});

	} catch(err){
	    console.log(err);
	    res.send({ message: "Error on parsing data.." });
	}
	//we can improve the error handling by adding more checks & various http status--
};