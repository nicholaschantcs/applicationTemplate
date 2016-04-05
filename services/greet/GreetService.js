"use strict";
module.exports 	= function (options){
	var seneca = this;
    var common = options.common;
	var logger = options.logger;
	/**
	* registering roles for Seneca Microservices
	*/
	this.add({role:'greet', cmd:'greetUser'},greetUser)
	
function greetUser(args,done){
	var str = "";
	
	if(args.key != undefined){
		str = "Hello " ;
		if(args.user != undefined)
			str += args.user;
	}
	done(null,{data:str})
}

}

