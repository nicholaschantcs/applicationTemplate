"use strict"
module.exports = function(options) {
  var CryptoJS = require('crypto-js');
  var app = options.app,
    seneca = options.seneca,
    logger = options.logger,
    common = options.common,
    host = options.host;

  seneca.client({
    host: host,
    port: process.env.USER_PORT || common.USER_PORT,
    pin: {
      role: "userManager"
    }
  })


  var u = seneca.pin({
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

  seneca.act({
    role: 'userManager',
    cmd: 'getAllUser'
  }, function(args, done) {
    done.forEach(function(doc) {
      var bytes = CryptoJS.AES.decrypt(doc.password.toString(), "TheC!tySecret");
      var rawData = bytes.toString(CryptoJS.enc.Utf8);
		console.log(rawData);
      u.register({
        nick: doc.username,
        password: rawData,
        active: true
      })
    })
  })

  /* GET users listing. */
  app.get('/users', function(req, res, next) {
    res.send('respond with a resource');
  });

  app.post('/users/register', function(req, res, next) {
    var user = req.body.user;
    seneca.act({
      role: 'userManager',
      cmd: 'saveUser',
      user: user
    }, function(args, done) {
      res.send(done);
    })

  });

}
