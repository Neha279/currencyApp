var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our model for our unit testing.
var dataModel = require('../db/dataModel.js');

describe("Get all data", function(){
         // Test will pass if we get all todos
        it("should return all price list ", function(done){
            var dataMock = sinon.mock(dataModel);
            var expectedResult = {status: true, dataModel: []};
            dataMock.expects('find').yields(null, expectedResult);
            dataModel.find(function (err, result) {
                dataMock.verify();
                dataMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });

        // Test will pass if we fail to get a price list 
        it("should return error", function(done){
            var dataMock = sinon.mock(dataModel);
            var expectedResult = {status: false, error: "Something went wrong"};
            dataMock.expects('find').yields(expectedResult, null);
            dataModel.find(function (err, result) {
                dataMock.verify();
                dataMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
        });
    });

 // Test will pass if the price list  is saved
    describe("Post a price lists", function(){
        it("should create new record ", function(done){
            var dataMock = sinon.mock(new dataModel({ data: 'Save new todo from mock'}));
            var data = dataMock.object;
            var expectedResult = { status: true };
            dataMock.expects('save').yields(null, expectedResult);
            data.save(function (err, result) {
                dataMock.verify();
                dataMock.restore();
                expect(result.status).to.be.true;
                done();
            });
        });
        // Test will pass if the price list is not saved
        it("should return error, if post not saved", function(done){
            var dataMock = sinon.mock(new dataModel({ data: 'Save new todo from mock'}));
            var data = dataMock.object;
            var expectedResult = { status: false };
            dataMock.expects('save').yields(expectedResult, null);
            data.save(function (err, result) {
                dataMock.verify();
                dataMock.restore();
                expect(err.status).to.not.be.true;
                done();
            });
        });
    });
