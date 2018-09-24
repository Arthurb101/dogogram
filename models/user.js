const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const saltRounds = 10;
const bcrypt = require('bcrypt');

const tableName = "users";

module.exports =  {


  signUp: function (user)
  {
    console.log("this is the password ", user.password)
    console.log("this is the salt ", saltRounds)
    bcrypt.hash(user.password, saltRounds).then(function(hash) {
    user.password = hash
    console.log("this is the hash password ",hash)
    knex.insert(
        user
      )
        .into("users")
        .then(() => console.log('user Signed Up!'));
      });
  },

  login: function (userInfo)
  {

    password = userInfo.password;
    delete userInfo["password"];
    console.log("this is what userinfo looks like: ",userInfo);
    return knex("users")
    .where(userInfo)
    .select("id","name","password")
    .then( async function(response) {
      console.log("this is th response, " , response)
      response_password = response[0].password;
        delete response[0].password; //dont want to send password back to user
        console.log("response password ", response_password);
        match = await bcrypt.compare(password, response_password);
        if(match) {
        response_username = response[0].name
         console.log("passwords are a match");
         return response
        } else {
          console.log("passwords dont match");
          return match;
        }
    })
    .catch(function(error) {
    console.log("couldnt login",error);
    });




}

};
