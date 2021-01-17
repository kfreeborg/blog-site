const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'content',
    user_id: 2,
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'ontent',
    user_id: 1,
  },
  {
    title:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'content',
    user_id: 1,
  },
  {
    title: 'Nunc purus.',
    post_content: 'content',
    user_id: 2,
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'content',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
