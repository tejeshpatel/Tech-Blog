const sequelize = require('../config/config');
const { Post } = require('../models');

const blogposts = require('./posts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const post = await Post.bulkCreate(blogposts, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();