"use strict";
var seneca = require('seneca')()
var logger = require('./config/logger');
var common = require('./config/common');
var host = process.env.PROXY_HOST || common.host;

var init = {
	logger:logger,
	common:common
}
seneca
	.use('NumberService',init)
	.listen({port:common.NUMBER_PORT,pin:{role:'number'}})

seneca.act({role:'number', cmd:'displayRandomNumber'},function(args,done){
	console.log(done);
})
