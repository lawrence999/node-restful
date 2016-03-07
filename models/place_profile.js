var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

var placeProfile = new Schema({
    "type_of_place": {"type": "string","required": true},
    "seat_with_table": {"type": ["string"],"required": true},
    "reception_or_desk": {"type": "string","required": true},
    "internet_wifi": {"type": "string","required": true},
    "sound_level": {"type": "string","required": true},
    "is_crowded": {"type": "string","required": true},
    "pets_allowed": {"type": "boolean","required": true},
    "power": {"type": "string","required": true},
    "printing": {"type": "string","required": true},
    "postal_service": {"type": "string","required": true},
    "parking": {"type": "string","required": true},
    "other_facilities": {"type": ["string"],"required": true},
    "comments_to_facilities": {"type": "string","required": true},
    "profile_image1": {"type": "string","required": true},
    "profile_image2": {"type": "string"},
    "profile_image3": {"type": "string"}
  }, {
	versionKey: false
})

module.exports = restful.model('placeProfile', placeProfile)
                        .methods(['get', 'post', 'put', 'delete']);
