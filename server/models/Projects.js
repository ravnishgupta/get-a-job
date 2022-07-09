const { Schema, model } = require('mongoose');
const skillSchema = require('./Skills')

const projectSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    index:true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  payPerHour: {
    type: Number,
    required: true
  },
  skills: 
          [
            {
              type: Schema.Types.ObjectId,
              ref: 'Skills'
            }
          ]
});

const Projects = model('Projects', projectSchema);

module.exports = Projects;
