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
* @api {get} /offer/custom/:id Request offer and Place Profile information
* @apiName Combine
* @apiGroup Offer
*
* @apiParam {string} id offer unique ID.
*
* @apiSuccess {number} status 1 for success.
* @apiSuccess {String} message success message.
* @apiSuccess {number} code code for this api.
* @apiSuccess {array} data data returned from the API.
* @apiSuccessExample Example data on success
*
{
  "status": 1,
  "message": "from inner custom API",
  "code": 1,
  "data": [
    {
      "offer": {
        "_id": "56dd1b247ee7eb2f149b1194",
        "Offer_Type": "test",
        "Offer_Booking_type": "test",
        "Offer_Name": "test",
        "Offer_Included_short": "test",
        "Offer_Details": "test",
        "Offer_Time_start": "2016-03-04T00:00:00.000Z",
        "Offer_Time_end": "2016-03-04T00:00:00.000Z",
        "Offer_Time_length": 10,
        "Offer_Numbers": 10,
        "Price_today": 100,
        "Offer_Price_to_Guests": 150,
        "Offer_How_to_book": "test",
        "Offer_Active_Inactive": "test",
        "Offer_Image": "test",
        "Offer_Days": [
          "mon",
          "tue"
        ],
        "Offer_Inactive_dates": [
          "2016-03-04T00:00:00.000Z"
        ]
      }
    },
    {
      "profile": {
        "_id": "56dd1b247ee7eb2f149b1194",
        "type_of_place": "test",
        "reception_or_desk": "test",
        "internet_wifi": "test",
        "sound_level": "test",
        "is_crowded": "test",
        "pets_allowed": true,
        "power": "test",
        "printing": "test",
        "postal_service": "test",
        "parking": "test",
        "comments_to_facilities": "test",
        "profile_image1": "test",
        "profile_image2": "test",
        "profile_image3": "test",
        "other_facilities": [
          "test"
        ],
        "seat_with_table": [
          "test"
        ]
      }
    }
  ]
}
*@apiErrorExample {json} Error-Response:
*
{
  "status": 0,
  "message": "id not found",
  "code": 0,
  "data": null
}
*
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
            cb(null, failure('id not found',0,err));
        }
    });
}
module.exports = {
    Combine: Combine
}
