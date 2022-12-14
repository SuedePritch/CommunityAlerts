const { Schema, model } = require('mongoose');

const contactListSchema = new Schema(
  {
    contactListTitle:{
      type: String,
      unique: true
    },
    contacts:[{
          firstname: String,
          lastname: String,
          phonenumber: String
      }]
  }
);


const ContactList = model('ContactLists', contactListSchema);

module.exports = ContactList;
