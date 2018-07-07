// Express Setup //
const express = require('express');
const bodyParser = require("body-parser");
var users = require('./controllers/users');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', users );



// Knex Setup //
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);


app.get('/api/entries', (req, res) => {
  console.log("api test worked!");
  // knex('entries').orderBy('created','desc').then(entries => {
  //     res.status(200).json({entries:entries});
  //   }).catch(error => {
  //     console.log(error);
  //     res.status(500).json({ error });
  //   });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
