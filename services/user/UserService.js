"use strict";
module.exports = function(options) {
  var seneca = this,
    common = options.common,
    logger = options.logger,
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = common.mongoDBConnection,
    collectionName = "user",
    ObjectId = require('mongodb').ObjectID;

  /**
   * registering roles for Seneca Microservices
   */
  this.add({
    role: 'userManager',
    cmd: 'getAllUser'
  }, getAllUser)

  this.add({
    role: 'userManager',
    cmd: 'saveUser'
  }, saveUser)

  function getAllUser(args, done) {
    MongoClient.connect(mongoUrl, function(err, db) {
      if (err) {
        logger.error(err)
        done(err)
      } else {
        try {
          var collection = db.collection(collectionName);
          collection.find().toArray(function(err1, docs) {
            if (err1) {
              logger.error(err1)
              db.close()
              done(err)
            } else {
              db.close()
              done(null, docs)
            }
          })
        } catch (e) {
          logger.error(e)
          done(e);
        }
      }
    });
  }

  function saveUser(args, done) {
    var objToInsert = args.user;
    MongoClient.connect(mongoUrl, function(err, db) {
      if (err) {
        logger.error(err)
        done(err)
      } else {
        try {
          var collection = db.collection(collectionName);
          collection.findOneAndUpdate({
              username: objToInsert.username
            }, {
              $set: objToInsert
            }, {
              upsert: true,
              returnNewDocument: true
            },
            function(err1, result) {
              if (err1) {
                logger.error(err1)
                db.close()
                done(err1)
              } else {
                logger.silly("User saved")
                db.close()
                if (result.ops)
                  done(null, result.ops)
                else
                  done(null, result)
              }
            })
        } catch (e) {
          logger.error(e)
          done(e);
        }
      }
    });
  }

}
