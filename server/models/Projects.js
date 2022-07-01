const { Schema } = require('mongoose');


const Projects = new Schema({
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

module.exports = Projects;
