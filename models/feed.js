const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

module.exports =  {
  like_post: function (post)
  {
    knex.insert(
        post
      )
        .into("likes")
        .then(() => console.log('the post was liked'));
  }

  unlike_post: function (post)
  {
    knex('likes')
    .where(post)
    .del()
    .then(() => console.log('the post was unliked'))
  }

  create_post: function (post)
  {

  }

};
