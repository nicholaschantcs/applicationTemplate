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

seneca.use('../services/user/UserService.js',init);
	
describe('A User Microservice', function() {
	
it('should run getAllUser from user service', function(done){
	seneca.act({role:'userManager', cmd:'getAllUser'},function(args,cb){
		console.log(cb);
		expect(cb).to.not.be.null;
		done();
	})
});
	
it('should run saveUser from user service', function(done){
	seneca.act({role:'userManager', cmd:'saveUser',user:{username:"test",password:"test"}},function(args,cb){
		console.log(cb);
		expect(cb.ok).to.equals(1);
		done();
	})
});
	
it('should run saveUser from user service', function(done){
	seneca.act({role:'userManager', cmd:'getAllUser'},function(args,cb){
		console.log(cb);
		expect(cb.length).to.not.equals(0);
		done();
	})
});

	
})

