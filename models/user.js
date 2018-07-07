const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

const tableName = "users";

module.exports =  {


  signUp: function (user)
  {
    knex.insert(
        user
      )
        .into("users")
        .then(() => console.log('user Signed Up!'));
  },

  login: function (userInfo)
  {
    console.log("this is what userinfo looks like: ",userInfo);
    return knex("users")
    .where(userInfo)
    .select("id","name")
    .then(function(response) {
      console.log("this is my response ",response)
      return response
    })
    .catch(function(error) {
    console.log("couldnt login",error);
    });




}

};
