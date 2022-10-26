const { Schema, model } = require('mongoose');

const communitySchema = new Schema(
  {
    communityname:{
      type: String
    },
    contactlists:[{
      type: Schema.Types.ObjectId,
      ref: 'ContactLists'
  }],
  }
);


const Community = model('Community', communitySchema);

module.exports = Community;
