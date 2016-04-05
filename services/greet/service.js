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
	.use('GreetService',init)
	.listen({port:common.GREET_PORT,pin:{role:'greet'}})
