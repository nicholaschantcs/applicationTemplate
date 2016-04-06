"use strict";
var seneca = require('seneca')()
var logger = require('./config/logger');
var common = require('./config/common');
var host = process.env.PROXY_HOST || common.host;

var init = {
  logger: logger,
  common: common
}
seneca
  .use('UserService', init)
  .listen({
    port: common.USER_PORT,
    pin: {
      role: 'userManager'
    }
  })

seneca.act({
  role: 'userManager',
  cmd: 'getAllUser'
}, function(args, done) {
  logger.verbose("Records found")
  console.log(done);
})


