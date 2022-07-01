const { Schema, model } = require('mongoose');


const projectSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    index:true
  }
});

const Projects = model('Projects', projectSchema);

module.exports = Projects;
