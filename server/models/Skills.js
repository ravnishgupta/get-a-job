const { Schema, model } = require('mongoose');


const skillsSchema = new Schema({
  description: {
    type: String,
    required: true,
    index:true
  }
});


module.exports = skillsSchema;
