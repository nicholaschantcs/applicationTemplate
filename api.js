"use strict";
module.exports = function api( options ) {
	this.use('ng-web')

  var greet_ops   = { greetUser:'greetUser',displayRandomNumber:'displayRandomNumber'}

  this.add( 'role:api,path:greet', function( args, done ) {
    this.act( {role:'greetAPI',
      cmd:   greet_ops[args.operation],
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
      }
    }})
    done(null,{data:"success"})
  })
  
}
