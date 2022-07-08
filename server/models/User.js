const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//initial version of model

// import schema from Book.js
//const projectSchema = require('./Projects');

const userSchema = new Schema(
  {
    
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    applications: {
      type: String,
      required: false
    },
    availableNow: {
      type: Boolean,
      required: true
    },
    hourlyRate: {
      type: Double,
      required: true
    },
    gitHub: {
      type: String,
      required: true
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// userSchema.virtual('applicationCount').get(function () {
//   return this.applications.length;
// });

const User = model('User', userSchema);

module.exports = User;
