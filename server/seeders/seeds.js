
const userSeeds = require('./userSeed.json');
const skillSeeds = require('./skillSeed.json');
const projectSeeds = require('./projectSeed.json');
const db = require('../config/connection');
const {User, Projects, Skills } = require('../models');

db.once('open', async () => {
  try {
    //await Thought.deleteMany({});
    await User.deleteMany({});
    await Projects.deleteMany({});
    await Skills.deleteMany({});

    await User.create(userSeeds);
    await Projects.create(projectSeeds);
    await Skills.create(skillSeeds);

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});