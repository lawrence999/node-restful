/**
 * offerService is to manage the offer  APIs of offerContoller
 * @version 1.0
 * @package Webservices
 * @author joseph lawrence
 * @createdOn 5-mar-2016
 */

 var http = require('http');
 var fs = require("fs");
 var failure = require('../../middleware/responsehelpers').failure;
 var success = require('../../middleware/responsehelpers').success;
 var PlaceProfile = require('../../models/place_profile');
 var Offer = require('../../models/offer');
 /**
  * definition of custom API
  * @author joseph lawrence
  * @return json
  * @createdOn 5-mar-2016
  * @modifiedOn 5-mar-2016
  */

  function Combine(req, cb) {
      var id = req.params.id;
      var result =[];
      PlaceProfile.findOne({_id: id}).exec(function (err, place_profile_doc) {
        if (place_profile_doc != null) {
              Offer.findOne({_id: place_profile_doc._id}).exec(function (err,offer_doc ) {
                if (place_profile_doc != null) {
                    result.push({offer : offer_doc});
                    result.push({profile :place_profile_doc});

                    cb(null, success('from inner custom API', 1,result));
                } else {
                    cb(null, failure('from inner custom API',0,err));
                }
            });
        } else {
            cb(null, failure('from outer custom API',0,err));
        }
    });
  }
 module.exports = {
     Combine: Combine
  }
