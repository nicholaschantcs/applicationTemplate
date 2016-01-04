"use strict";
module.exports 	= function (){
	var seneca = this;
	/**
	* registering roles for Seneca Microservices
	*/
	this.add({role:'greetAPI', cmd:'greetUser'},greetUser)
	this.add({role:'greetAPI', cmd:'displayRandomNumber'},displayRandomNumber)
	
	
function greetUser(args,done){
	var str = "Hello " ;
	if (args.user != undefined)
		str += args.user;
	done(null,{data:str})
}
	
function displayRandomNumber(args,done){
	var random = Math.random();
	
	done(null,{data:random})
}

}

