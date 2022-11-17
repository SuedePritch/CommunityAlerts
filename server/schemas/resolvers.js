const { User, Community} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const ContactLists = require('../models/ContactLists');



const resolvers = {
  Query: {
    //USER
    //Single User
    user: async (parent, { _id }, context)=> {  
      if (context.user) {
      return User.findOne({
          _id: context.user._id 
          });
      }
      throw new AuthenticationError('You need to be logged in! resolvers');
  
    },


    //Community
    communities: async () => {
      return Community.find()
    },

    //ContactLists
    contactList: async (parent, args, context) =>{
      return Community.findById({
        _id: context.user.community
      }).populate('contactlists')

    }
  },


















  Mutation: {
    //USER
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },


    //COMMUNITY
    newCommunity: async(parent, args) =>{
      const community = await Community.create(args)
      return {community}
    },


    //ContactLists -- phone number lists
    createNewContactList: async (parent, args, context) => {
      const contactsCreation = await ContactLists.create(args)
      const addContactListToCommunity = await Community.findOneAndUpdate(context.community, { $push: {  contactlists: contactsCreation._id }})
      return addContactListToCommunity
    },

    addPhoneNumberToContactList: async (parent, {contactLists, contacts}) =>{
      return ContactLists.findByIdAndUpdate(
        {_id: contactLists},
        {$push:{
          contacts: contacts
        }
      },{ new: true })
      

    },
  }
};

module.exports = resolvers;
