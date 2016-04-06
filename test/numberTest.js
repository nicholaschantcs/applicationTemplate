"use strict"
var logger = require('./config/logger');
var common = require('./config/common');
var init = {
	logger:logger,
	common:common
};

var assert  	 	= require('chai').assert,
	expect  	 	= require('chai').expect,
	seneca 			= require('seneca')();
	require("should");

seneca.use('../services/number/NumberService.js',init);
	
describe('A Number Microservice', function() {
	
it('should run displayRandomNumber from number service', function(done){
	seneca.act({role:'number', cmd:'displayRandomNumber'},function(args,cb){
		console.log(cb);
		expect(cb).to.not.be.null;
		done();
	})
});
	

})

