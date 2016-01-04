"use strict";
var seneca = require('seneca')()

seneca
	.use('GreetService')
	.listen({host:'localhost',port:9002,pin:{role:'greetAPI'}})

seneca.act({role:'greetAPI', cmd:'displayRandomNumber'},function(args,done){
	console.log(done);
})
