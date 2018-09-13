
var express = require('express')
var router = express.Router()
const Users = require('../models/user');


  router.post('/signup',(req, res) => {
    console.log("route for singUp works!");
    //res.send('the post works');
    const user = req.body;
    console.log(user);
    Users.signUp(user);
  });

  router.get('/test', (req, res) => {
  console.log("test worked!");
});
router.post('/login',async (req, res, next) => {
  try{
    console.log("this is the body", req.body)
    response = await Users.login(req.body)
    console.log("this is what is returened", response);
    res.send(response);

  } catch(e) {
    next(e)
  }
  console.log("route for login works!");
  //res.send('the post works');
});



module.exports = router
