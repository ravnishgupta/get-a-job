const { AuthenticationError } = require('apollo-server-express');
const { User, Projects, Skills } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('applications')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addUser: async (parent, { input }) => {
      const user = await User.create(input);
      
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
    saveProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { applications: projectId } },
          { new: true }
        ).populate('applications');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
    
}
  
  module.exports = resolvers;