const { Schema, model } = require('mongoose');

const communitySchema = new Schema(
  {
    communityname:{
      type: String
      // ,required: true
  }
  }
);


const Community = model('Community', communitySchema);

module.exports = Community;
