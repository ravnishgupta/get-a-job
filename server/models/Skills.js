const { Schema } = require('mongoose');


const Skills = new Schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = Skills;
