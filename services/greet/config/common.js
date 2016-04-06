module.exports = {

  host: "localhost",
  /**
   * Seneca Options
   */
  senecaTimeout: 99999,
  /**
   * Seneca Listener & Clients
   */
  GREET_PORT: 9001,
  NUMBER_PORT: 9002,
  USER_PORT: 9003,

  /**
   * Winston Logging Configurations
   */
  winstonLogPath: '/winston/logs/',

  getEnvironment: function() {
    if (process.platform == "win32") {
      return ({
        path: 'C:'
      })
    } else {
      return ({
        path: ''
      })
    }
  }
	
}
