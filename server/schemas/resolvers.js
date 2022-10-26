const { User, Community} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const Recipients = require('../models/Recipients');



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

    //Recipients
    // recipients: async (parent, context) =>{
    //   return Recipients.find()
    // }
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


    //Recipients -- phone number lists
    createNewRecipientList: async (parent, args, context) => {
      const recipientCreation = await Recipients.create(args)
      const addRecipientListToCommunity = await Community.findOneAndUpdate(context.community, { $push: { recipientlist: recipientCreation._id }})
      return addRecipientListToCommunity
    },
  }
};

module.exports = resolvers;
