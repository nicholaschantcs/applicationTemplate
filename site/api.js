"use strict";
module.exports = function api( options ) {
	var authOption = require("./options");
	this.use('ng-web')
	this.use('user')
	this.use('auth',authOption)
	
  var u = this.pin({
      role: 'user',
      cmd: '*'
    })
   u.register({
      nick: "demo",
      name: "demo",
      email: "demo@me.com",
      active: true,
      username: "demo",
      password: "password",
    })

  var greet_ops   = { greetUser:'greetUser'}
  var number_ops   = { displayRandomNumber:'displayRandomNumber'}

  this.add( 'role:api,path:greet', function( args, done ) {
    this.act( {role:'greet',
      cmd:   greet_ops[args.operation],
      user:args.user,
	  key:args.key,	
    }, done )
  })
  
this.add( 'role:api,path:number', function( args, done ) {
    this.act( {role:'number',
      cmd:   number_ops[args.operation],
      user:args.user,
	  key:args.key,	
    }, done )
  })
  
  
  this.add('init:api', function( args, done ) {
	  this.act('role:web',{use:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        greet: { GET:true, suffix:'/:operation' },
        number: { GET:true, suffix:'/:operation' },
      }
    }})
    done(null,{data:"success"})
  })
  
}
