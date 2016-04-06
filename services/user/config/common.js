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

  /**
   * mongoDB Configurations
   */
  mongoDBConnection: 'mongodb://127.0.0.1:27017/applicationTemplate',
  /* LOCALHOST */
  mongopath: '/data/backup/',
  getEnvironment: function() {
    if (process.platform == "win32") {
      return ({
        path: 'C:',
        mongodumpexe: 'C:/MongoDB/bin/mongodump',
        mongorestoreexe: 'C:/MongoDB/bin/mongorestore',
      })
    } else {
      return ({
        path: '',
        mongodumpexe: 'mongodump',
        mongorestoreexe: 'mongorestore'
      })
    }
  },

}
