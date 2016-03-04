/*
 * Routes file
 * @version 1.0
 * @package Webservices
 * @author Joseph Lawrence
 */
// var offer = require('./modules/offer/offerController');
var Offer_model = require('./models/offer');
var config = require('./config');

module.exports = function(app) {

  var config = app.get('config');
  console.log(config);

  // Root
  app.get("/", function(req, res) {
      res.json({
          api: config.project_name,
          version: config.version,
          env: app.get('env')
      });
  });

  Offer_model.register(app, '/offer');
}
