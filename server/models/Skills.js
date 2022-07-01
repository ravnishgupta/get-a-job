const { Schema, model } = require('mongoose');


const skillsSchema = new Schema({
  description: {
    type: String,
    required: true,
    index:true
  }
});

const Skills = model('Skills', skillsSchema);

module.exports = Skills;
