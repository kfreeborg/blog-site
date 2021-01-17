const { User } = require('../models');

const userdata = [
  {
    username: 'stracy',
    email: 'stracy@abc.com',
    password: 'password123',
  },
  {
    username: 'kfreeborg',
    email: 'kfreeborg@abc.com',
    password: 'password123',
  },
  {
    username: 'snowboardgod',
    email: 'ihateskiing@abc.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
