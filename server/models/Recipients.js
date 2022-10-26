const { Schema, model } = require('mongoose');

const recipientSchema = new Schema(
  {
    recipientTitle:{
      type: String
    },
    recipients:[{
          firstname: String,
          lastname: String,
          phonenumber: String
      }]
  }
);


const Recipients = model('Recipients', recipientSchema);

module.exports = Recipients;
