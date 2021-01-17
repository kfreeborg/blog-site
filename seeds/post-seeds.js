const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'content',
    user_id: 10,
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'content',
    user_id: 8,
  },
  {
    title:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'content',
    user_id: 1,
  },
  {
    title: 'Nunc purus.',
    content: 'content',
    user_id: 4,
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'content',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
