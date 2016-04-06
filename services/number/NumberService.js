"use strict";
module.exports = function(options) {
  var seneca = this;
  var common = options.common;
  var logger = options.logger;
  /**
   * registering roles for Seneca Microservices
   */
  this.add({
    role: 'number',
    cmd: 'displayRandomNumber'
  }, displayRandomNumber)

  function displayRandomNumber(args, done) {
    var random = Math.random();
    random *= 100;
    try {
      var intRandom = parseInt(random);
      done(null, {
        data: intRandom
      })
    } catch (err) {
      done(err)
    }
  }
}
