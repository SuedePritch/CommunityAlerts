const { Schema, model } = require('mongoose');

const communitySchema = new Schema(
  {
    communityname:{
      type: String
    },
    recipients:[{
          firstname: String,
          lastname: String,
          phonenumber: String
      }]
  }
);


const Community = model('Community', communitySchema);

module.exports = Community;
