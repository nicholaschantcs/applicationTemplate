module.exports = function(options) {

  var app = options.app,
    seneca = options.seneca,
    logger = options.logger,
    common = options.common,
    host = options.host;

  seneca.client({
      host: host,
      port: process.env.GREET_PORT || common.GREET_PORT,
      pin: {
        role: "greet"
      }
    })
    .client({
      host: host,
      port: process.env.NUMBER_PORT || common.NUMBER_PORT,
      pin: {
        role: "number"
      }
    });

  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Express'
    });
  });

  app.post('/greetUsers', function(req, res) {
    seneca.act({
      role: 'greet',
      cmd: 'greetUser',
      user: req.body.user,
      key: ""
    }, function(args, done) {
      res.send(done.data);
      res.end();
    })
  });

}
