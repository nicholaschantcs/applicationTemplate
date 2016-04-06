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

seneca.use('../services/greet/GreetService.js',init);
	
describe('A Greet Micrservice', function() {
	
it('should run greetUser from greet service', function(done){
	seneca.act({role:'greet', cmd:'greetUser'},function(args,cb){
		console.log(cb);
		expect(cb.data).to.equal("Hello ");
		done();
	})
});
	
it('should run greetUser from greet service', function(done){
	var name = "demo";
	seneca.act({role:'greet', cmd:'greetUser',user:name},function(args,cb){
		console.log(cb);
		expect(cb.data).to.equal("Hello " + name);
		done();
	})
});
	
	
})

