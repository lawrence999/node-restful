// apidoc -i ./modules routes.js -o ./doc
// npm install apidoc -g

/**
* @api {GET} /offer get all offers
* @apiName getoffer
* @apiGroup Offer
*
* @apiSuccess {array} data array of offers returned from the API.
* @apiSuccessExample Example data on success
[
  {
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
]
*
*/


/**
* @api {get} /offer/:id get particular offer details
* @apiName getoffer_id
* @apiGroup Offer
*
* @apiParam {string} id offer unique ID.
*
* @apiSuccess {object} data data returned from the API.
* @apiSuccessExample Example data on success
*
{
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
*
*/


/**
* @api {post} /offer insert new offer details
* @apiName postoffer
* @apiGroup Offer
*
* @apiParam {string} Offer_Type Work spot, Mini conference, Job event, Others.
* @apiParam {string} Offer_Booking_type Dropin, Book first - see details, Other.
* @apiParam {string} Offer_Name name of the offer.
* @apiParam {string} Offer_Included_short Shown in offer summary.
* @apiParam {string} Offer_Details details of the offer.
* @apiParam {date} Offer_Time_start offer start date.
* @apiParam {date} Offer_Time_end offer end date.
* @apiParam {number} Offer_Time_length number of hours that the offer is available.
* @apiParam {number} Offer_Numbers Number of offers per time slot .
* @apiParam {number} Price_today Price today for same contents (inkl VAT).
* @apiParam {number} Offer_Price_to_Guests Offer Price to Guests.
* @apiParam {string} Offer_How_to_book description of how to book with the offer.
* @apiParam {string} Offer_Active_Inactive Active,Paused,Delete.
* @apiParam {string} Offer_Image offer image url.
* @apiParam {array} Offer_Days Offer Days in week that the offer is valid.
* @apiParam {array} Offer_Inactive_dates Offer Inactive dates .
*
* @apiSuccess {object} data data returned from the API.
* @apiSuccessExample Example data on success
*
{
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
  "_id": "56dd78137d13dbc0435fb13c",
  "Offer_Days": [
    "mon",
    "tue"
  ],
  "Offer_Inactive_dates": [
    "2016-03-04T00:00:00.000Z"
  ]
}
*
*/



/**
* @api {put} /offer/:id update an existing offer
* @apiName putoffer
* @apiGroup Offer
*
* @apiParam {string} id offer unique ID that should be passed in the URL.
* @apiParam {string} Offer_Type Work spot, Mini conference, Job event, Others.
* @apiParam {string} Offer_Booking_type Dropin, Book first - see details, Other.
* @apiParam {string} Offer_Name name of the offer.
* @apiParam {string} Offer_Included_short Shown in offer summary.
* @apiParam {string} Offer_Details details of the offer.
* @apiParam {date} Offer_Time_start offer start date.
* @apiParam {date} Offer_Time_end offer end date.
* @apiParam {number} Offer_Time_length number of hours that the offer is available.
* @apiParam {number} Offer_Numbers Number of offers per time slot .
* @apiParam {number} Price_today Price today for same contents (inkl VAT).
* @apiParam {number} Offer_Price_to_Guests Offer Price to Guests.
* @apiParam {string} Offer_How_to_book description of how to book with the offer.
* @apiParam {string} Offer_Active_Inactive Active,Paused,Delete.
* @apiParam {string} Offer_Image offer image url.
* @apiParam {array} Offer_Days Offer Days in week that the offer is valid.
* @apiParam {array} Offer_Inactive_dates Offer Inactive dates .
*
* @apiSuccess {object} data data returned from the API.
* @apiSuccessExample Example data on success
*
{
  "_id": "56dd1b247ee7eb2f149b1194",
  "Offer_Type": "updated",
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
*
*/


/**
* @api {Delete} /offer/:id delete a particular offer
* @apiName deleteoffer
* @apiGroup Offer
*
* @apiParam {string} id offer unique ID which is to be deleted passed along the URL.
*
*@apiErrorExample {json} Error-Response:
*
{
  "status": 404,
  "message": "Object not found",
  "name": "ObjectNotFound",
  "errors": {
    "_id": {
      "message": "Could not find object with specified attributes"
    }
  }
}
*
*/
