const { Schema, model } = require('mongoose');

const communitySchema = new Schema(
  {
    communityname:{
      type: String
    },
    recipientlist:[{
      type: Schema.Types.ObjectId,
      ref: 'Recipient'
  }],
  }
);


const Community = model('Community', communitySchema);

module.exports = Community;
