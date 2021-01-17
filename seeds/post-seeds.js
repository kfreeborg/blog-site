const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    post_content: 'Such good content',
    user_id: 2,
  },
  {
    title: 'Post 2',
    post_content: 'Even better content',
    user_id: 1,
  },
  {
    title: 'Post 3',
    post_content: 'The best content in the world!',
    user_id: 1,
  },
  {
    title: 'Post 4',
    post_content: 'Crappy content',
    user_id: 2,
  },
  {
    title: 'Post 5',
    post_content: 'A good dad joke',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
